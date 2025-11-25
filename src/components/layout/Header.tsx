'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home', type: 'link' },
    { href: '/about', label: 'About', type: 'link' },
    { label: 'Services', type: 'scroll' }, // This will scroll to services
    { href: '/blog', label: 'Blog', type: 'link' },
    { href: '/contact', label: 'Contact', type: 'link' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-teal-500 to-accent-coral-500 bg-clip-text text-transparent">
              TutorCoach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              link.type === 'scroll' ? (
                <button
                  key={index}
                  onClick={scrollToServices}
                  className="text-neutral-700 hover:text-brand-teal-600 font-medium transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="text-neutral-700 hover:text-brand-teal-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/book-consultation">
              <Button size="medium">Book Free Consultation</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                link.type === 'scroll' ? (
                  <button
                    key={index}
                    onClick={scrollToServices}
                    className="text-neutral-700 hover:text-brand-teal-600 font-medium py-2 text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href!}
                    className="text-neutral-700 hover:text-brand-teal-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link href="/book-consultation" onClick={() => setMobileMenuOpen(false)}>
                <Button size="medium" className="w-full">Book Free Consultation</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}