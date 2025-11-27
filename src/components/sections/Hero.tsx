'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated counter
  const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!mounted) return;
      
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [end]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - Improved */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral-500 text-white rounded-full mb-6 shadow-md">
              <span className="text-xl">🎉</span>
              <span className="text-sm font-semibold">
                Limited: Free consultation available
              </span>
            </div>

            {/* Eyebrow */}
            <p className="text-brand-teal-500 font-semibold uppercase tracking-wide mb-3 text-sm">
              Expert Tutoring & Career Coaching
            </p>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Transform Your{' '}
              <span className="text-brand-teal-500">
                Learning Journey
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-neutral-600 mb-7 max-w-xl leading-relaxed">
              Personalized 1-on-1 tutoring in writing, programming, test prep, and career development. 
              Achieve breakthrough results with expert guidance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-7">
              <Link href="/book-consultation">
                <Button size="large" className="shadow-lg hover:shadow-xl">
                  Book Free Consultation
                </Button>
              </Link>
              <Button size="large" variant="secondary" onClick={scrollToServices}>
                Explore Services
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['SM', 'JC', 'AB', 'MJ'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-teal-400 to-brand-navy-900 flex items-center justify-center text-white font-bold border-2 border-white hover:scale-110 transition-transform shadow-md"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-accent-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-sm text-neutral-600">
                  <span className="font-bold">4.9/5</span> from 1,203 students
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right image with Bento Grid Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/myHero.png" 
                alt="Professional Tutor"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
              
              {/* Gradient Overlay for better card visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating Glassmorphism Cards */}
              
              {/* Card 1: Success Rate - Top Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: 0.4 },
                    scale: { duration: 0.6, delay: 0.4 },
                    y: { 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.4
                    }
                  }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-teal-400 to-brand-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-brand-navy-900">95%</p>
                    <p className="text-xs text-neutral-600 font-medium">Success Rate</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Hours Taught - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -12, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.6 },
                  scale: { duration: 0.6, delay: 0.6 },
                  y: { 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-coral-400 to-accent-coral-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-brand-navy-900">
                      {mounted && <AnimatedCounter end={1200} suffix="+" />}
                      {!mounted && '1,200+'}
                    </p>
                    <p className="text-xs text-neutral-600 font-medium">Hours Taught</p>
                  </div>
                </div>
              </motion.div>

             {/* Card 3: Rating - Middle Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.6, delay: 0.8 },
                  y: { 
                    duration: 2.8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1.5
                  }
                }}
                  className="absolute top-1/3 left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-3 shadow-2xl border border-white/20"
              >
                <div className="text-center">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className="text-accent-yellow-500 text-lg"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                  <p className="font-bold text-lg text-brand-navy-900">4.9/5</p>
                  <p className="text-xs text-neutral-600">1,203 reviews</p>
                </div>
              </motion.div>
             
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow-500/20 rounded-full blur-2xl -z-10"
            />
            <motion.div
              animate={{ 
                rotate: [0, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-teal-500/20 rounded-full blur-2xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}