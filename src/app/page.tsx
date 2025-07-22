import Link from 'next/link';
import Map from '@/components/Map';

export default function Home() {
  const TEMPLE_MAPS_LINK = "https://maps.app.goo.gl/hb41egCzv4m2XkzX8";

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-800/50 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            मां दुर्गाकाली शक्तिपीठ अयोध्या धाम
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12">
            A spiritual abode for Lord Durga and Kali
          </p>
          <Link
            href="#visit"
            className="inline-block bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
          >
            Visit Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About the Temple</h2>
          <p className="text-lg text-gray-600 mb-8">
            Maa Durgakali Shaktipeeth is a sacred temple dedicated to Goddess Durga and Kali,
            located in the holy city of Ayodhya. The temple stands as a symbol of divine power
            and spiritual enlightenment, welcoming devotees from all walks of life.
          </p>
          <Link
            href="/about"
            className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* Deities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Deities</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Goddess Durga</h3>
              <p className="text-gray-600">
                The divine mother who represents strength, protection, and motherly love.
                She is the destroyer of evil and protector of righteousness.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Goddess Kali</h3>
              <p className="text-gray-600">
                The fierce form of the divine mother, representing time, change, and
                destruction of evil forces. She is the ultimate liberator of souls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit the Temple</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Temple Timings</h3>
            <div className="space-y-2 text-gray-600 mb-8">
              <p>Morning Aarti: 5:00 AM - 7:00 AM</p>
              <p>Temple Hours: 7:00 AM - 9:00 PM</p>
              <p>Evening Aarti: 7:00 PM - 8:00 PM</p>
            </div>
            <div className="text-left mb-8">
              <h4 className="font-semibold text-gray-900 mb-2">Address:</h4>
              <address className="text-gray-600 not-italic">
                Maa Durgakali Shakti Peeth,<br />
                Jaisinghpur urf basupur Sirsa,<br />
                Panchkoshi Parikrama Marg near Parma Academy High School,<br />
                Ayodhya 224123
              </address>
              <a
                href={TEMPLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-yellow-600 hover:text-yellow-700 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Get Directions to Temple
              </a>
            </div>
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}
