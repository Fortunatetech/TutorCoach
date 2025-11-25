import { getServiceById, SERVICES } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from "@/components/ui/Button";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-navy-900 to-brand-teal-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{service.icon}</span>
            <div>
              <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-2xl text-white/90">{service.shortDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">{service.price}</span>
              <span className="text-lg text-white/80">per session</span>
              <span className="text-xl text-white/60 line-through">{service.priceOriginal}</span>
            </div>
            <Link href="/book-consultation">
              <Button variant="secondary" size="large">Book Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">What You&apos;ll Learn</h2>
              <p className="text-lg text-neutral-600 mb-6">{service.detailedDesc}</p>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Subservices Included:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.subservices.map((sub, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-teal-50 text-brand-teal-700 rounded-full text-sm font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-teal-50 to-accent-coral-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Session Details</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span>⏱️</span>
                  <span>60-minute sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📧</span>
                  <span>Email support included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📅</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💯</span>
                  <span>Satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-6 rounded-xl">
                <span className="text-brand-teal-500 text-xl">✓</span>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Learning Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.outcomes.map((outcome, i) => (
              <div key={i} className="bg-gradient-to-br from-brand-teal-50 to-white p-6 rounded-xl border border-brand-teal-100">
                <span className="text-3xl mb-3 block">🎯</span>
                <p className="text-lg font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Who Is This For?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.whoIsItFor.map((who, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">👤</span>
                <span className="text-lg">{who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal-500 to-accent-coral-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">{faq.q}</h3>
                <p className="text-neutral-600 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {service.testimonial && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-teal-50 to-accent-coral-50 p-12 rounded-2xl text-center">
              <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-2xl font-medium mb-6 italic">&ldquo;{service.testimonial.text}&rdquo;</p>
              <p className="font-bold">{service.testimonial.author}</p>
              <p className="text-neutral-600">{service.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-navy-900 to-brand-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book a free consultation to discuss your goals</p>
          <Link href="/book-consultation">
            <Button variant="secondary" size="large">Schedule Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}