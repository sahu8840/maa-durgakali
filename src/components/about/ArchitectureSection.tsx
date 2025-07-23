// ArchitectureSection.tsx
export default function ArchitectureSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Temple Architecture</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] bg-gray-100 rounded-lg">
          {/* Placeholder for temple architecture image */}
        </div>
        <div>
          <p className="text-lg text-gray-600 mb-4">
            The temple architecture reflects the traditional North Indian temple style with intricate carvings 
            and symbolic elements. The main shrine, dedicated to Goddess Durga and Kali, is built according 
            to ancient Vastu Shastra principles.
          </p>
          <p className="text-lg text-gray-600">
            The temple complex includes several smaller shrines, a meditation hall, and a spacious courtyard 
            for devotees to perform their spiritual practices.
          </p>
        </div>
      </div>
    </div>
  );
} 