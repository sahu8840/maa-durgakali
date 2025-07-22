'use client';

import { useState } from 'react';
import Image from 'next/image';

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
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0 bg-yellow-800/90" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Devotee Testimonials
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder for testimonial image */}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonials[0].name}</h3>
                      <p className="text-gray-600">{testimonials[0].location}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                      {new Date(testimonials[0].date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-600 text-lg italic">&ldquo;{testimonials[0].content}&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(1).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
              onClick={() => setSelectedTestimonial(testimonial.id)}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  {/* Placeholder for testimonial image */}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Experience Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
          <p className="text-gray-600 mb-8">
            We would love to hear about your spiritual journey and experience at our temple.
          </p>
          <button
            className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
            onClick={() => window.location.href = '/contact'}
          >
            Submit Your Testimonial
          </button>
        </div>

        {/* Testimonial Modal */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    {/* Placeholder for testimonial image */}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonials.find(t => t.id === selectedTestimonial)?.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials.find(t => t.id === selectedTestimonial)?.location}
                    </p>
                  </div>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedTestimonial(null)}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 text-lg italic mb-4">
                &ldquo;{testimonials.find(t => t.id === selectedTestimonial)?.content}&rdquo;
              </p>
              <p className="text-sm text-gray-500">
                Posted on {new Date(testimonials.find(t => t.id === selectedTestimonial)?.date || '').toLocaleDateString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 