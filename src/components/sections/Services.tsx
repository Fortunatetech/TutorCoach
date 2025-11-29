'use client';

import { useState } from 'react';
import { SERVICES } from '@/data/services';
import ServiceCard from '../ui/ServiceCard';
import BookingModal from './BookingModal';

export default function Services() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookNow = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowBooking(true);
  };

  return (
    <>
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-teal-500 font-semibold uppercase tracking-wide">My Services</span>
            <h2 className="text-5xl font-bold mt-4 mb-6">
              Expert Guidance in <span className="text-brand-teal-500">Everything You Need</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From academic tutoring to career coaching, get personalized 1-on-1 support that drives real results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onBookNow={() => handleBookNow(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)}
        preselectedService={selectedService}
      />
    </>
  );
}