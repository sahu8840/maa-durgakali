'use client';

export default function Map() {
  // Direct link to the temple's location
  const TEMPLE_MAPS_LINK = "https://maps.app.goo.gl/hb41egCzv4m2XkzX8";

  return (
    <div className="aspect-w-16 aspect-h-7 rounded-lg overflow-hidden shadow-lg relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.439789583719!2d82.09312271744384!3d26.887648299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07c2c5da1bb7%3A0x7920059a70b12923!2sMaa%20Durgakali%20Shakti%20Peeth!5e0!3m2!1sen!2sin!4v1709799977089!5m2!1sen!2sin&z=17"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Maa Durgakali Shakti Peeth Location"
      />
      <div className="absolute bottom-4 right-4 flex gap-2">
        <a
          href={TEMPLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
} 