import Link from 'next/link';
import { Service } from '@/types';
import Button from './Button';

interface ServiceCardProps {
  service: Service;
  onBookNow: () => void;
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      {/* Header with Icon and Popular Badge */}
      <div className="p-6 border-b border-neutral-100">
        <div className="flex items-start justify-between mb-4">
          <span className="text-5xl">{service.icon}</span>
          {service.popular && (
            <span className="px-3 py-1 bg-accent-yellow-500 text-white text-xs font-bold rounded-full uppercase">
              Popular
            </span>
          )}
        </div>
        
        {/* Service Title */}
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        
        {/* Subtopics/Subservices */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.subservices.map((sub, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-brand-teal-50 text-brand-teal-700 rounded-full font-medium">
              {sub}
            </span>
          ))}
        </div>
        
        {/* Short Description/Hook */}
        <p className="text-neutral-600 leading-relaxed">{service.shortDesc}</p>
      </div>

      {/* Pricing and CTAs */}
      <div className="p-6 flex flex-col justify-between flex-1">
        {/* Pricing with Slashed Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3">  
            <span className="text-xl text-neutral-700 line-through">{service.priceOriginal}</span>         
            <span className="text-3xl font-bold text-brand-navy-900">{service.price}</span>
            <span className="text-sm text-neutral-500">per session</span>           
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Link href={`/services/${service.id}`} className="flex-1">
            <Button variant="secondary" size="medium" className="w-full">
              Learn More
            </Button>
          </Link>
          <Button size="medium" className="flex-1" onClick={onBookNow}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}