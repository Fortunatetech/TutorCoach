'use client';

import { useEffect } from 'react';

export default function BookConsultationPage() {
  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com';

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Book Your Free Consultation</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Let&apos;s discuss your goals and create a personalized learning plan. No commitment required.
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ minHeight: '700px' }}>
            <div
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Benefits */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Personalized Plan</h3>
              <p className="text-neutral-600">We&apos;ll create a custom learning roadmap for your goals</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-lg mb-2">No Pressure</h3>
              <p className="text-neutral-600">Just a friendly conversation about how I can help</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-2">Get Started Fast</h3>
              <p className="text-neutral-600">We can begin your journey right after our call</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}