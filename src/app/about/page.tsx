import Image from 'next/image';

export default function About() {
  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0 bg-yellow-800/90" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Significance Section */}
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

        {/* Temple Architecture */}
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

        {/* Temple Management */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Temple Management</h2>
          <p className="text-lg text-gray-600 mb-4">
            The temple is managed by a dedicated trust that ensures proper maintenance, organization of festivals, 
            and spiritual activities. The trust also oversees various charitable activities and spiritual education 
            programs.
          </p>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To preserve and promote the spiritual heritage of मां दुर्गाकाली शक्तिपीठ while serving the 
              community through various charitable and educational initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 