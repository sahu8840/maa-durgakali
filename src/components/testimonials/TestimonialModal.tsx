// TestimonialModal.tsx

type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  content: string;
  date: string;
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

function formatDate(dateString: string) {
  // Expecting DD-MM-YYYY, just return as is
  return dateString;
}

export default function TestimonialModal({ selectedTestimonialId, testimonials, onClose }: {
  selectedTestimonialId: number | null,
  testimonials: Testimonial[],
  onClose: () => void
}) {
  if (!selectedTestimonialId) return null;
  const testimonial = testimonials.find(t => t.id === selectedTestimonialId);
  if (!testimonial) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-yellow-100 text-yellow-700 text-xl font-bold">
              {testimonial.image ? (
                <img
                  src={getImageUrl(testimonial.image)}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  style={{ minWidth: '64px', minHeight: '64px', maxWidth: '64px', maxHeight: '64px', borderRadius: '9999px' }}
                  onError={e => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <span>{getInitials(testimonial.name)}</span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">
                {testimonial.location}
              </p>
            </div>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 text-lg italic mb-4">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        <p className="text-sm text-gray-500">
          Posted on {formatDate(testimonial.date)}
        </p>
      </div>
    </div>
  );
} 