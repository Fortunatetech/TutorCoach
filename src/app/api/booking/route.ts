import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

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

    // TODO: Send email notifications here using Resend if API key is configured

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