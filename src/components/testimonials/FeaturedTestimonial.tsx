// FeaturedTestimonial.tsx

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

export default function FeaturedTestimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
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
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
                <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                  {formatDate(testimonial.date)}
                </p>
              </div>
              <p className="text-gray-600 text-lg italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 