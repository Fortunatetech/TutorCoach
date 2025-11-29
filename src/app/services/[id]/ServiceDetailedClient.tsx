'use client';

import { Service, AudienceType } from '@/types';
import Link from 'next/link';
import Button from "@/components/ui/Button";
import { useState } from 'react';
import BookingModal from '@/components/sections/BookingModal';

interface ServiceDetailClientProps {
  service: Service;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [showBooking, setShowBooking] = useState(false);
  const [activeAudience, setActiveAudience] = useState<AudienceType>('kids');
  const [activeInfoTab, setActiveInfoTab] = useState<'cover' | 'plan' | 'results'>('cover');

  const currentAudience = service.audienceContent?.find(a => a.key === activeAudience);

  // Icon mapping
  const getAudienceIcon = (key: AudienceType) => {
    const icons = { kids: '👶', students: '🎓', professionals: '💼' };
    return icons[key] || '👤';
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-brand-navy-900 to-brand-teal-700 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-coral-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/" className="text-white/80 hover:text-white text-sm transition-colors">Home</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link href="/#services" className="text-white/80 hover:text-white text-sm transition-colors">Services</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white text-sm font-medium">{service.title}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl">{service.icon}</span>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                    {service.category && (
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium capitalize">
                        {service.category}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-xl text-white/90 mb-6 leading-relaxed">{service.shortDesc}</p>
                
                {/* Pricing */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm text-white/70 font-medium">FROM</span>
                    <span className="text-4xl font-bold">{service.price}</span>
                    <span className="text-xl text-white/60 line-through">{service.priceOriginal}</span>
                    <span className="text-sm text-white/70">per hour</span>
                  </div>
                  <p className="text-sm text-white/80">Session lengths: 30 / 45 / 60 minutes</p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button size="large" onClick={() => setShowBooking(true)} className="shadow-lg">
                    Book Now
                  </Button>
                  <Link href="/book-consultation">
                    <Button variant="secondary" size="large">Free Consultation</Button>
                  </Link>
                </div>
              </div>

              {/* Subservices */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-bold mb-4">What&apos;s Included:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.subservices.map((sub, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm text-white/70">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1,200+</div>
                    <div className="text-sm text-white/70">Hours Taught</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Selector - THE KILLER FEATURE */}
        {service.audienceContent && service.audienceContent.length > 0 && (
          <section className="py-16 px-4 bg-neutral-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Who Is This For?</h2>
                <p className="text-xl text-neutral-600">
                  Choose your category to see tailored content and outcomes
                </p>
              </div>

              {/* Audience Tabs */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg gap-2">
                  {service.audienceContent.map((audience) => (
                    <button
                      key={audience.key}
                      onClick={() => setActiveAudience(audience.key)}
                      className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                        activeAudience === audience.key
                          ? 'bg-brand-teal-500 text-white shadow-lg scale-105'
                          : 'text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      <span className="text-2xl">{getAudienceIcon(audience.key)}</span>
                      <span>{audience.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Audience Content */}
              {currentAudience && (
                <div className="animate-fadeIn">
                  {/* Headline & Description */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-brand-teal-100">
                    <h3 className="text-3xl font-bold mb-4 text-brand-navy-900">
                      {currentAudience.headline}
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                      {currentAudience.description}
                    </p>

                    {/* Focus Points */}
                    <h4 className="text-xl font-bold mb-4">What We Focus On:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentAudience.focusPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-brand-teal-500 text-2xl mt-1 flex-shrink-0">✓</span>
                          <p className="text-neutral-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="bg-gradient-to-br from-accent-coral-50 to-accent-yellow-50 rounded-2xl p-8 mb-8 border border-accent-coral-200">
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="text-3xl">🎯</span>
                      What You&apos;ll Walk Away With
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentAudience.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/60 rounded-lg p-4">
                          <span className="text-accent-coral-600 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                          <p className="text-neutral-800">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Suitable */}
                  <div className="bg-brand-teal-50 rounded-2xl p-8 mb-8 border-l-4 border-brand-teal-500">
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <span className="text-3xl">💡</span>
                      Why This Suits {currentAudience.label}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentAudience.whySuitable.map((reason, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="text-brand-teal-600 text-xl">•</span>
                          <p className="text-neutral-800">{reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {currentAudience.testimonial && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                      <div className="flex items-start gap-4">
                        <span className="text-5xl text-brand-teal-500">&ldquo;</span>
                        <div>
                          <p className="text-lg text-neutral-800 italic mb-4">
                            {currentAudience.testimonial.text}
                          </p>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-neutral-600 font-semibold">
                              — {currentAudience.testimonial.name}
                            </p>
                            <span className="px-3 py-1 bg-accent-yellow-100 text-accent-yellow-800 rounded-full text-sm font-medium">
                              {currentAudience.testimonial.result}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Three Info Cards - Tabbed */}
        {(service.whatWeCover || service.lessonPlan || service.whatYouGet) && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-neutral-600">Everything you need to know about our sessions</p>
              </div>

              {/* Info Tabs */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-neutral-100 rounded-xl p-1">
                  <button
                    onClick={() => setActiveInfoTab('cover')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeInfoTab === 'cover'
                        ? 'bg-white shadow-md text-brand-navy-900'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    📚 What We Cover
                  </button>
                  <button
                    onClick={() => setActiveInfoTab('plan')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeInfoTab === 'plan'
                        ? 'bg-white shadow-md text-brand-navy-900'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    📋 Lesson Plan
                  </button>
                  <button
                    onClick={() => setActiveInfoTab('results')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeInfoTab === 'results'
                        ? 'bg-white shadow-md text-brand-navy-900'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    🎯 What You Get
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-200">
                {activeInfoTab === 'cover' && service.whatWeCover && (
                  <div className="animate-fadeIn">
                    <h3 className="text-2xl font-bold mb-6">What We Cover in Sessions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.whatWeCover.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-brand-teal-50 rounded-lg">
                          <span className="text-brand-teal-600 text-xl">✓</span>
                          <p className="text-neutral-800">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeInfoTab === 'plan' && service.lessonPlan && (
                  <div className="animate-fadeIn">
                    <h3 className="text-2xl font-bold mb-6">Typical 60-Minute Lesson Structure</h3>
                    <div className="space-y-4">
                      {service.lessonPlan.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-brand-teal-50 transition-colors">
                          <div className="flex-shrink-0 w-16 h-16 bg-brand-teal-500 text-white rounded-xl flex items-center justify-center font-bold">
                            {step.duration}
                          </div>
                          <div className="flex-1">
                            <p className="text-lg text-neutral-800">{step.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeInfoTab === 'results' && service.whatYouGet && (
                  <div className="animate-fadeIn">
                    <h3 className="text-2xl font-bold mb-6">What You&apos;ll Walk Away With</h3>
                    <div className="space-y-4">
                      {service.whatYouGet.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-accent-coral-50 rounded-lg">
                          <div className="flex-shrink-0 w-8 h-8 bg-accent-coral-500 text-white rounded-full flex items-center justify-center font-bold">
                            {i + 1}
                          </div>
                          <p className="text-lg text-neutral-800">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Session Packs */}
        {service.sessionPacks && service.sessionPacks.length > 0 && (
          <section className="py-16 px-4 bg-neutral-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
                <p className="text-xl text-neutral-600">
                  Flexible options to match your goals and budget
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {service.sessionPacks.map((pack, i) => (
                  <div
                    key={pack.id}
                    className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all hover:scale-105 ${
                      pack.popular
                        ? 'border-brand-teal-500 shadow-2xl'
                        : 'border-neutral-200'
                    }`}
                  >
                    {pack.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        ⭐ MOST POPULAR
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                      <div className="text-5xl font-bold text-brand-teal-600 mb-2">
                        {pack.sessions}
                      </div>
                      <p className="text-neutral-600">
                        {pack.sessions === 1 ? 'Session' : 'Sessions'}
                      </p>
                    </div>

                    <p className="text-neutral-700 mb-6 text-center min-h-[60px]">
                      {pack.description}
                    </p>

                    <div className="text-center mb-6 p-4 bg-gradient-to-br from-brand-teal-50 to-accent-coral-50 rounded-xl">
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-brand-navy-900">${pack.price}</span>
                        <span className="text-xl text-neutral-400 line-through">${pack.originalPrice}</span>
                      </div>
                      <div className="text-sm text-accent-coral-600 font-bold">
                        Save ${pack.savings} ({Math.round((pack.savings / pack.originalPrice) * 100)}%)
                      </div>
                      <div className="text-xs text-neutral-600 mt-1">
                        ${(pack.price / pack.sessions).toFixed(0)}/session
                      </div>
                    </div>

                    <Button
                      size="large"
                      variant={pack.popular ? 'primary' : 'secondary'}
                      className="w-full"
                      onClick={() => setShowBooking(true)}
                    >
                      Get Started
                    </Button>
                  </div>
                ))}
              </div>

              {/* Payment Note */}
              <div className="text-center mt-8 text-sm text-neutral-600">
                <p>💳 All packages can be split into flexible payments</p>
              </div>
            </div>
          </section>
        )}

        {/* Existing Sections (keep your FAQs, testimonials, etc.) */}
        
        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-brand-teal-500 to-accent-coral-500 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-2xl mb-10 text-white/90">
              Join hundreds of successful students who transformed their learning
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="large"
                onClick={() => setShowBooking(true)}
                className="bg-white text-brand-teal-600 hover:bg-neutral-100 shadow-2xl"
              >
                Book Your First Session
              </Button>
              <Link href="/book-consultation">
                <Button 
                  variant="secondary" 
                  size="large"
                  className="border-2 border-white hover:bg-white/10"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={showBooking} 
        onClose={() => setShowBooking(false)}
        preselectedService={service.id}
      />
    </>
  );
}