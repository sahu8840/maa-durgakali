// TestimonialsGrid.tsx
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
  return `https://maa-durgakali.onrender.com${image}`;
}

export default function TestimonialsGrid({ testimonials, setSelectedTestimonial }: { testimonials: Testimonial[], setSelectedTestimonial: (id: number) => void }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 flex items-start cursor-pointer" onClick={() => setSelectedTestimonial(testimonial.id)}>
          <div className="flex flex-col items-center justify-center mr-6">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-yellow-100 text-yellow-700 text-xl font-bold">
              {testimonial.image && testimonial.image.trim() !== '' ? (
                <img
                  src={getImageUrl(testimonial.image)}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  style={{ minWidth: '64px', minHeight: '64px', maxWidth: '64px', maxHeight: '64px', borderRadius: '9999px' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <span>{getInitials(testimonial.name)}</span>
              )}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h4>
            <p className="text-gray-600 mb-1">{testimonial.location}</p>
            <p className="text-gray-600 italic mb-1">{testimonial.content}</p>
            <p className="text-gray-500 text-xs">{testimonial.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 