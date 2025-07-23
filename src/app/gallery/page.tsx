'use client';

import { useState } from 'react';
import HeroSection from '@/components/gallery/HeroSection';
import CategoryFilter from '@/components/gallery/CategoryFilter';
import ImageGrid from '@/components/gallery/ImageGrid';
import Lightbox from '@/components/gallery/Lightbox';

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
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ImageGrid images={filteredImages} onImageClick={setSelectedImage} />
        <Lightbox selectedImageId={selectedImage} images={galleryImages} onClose={() => setSelectedImage(null)} />
      </div>
    </div>
  );
} 