import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-neutral-200 flex-shrink-0 w-[380px] hover:shadow-2xl hover:border-brand-teal-400 hover:-translate-y-1 transition-all duration-300">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-accent-yellow-500 text-xl">⭐</span>
        ))}
      </div>

      {/* Quote */}
      <div className="mb-6">
        <span className="text-5xl text-brand-teal-500/30 leading-none">&ldquo;</span>
        <p className="text-neutral-700 leading-relaxed mt-2 line-clamp-6">
          {testimonial.text}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal-400 to-brand-navy-900 flex items-center justify-center text-white font-bold flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-lg">{testimonial.name}</p>
          <p className="text-sm text-brand-teal-600 font-medium">{testimonial.service}</p>
          <p className="text-xs text-neutral-500">{testimonial.location}</p>
        </div>
      </div>

      {/* Metrics */}
      {testimonial.metrics && testimonial.metrics.length > 0 && (
        <div className="space-y-2 pt-4 border-t border-neutral-200">
          {testimonial.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-brand-teal-500 text-sm flex-shrink-0">✓</span>
              <span className="text-sm text-neutral-600">{metric}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}