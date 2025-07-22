import Link from 'next/link';

export default function Home() {
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
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4397895837193!2d82.0931227!3d26.8876483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07c2c5da1bb7%3A0x7920059a70b12923!2sMaa%20Durgakali%20Shakti%20Peeth!5e0!3m2!1sen!2sin!4v1709799977089!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
