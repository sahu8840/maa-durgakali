'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/temple-1.jpg',
    alt: 'Temple Front View',
    category: 'Temple'
  },
  {
    id: 2,
    src: '/images/gallery/durga-1.jpg',
    alt: 'Durga Mata Idol',
    category: 'Deities'
  },
  {
    id: 3,
    src: '/images/gallery/kali-1.jpg',
    alt: 'Kali Mata Idol',
    category: 'Deities'
  },
  {
    id: 4,
    src: '/images/gallery/puja-1.jpg',
    alt: 'Morning Aarti',
    category: 'Ceremonies'
  },
  {
    id: 5,
    src: '/images/gallery/event-1.jpg',
    alt: 'Navratri Celebration',
    category: 'Events'
  },
  {
    id: 6,
    src: '/images/gallery/temple-2.jpg',
    alt: 'Temple Architecture',
    category: 'Temple'
  },
  {
    id: 7,
    src: '/images/gallery/puja-2.jpg',
    alt: 'Special Puja',
    category: 'Ceremonies'
  },
  {
    id: 8,
    src: '/images/gallery/event-2.jpg',
    alt: 'Durga Puja Celebration',
    category: 'Events'
  }
];

const categories = ['All', 'Temple', 'Deities', 'Ceremonies', 'Events'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    image => selectedCategory === 'All' || image.category === selectedCategory
  );

  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0 bg-red-900/90" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Temple Gallery
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="absolute inset-0 bg-gray-200" />
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
               onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[4/3] bg-gray-800 rounded-lg">
                {/* Placeholder for actual image in lightbox */}
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-lg">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 