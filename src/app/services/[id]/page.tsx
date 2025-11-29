import { SERVICES } from '@/data/services';
import { notFound } from 'next/navigation';
import ServiceDetailClient from './ServiceDetailedClient';

function getServiceById(id: string) {
  return SERVICES.find((s) => s.id === id);
}

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

  return <ServiceDetailClient service={service} />;
}