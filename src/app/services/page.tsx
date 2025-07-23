import Link from 'next/link';
import HeroSection from '@/components/services/HeroSection';
import IntroSection from '@/components/services/IntroSection';
import ServicesGrid from '@/components/services/ServicesGrid';
import AdditionalInfoSection from '@/components/services/AdditionalInfoSection';
import ContactSection from '@/components/services/ContactSection';

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
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IntroSection />
        <ServicesGrid services={services} />
        <AdditionalInfoSection />
        <ContactSection />
      </div>
    </div>
  );
} 