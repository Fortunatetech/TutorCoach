import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-accent-yellow-500 text-xl">⭐</span>
        ))}
      </div>

      {/* Quote icon */}
      <div className="text-5xl text-brand-teal-500/30 mb-4">&apos;</div>

      {/* Text */}
      <p className="text-lg text-neutral-700 mb-6 flex-1 italic">
        {testimonial.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal-400 to-brand-navy-900 flex items-center justify-center text-white font-bold text-lg">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-lg">{testimonial.name}</p>
          <p className="text-neutral-600">{testimonial.role}</p>
          {testimonial.location && (
            <p className="text-sm text-neutral-500 flex items-center gap-1">
              <span>📍</span> {testimonial.location}
            </p>
          )}
        </div>
      </div>

      {/* Metrics */}
      {testimonial.metrics && testimonial.metrics.length > 0 && (
        <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
          {testimonial.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="text-brand-teal-500">✓</span>
              <span className="text-neutral-600">{metric}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}