// FeaturedTestimonial.tsx
import React from 'react';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  content: string;
  date: string;
  image?: string;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function getImageUrl(image: string | undefined) {
  if (!image) return '';
  if (image.startsWith('http')) return image;
  return `http://localhost:8080${image}`;
}

export default function FeaturedTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-yellow-100 text-yellow-700 text-3xl font-bold">
        {testimonial.image ? (
          <img
            src={getImageUrl(testimonial.image)}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <span>{getInitials(testimonial.name)}</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
      <p className="text-gray-600 mb-2">{testimonial.location}</p>
      <p className="text-gray-600 italic mb-2">{testimonial.content}</p>
      <p className="text-gray-400 text-sm">{testimonial.date}</p>
    </div>
  );
} 