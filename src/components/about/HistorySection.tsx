// HistorySection.tsx
export default function HistorySection() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
        <p className="text-lg text-gray-600 mb-4">
          मां दुर्गाकाली शक्तिपीठ has a rich history dating back several centuries. The temple was established 
          in the sacred city of Ayodhya, known as the birthplace of Lord Rama. According to ancient texts, 
          this location was chosen due to its spiritual significance and divine energy.
        </p>
        <p className="text-lg text-gray-600">
          The temple has been a witness to countless spiritual gatherings, divine manifestations, and 
          miraculous events that have strengthened the faith of devotees through generations.
        </p>
      </div>
      <div className="relative h-[400px] bg-gray-100 rounded-lg">
        {/* Placeholder for temple history image */}
      </div>
    </div>
  );
} 