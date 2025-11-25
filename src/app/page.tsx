'use client';

import Hero from '@/components/sections/Hero';
import TrustRow from '@/components/sections/TrustRow';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import FloatingCTA from '@/components/ui/FloatingCTA';
import { useState } from 'react';
import BookingModal from '@/components/sections/BookingModal';

export default function Home() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Hero />
      <TrustRow />
      <Services />
      <Testimonials />
      <CTASection />
      <FloatingCTA onClick={() => setShowBooking(true)} />
      <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} />
    </>
  );
}