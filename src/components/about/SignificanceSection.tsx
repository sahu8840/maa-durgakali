// SignificanceSection.tsx
export default function SignificanceSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Spiritual Significance</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Divine Energy</h3>
          <p className="text-gray-600">
            The temple is known for its powerful spiritual energy that helps devotees in their spiritual journey 
            and personal growth.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Sacred Rituals</h3>
          <p className="text-gray-600">
            Daily pujas and ancient rituals are performed following Vedic traditions, maintaining the sanctity 
            of this holy place.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Spiritual Healing</h3>
          <p className="text-gray-600">
            Many devotees have experienced spiritual healing and divine blessings through their prayers at 
            this sacred shrine.
          </p>
        </div>
      </div>
    </div>
  );
} 