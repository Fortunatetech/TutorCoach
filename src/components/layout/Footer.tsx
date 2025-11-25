import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🎓</span>
              <span className="text-2xl font-bold">TutorCoach</span>
            </div>
            <p className="text-white/70 mb-4">
              Expert 1-on-1 tutoring and career coaching. Transform your learning journey today.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-accent-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-white/70">4.9/5 (1,203 reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-white/70 hover:text-brand-teal-400">All Services</a></li>
              <li><Link href="/services/writing" className="text-white/70 hover:text-brand-teal-400">Writing Mastery</Link></li>
              <li><Link href="/services/academic" className="text-white/70 hover:text-brand-teal-400">Academic Tutoring</Link></li>
              <li><Link href="/services/programming" className="text-white/70 hover:text-brand-teal-400">Programming & Tech</Link></li>
              <li><Link href="/services/career" className="text-white/70 hover:text-brand-teal-400">Career Coaching</Link></li>
              <li><Link href="/services/database" className="text-white/70 hover:text-brand-teal-400">Database Systems</Link></li>
              <li><Link href="/services/resume" className="text-white/70 hover:text-brand-teal-400">Resume & Documents</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-brand-teal-400">About Me</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-brand-teal-400">Blog</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-brand-teal-400">Contact</Link></li>
              <li><Link href="/book-consultation" className="text-white/70 hover:text-brand-teal-400">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:hello@tutorcoach.com" className="hover:text-brand-teal-400">
                  hello@tutorcoach.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Remote (Available Worldwide)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>Mon-Fri: 9AM-6PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} TutorCoach. All rights reserved. | Transforming lives through education.</p>
        </div>
      </div>
    </footer>
  );
}