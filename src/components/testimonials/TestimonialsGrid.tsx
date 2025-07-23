// TestimonialsGrid.tsx

type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  content: string;
  date: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function TestimonialsGrid({ testimonials, setSelectedTestimonial }: {
  testimonials: Testimonial[],
  setSelectedTestimonial: (id: number) => void
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial) => (
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
                  {formatDate(testimonial.date)}
                </p>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 