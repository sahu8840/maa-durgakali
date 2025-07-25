'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/testimonials/HeroSection';
import FeaturedTestimonial from '@/components/testimonials/FeaturedTestimonial';
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid';
import ShareExperienceForm from '@/components/testimonials/ShareExperienceForm';
import TestimonialModal from '@/components/testimonials/TestimonialModal';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://maa-durgakali.onrender.com/api/testimonials')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        return res.json();
      })
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-16 sm:py-24">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-8">Loading testimonials...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">{error}</div>
        ) : testimonials.length > 0 ? (
          <>
            <FeaturedTestimonial testimonial={testimonials[0]} />
            <TestimonialsGrid testimonials={testimonials.slice(1)} setSelectedTestimonial={setSelectedTestimonial} />
            <TestimonialModal selectedTestimonialId={selectedTestimonial} testimonials={testimonials} onClose={() => setSelectedTestimonial(null)} />
          </>
        ) : (
          <div className="text-center py-8">No testimonials found.</div>
        )}
        <ShareExperienceForm />
      </div>
    </div>
  );
} 