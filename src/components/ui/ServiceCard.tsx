import Link from 'next/link';
import { Service } from '@/types';
import Button from './Button';

interface ServiceCardProps {
  service: Service;
  onBookNow: () => void;
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border-2 border-neutral-200 overflow-hidden hover:shadow-xl hover:border-brand-teal-400 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Header - More Compact */}
      <div className="p-5 border-b border-neutral-100">
        <div className="flex items-start justify-between mb-3">
          <span className="text-4xl">{service.icon}</span>
          {service.popular && (
            <span className="px-2.5 py-1 bg-accent-yellow-500 text-white text-xs font-bold rounded-full uppercase">
              Popular
            </span>
          )}
        </div>
        
        {/* Service Title - Smaller */}
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        
        {/* Subtopics - Smaller Pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {service.subservices.map((sub, i) => (
            <span key={i} className="text-xs px-2 py-0.5 bg-brand-teal-50 text-brand-teal-700 rounded-full font-medium">
              {sub}
            </span>
          ))}
        </div>
        
        {/* Short Description - Smaller Font */}
        <p className="text-sm text-neutral-600 leading-snug">{service.shortDesc}</p>
      </div>

      {/* Pricing and CTAs - More Compact */}
      <div className="p-5 flex flex-col justify-between flex-1">
        {/* Pricing - Smaller */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2"> 
            <span className="text-2xl font-bold text-brand-navy-900">{service.price}</span>
            <span className="text-lg text-neutral-400 line-through">{service.priceOriginal}</span>
            <span className="text-xs text-neutral-500 font-medium">per session</span>
          </div>
        </div>

        {/* CTA Buttons - Smaller */}
        <div className="flex gap-2">
          <Link href={`/services/${service.id}`} className="flex-1">
            <Button variant="secondary" size="small" className="w-full text-sm">
              Learn More
            </Button>
          </Link>
          <Button size="small" className="flex-1 text-sm" onClick={onBookNow}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}