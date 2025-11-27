import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface BookingData {
  name: string;
  email: string;
  service: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create booking object
    const booking = {
      id: `bk_${Date.now()}`,
      ...body,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    // Save to file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'bookings.json');

    // Create directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Read existing bookings or create empty array
    let bookings: any[] = [];
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8');
      bookings = JSON.parse(fileContent);
    }

    // Add new booking
    bookings.push(booking);

    // Write back to file
    await writeFile(filePath, JSON.stringify(bookings, null, 2));

    // Send email notifications using Resend
    try {
      // 1. Email to admin (you)
      await resend.emails.send({
        from: 'TutorCoach <onboarding@resend.dev>',
        to: [process.env.RESEND_TO || 'fortunateayodele250@gmail.com'],
        replyTo: body.email,
        subject: `New Booking Request from ${body.name}`,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Booking ID:</strong> ${booking.id}</p>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Service:</strong> ${body.service}</p>
          ${body.message ? `<p><strong>Message:</strong><br>${body.message.replace(/\n/g, '<br>')}</p>` : ''}
          <p><strong>Date:</strong> ${new Date(booking.createdAt).toLocaleString()}</p>
          <hr>
          <p><em>Reply to this email to contact ${body.name}</em></p>
        `,
      });

      // 2. Confirmation email to user
      await resend.emails.send({
        from: 'TutorCoach <onboarding@resend.dev>',
        to: [body.email],
        subject: 'Booking Request Received - TutorCoach',
        html: `
          <h2>Thank You for Your Booking Request!</h2>
          <p>Hi ${body.name},</p>
          <p>I've received your booking request for <strong>${body.service}</strong>.</p>
          <p><strong>What's Next:</strong></p>
          <ul>
            <li>I'll review your request within 24 hours</li>
            <li>You'll receive an email with available time slots</li>
            <li>We'll schedule your first session together</li>
          </ul>
          <p><strong>Your Booking Details:</strong></p>
          <ul>
            <li><strong>Booking ID:</strong> ${booking.id}</li>
            <li><strong>Service:</strong> ${body.service}</li>
            <li><strong>Date Submitted:</strong> ${new Date(booking.createdAt).toLocaleString()}</li>
          </ul>
          ${body.message ? `<p><strong>Your Message:</strong><br>${body.message.replace(/\n/g, '<br>')}</p>` : ''}
          <hr>
          <p>Questions? Just reply to this email.</p>
          <p>Looking forward to working with you!<br>
          <strong>TutorCoach</strong></p>
        `,
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      message: 'Booking request received successfully',
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'bookings.json');

    if (!existsSync(filePath)) {
      return NextResponse.json({ bookings: [] });
    }

    const fileContent = await readFile(filePath, 'utf-8');
    const bookings = JSON.parse(fileContent);

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Error reading bookings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}