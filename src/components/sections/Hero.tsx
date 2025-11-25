'use client';

import Button from '../ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  // Smooth scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-neutral-100 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral-50 rounded-full mb-6">
              <span className="text-2xl">🎉</span>
              <span className="text-sm font-medium text-accent-coral-600">
                Limited: Free consultation available
              </span>
            </div>

            {/* Eyebrow */}
            <p className="text-brand-teal-500 font-semibold uppercase tracking-wide mb-4">
              Expert Tutoring & Career Coaching
            </p>

            {/* Headline */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-brand-teal-500 to-accent-coral-500 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-neutral-600 mb-8 max-w-xl">
              Personalized 1-on-1 tutoring in writing, programming, test prep, and career development. 
              Achieve breakthrough results with expert guidance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/book-consultation">
                <Button size="large">Book Free Consultation</Button>
              </Link>
              <Button size="large" variant="secondary" onClick={scrollToServices}>
                Explore Services
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {['SM', 'JC', 'AB', 'MJ'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal-400 to-brand-navy-900 flex items-center justify-center text-white font-bold border-2 border-white hover:scale-110 transition-transform"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-accent-yellow-500">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-sm text-neutral-600">
                  <span className="font-bold">4.9/5</span> from 1,203 students
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-teal-400 via-brand-navy-800 to-brand-navy-900 relative overflow-hidden shadow-2xl">
              {/* Placeholder - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-8xl">
                👨‍🎓
              </div>
              
              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-bold text-lg">95%</p>
                    <p className="text-xs text-neutral-600">Success Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="font-bold text-lg">1,200+</p>
                    <p className="text-xs text-neutral-600">Hours Taught</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}