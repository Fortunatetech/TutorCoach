'use client';

import { TESTIMONIALS } from '@/data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';
import { useState, useRef } from 'react';

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 420; // Card width (400px) + gap (20px)
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Show/hide left arrow
    setShowLeftArrow(container.scrollLeft > 0);

    // Show/hide right arrow
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
    setShowRightArrow(!isAtEnd);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-teal-500 font-semibold uppercase tracking-wide">
            Student Success Stories
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6">
            What My Students Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Real feedback from students who transformed their learning journey
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-brand-teal-500 hover:text-white transition-all"
    // Added 'hidden md:flex' to hide on mobile
              aria-label="Previous testimonials"
            >

              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-brand-teal-500 hover:text-white transition-all group"
              aria-label="Next testimonials"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-neutral-300"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">
            Join {TESTIMONIALS.length}+ students who transformed their learning
          </p>
          <a href="#services" className="inline-block px-8 py-3 bg-brand-teal-500 text-white rounded-lg font-semibold hover:bg-brand-teal-600 transition-colors shadow-lg hover:shadow-xl">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
