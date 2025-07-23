// ServicesGrid.tsx
import Link from 'next/link';

type Service = {
  name: string;
  description: string;
  timings: string[];
  type: string;
};

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service) => (
        <div key={service.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
              style={{
                backgroundColor: service.type === 'Regular' ? '#f3e8ff' : 
                               service.type === 'Special' ? '#fef3c7' : '#dbeafe',
                color: service.type === 'Regular' ? '#6b21a8' : 
                       service.type === 'Special' ? '#92400e' : '#1e40af'
              }}>
              {service.type}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <div className="space-y-1">
              {service.timings.map((timing) => (
                <p key={timing} className="text-sm text-gray-500">{timing}</p>
              ))}
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <Link
              href="/contact"
              className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
              Book Now →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} 