import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'TutorCoach | Expert 1-on-1 Tutoring & Career Coaching',
  description: 'Transform your learning with personalized tutoring. Expert guidance in writing, programming, test prep, and career development.',
  keywords: 'tutoring, online tutor, career coaching, programming lessons, writing coach',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}