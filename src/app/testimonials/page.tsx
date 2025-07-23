'use client';

import { useState } from 'react';
import HeroSection from '@/components/testimonials/HeroSection';
import FeaturedTestimonial from '@/components/testimonials/FeaturedTestimonial';
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid';
import ShareExperienceForm from '@/components/testimonials/ShareExperienceForm';
import TestimonialModal from '@/components/testimonials/TestimonialModal';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Lucknow, UP',
    image: '/images/testimonials/person-1.jpg',
    content: 'The spiritual atmosphere at मां दुर्गाकाली शक्तिपीठ is truly divine. The morning aarti fills the heart with peace and devotion. The priests are very knowledgeable and helpful.',
    date: '2024-02-15'
  },
  {
    id: 2,
    name: 'Priya Singh',
    location: 'Delhi',
    image: '/images/testimonials/person-2.jpg',
    content: 'I attended the Navratri celebrations here and it was a beautiful experience. The temple management ensures everything runs smoothly even during peak times.',
    date: '2024-01-20'
  },
  {
    id: 3,
    name: 'Amit Sharma',
    location: 'Ayodhya, UP',
    image: '/images/testimonials/person-3.jpg',
    content: 'Regular visitor to the temple. The spiritual energy here is very powerful. The special pujas are conducted with great devotion and attention to detail.',
    date: '2024-01-10'
  },
  {
    id: 4,
    name: 'Meera Patel',
    location: 'Varanasi, UP',
    image: '/images/testimonials/person-4.jpg',
    content: 'Had a wonderful experience during Kali Puja. The temple premises are well-maintained and the staff is very courteous. A must-visit for all devotees.',
    date: '2023-12-25'
  }
];

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  return (
    <div className="py-16 sm:py-24">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedTestimonial testimonial={testimonials[0]} />
        <TestimonialsGrid testimonials={testimonials.slice(1)} setSelectedTestimonial={setSelectedTestimonial} />
        <ShareExperienceForm />
        <TestimonialModal selectedTestimonialId={selectedTestimonial} testimonials={testimonials} onClose={() => setSelectedTestimonial(null)} />
      </div>
    </div>
  );
} 