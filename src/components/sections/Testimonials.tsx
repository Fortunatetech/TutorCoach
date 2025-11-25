'use client';

import { TESTIMONIALS } from '@/data/testimonials';
import TestimonialCard from '@/components/ui/TestimonialCard';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <span className="text-brand-teal-500 font-semibold uppercase tracking-wide">Student Success</span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            Real Students, <span className="text-brand-teal-500">Real Results</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See how personalized tutoring has transformed learning for students just like you
          </p>
        </div>
      </div>

      {/* Horizontal scrolling testimonials */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div key={i} className="flex-shrink-0 w-[400px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}