import Link from 'next/link';

const services = [
  {
    name: 'Daily Aarti',
    description: 'Regular morning and evening aarti performed with traditional rituals.',
    timings: ['Morning: 5:00 AM - 7:00 AM', 'Evening: 7:00 PM - 8:00 PM'],
    type: 'Regular'
  },
  {
    name: 'Abhishekam',
    description: 'Sacred bathing ritual of the deities with holy water, milk, and other offerings.',
    timings: ['Daily: 6:00 AM - 7:00 AM'],
    type: 'Regular'
  },
  {
    name: 'Navratri Special Puja',
    description: 'Special nine-day celebration with elaborate pujas and cultural programs.',
    timings: ['During Navratri Festival'],
    type: 'Special'
  },
  {
    name: 'Kali Puja',
    description: 'Special puja dedicated to Goddess Kali on auspicious occasions.',
    timings: ['On Amavasya and special occasions'],
    type: 'Special'
  },
  {
    name: 'Durga Puja',
    description: 'Grand celebration with traditional rituals and cultural events.',
    timings: ['During Durga Puja Festival'],
    type: 'Special'
  },
  {
    name: 'Marriage Ceremony',
    description: 'Traditional Hindu wedding ceremonies in temple premises.',
    timings: ['By Appointment'],
    type: 'Personal'
  }
];

export default function Services() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0 bg-yellow-800/90" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Our Services
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer various religious services and pujas performed by our experienced priests following 
            traditional Vedic rituals. Each service is conducted with utmost devotion and adherence to 
            sacred traditions.
          </p>
        </div>

        {/* Services Grid */}
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

        {/* Additional Information */}
        <div className="bg-yellow-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Requirements</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Please book special pujas at least 3 days in advance</li>
            <li>• Bring your own puja items or purchase from temple shop</li>
            <li>• Follow temple dress code and guidelines</li>
            <li>• Photography is restricted in certain areas</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-6">
            Our priests and temple staff are available to answer your questions and provide guidance.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
          >
            Book a Puja
          </Link>
        </div>
      </div>
    </div>
  );
} 