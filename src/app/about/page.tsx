import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-teal-400 to-brand-navy-900">
              <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                👨‍🏫
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-brand-teal-500 font-semibold uppercase tracking-wide">About TutorCoach</span>
              <h1 className="text-5xl font-bold mt-4 mb-6">
                Hi, I&apos;m Your <span className="bg-gradient-to-r from-brand-teal-500 to-accent-coral-500 bg-clip-text text-transparent">Learning Partner</span>
              </h1>
              <p className="text-xl text-neutral-600 mb-6">
                With over 8 years of teaching experience and 1,200+ students taught, I specialize in making complex subjects simple and helping students achieve breakthrough results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Proven Track Record</h3>
                    <p className="text-neutral-600">95% of students improve by 1-2 letter grades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Approach</h3>
                    <p className="text-neutral-600">Every lesson tailored to your learning style</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Support</h3>
                    <p className="text-neutral-600">Email support between sessions included</p>
                  </div>
                </div>
              </div>
              <Link href="/book-consultation">
                <Button size="large">Book Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Credentials & Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-neutral-200">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-xl mb-2">Education</h3>
              <p className="text-neutral-600">Master&apos;s in Education<br/>B.S. in Computer Science</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-neutral-200">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="font-bold text-xl mb-2">Experience</h3>
              <p className="text-neutral-600">8+ Years Teaching<br/>1,200+ Students Taught</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-neutral-200">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-xl mb-2">Results</h3>
              <p className="text-neutral-600">4.9/5 Average Rating<br/>95% Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Students Choose Me</h2>
          <div className="space-y-6">
            {[
              {
                title: 'I Make Complex Simple',
                desc: 'Breaking down difficult concepts into easy-to-understand chunks is my specialty. No jargon, no confusion—just clear explanations.'
              },
              {
                title: 'Flexible & Responsive',
                desc: "Need to reschedule? Have a question between sessions? I'm here to support you on your schedule, not mine."},
              {
                title: 'Results-Driven',
                desc: "Every session has clear goals. We track progress, celebrate wins, and adjust our approach to ensure you're always moving forward."
              },
              {
                title: 'Patient & Encouraging',
                desc: "Learning is a journey with ups and downs. I'm here to support you through challenges and celebrate every breakthrough."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-neutral-600 mb-8">Let&apos;s chat about your goals and create a plan for success.</p>
          <Link href="/book-consultation">
            <Button size="large">Schedule Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}