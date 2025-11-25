import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-navy-900 to-brand-teal-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-2xl mb-8 text-white/90">
          Join 1,200+ students who&apos;ve achieved breakthrough results with personalized tutoring
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>Flexible scheduling</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>100% satisfaction guarantee</span>
          </div>
        </div>

        <Link href="/book-consultation">
          <Button size="large" variant="secondary">
            Book Your Free Consultation Now
          </Button>
        </Link>
      </div>
    </section>
  );
}