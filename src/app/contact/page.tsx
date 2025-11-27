'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Have a question? Want to discuss your learning goals? Send me a message and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                  ✓ Message sent successfully! I&apos;ll respond within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal-500 resize-none"
                    placeholder="Tell me about your learning goals..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="large" 
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-brand-teal-50 to-white p-8 rounded-2xl border border-brand-teal-100">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email Me</h3>
                <p className="text-neutral-600 mb-4">
                  Prefer email? Send your questions directly to:
                </p>
                <a href="mailto:hello@tutorcoach.com" className="text-brand-teal-600 font-semibold hover:text-brand-teal-700">
                  ayodeleayodeji250@gmail.com
                </a>
              </div>

              <div className="bg-gradient-to-br from-accent-coral-50 to-white p-8 rounded-2xl border border-accent-coral-100">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
                <p className="text-neutral-600 mb-4">
                  Want to discuss your goals? Book a free 30-minute consultation.
                </p>
                <a href="/book-consultation" className="text-accent-coral-600 font-semibold hover:text-accent-coral-700">
                  View availability →
                </a>
              </div>

              <div className="bg-gradient-to-br from-accent-yellow-50 to-white p-8 rounded-2xl border border-accent-yellow-500/20">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-neutral-600">
                  I typically respond within 24 hours on business days (Mon-Fri, 9am-6pm EST).
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-neutral-200">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/about" className="text-brand-teal-600 hover:text-brand-teal-700">
                      → Learn more about me
                    </a>
                  </li>
                  <li>
                    <a href="/Services" className="text-brand-teal-600 hover:text-brand-teal-700">
                      → Browse services
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-brand-teal-600 hover:text-brand-teal-700">
                      → Read the blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}