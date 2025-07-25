"use client";
import HeroSection from '@/components/services/HeroSection';
import IntroSection from '@/components/services/IntroSection';
import ServicesGrid from '@/components/services/ServicesGrid';
import AdditionalInfoSection from '@/components/services/AdditionalInfoSection';
import ContactSection from '@/components/services/ContactSection';
import { useEffect, useState } from 'react';

interface Service {
  id: number;
  name: string;
  description: string;
  timings: string[];
  type: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://maa-durgakali.onrender.com/api/services')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch services');
        return res.json();
      })
      .then((data) => {
        // Normalize timings to always be an array
        const normalized = data.map((service: unknown) => {
          if (
            typeof service === 'object' &&
            service !== null &&
            'timings' in service
          ) {
            const s = service as Service & { timings: unknown };
            let timings: string[] = [];
            if (Array.isArray(s.timings)) {
              timings = s.timings as string[];
            } else if (typeof s.timings === 'string') {
              timings = (s.timings as string).split(',').map((t: string) => t.trim());
            }
            return {
              ...s,
              timings,
            };
          }
          return service;
        });
        setServices(normalized as Service[]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-16 sm:py-24">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IntroSection />
        {loading ? (
          <div className="text-center py-8">Loading services...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <ServicesGrid services={services} />
        )}
        <AdditionalInfoSection />
        <ContactSection />
      </div>
    </div>
  );
} 