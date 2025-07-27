'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLearnMore, setShowLearnMore] = useState(false);
  
  // Use a fallback gradient background instead of images that might not exist
  const backgroundGradients = [
    'bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600',
    'bg-gradient-to-br from-orange-600 via-red-600 to-purple-600',
    'bg-gradient-to-br from-red-600 via-purple-600 to-indigo-600'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundGradients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundGradients.length]);

  const scrollToDonationMethods = () => {
    const element = document.getElementById('donation-methods');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLearnMore = () => {
    setShowLearnMore(true);
    // Scroll to the learn more section after a short delay to ensure it's rendered
    setTimeout(() => {
      const learnMoreSection = document.getElementById('learn-more-section');
      if (learnMoreSection) {
        learnMoreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full">
        {/* Background with fallback gradient */}
        <div className="absolute inset-0">
          {backgroundGradients.map((gradient, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`w-full h-full ${gradient}`} />
            </div>
          ))}
        </div>

        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content - removed overflow restrictions and improved positioning */}
        <div className="relative z-20 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
          <div className="text-center text-white max-w-4xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="block mb-2 sm:mb-3 text-yellow-200">दान करें</span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Make a Donation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Support the divine work of Maa Durga Kali Shaktipeeth
            </p>
            
            {/* Buttons with improved spacing and visibility */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 md:mb-10">
              <button 
                onClick={scrollToDonationMethods}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-semibold transition-all duration-200 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Donate Now
              </button>
              <button 
                onClick={handleLearnMore}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg font-semibold transition-all duration-200 text-base sm:text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
            
            {/* Scroll indicator with improved visibility */}
            <div className="flex justify-center">
              <button 
                onClick={scrollToDonationMethods}
                className="animate-bounce cursor-pointer p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

             {/* Learn More Section */}
       {showLearnMore && (
         <div id="learn-more-section" className="bg-gradient-to-br from-yellow-50 to-orange-50 pt-16 pb-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Donate to Maa Durga Kali Shaktipeeth?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your generous contributions help us maintain the sacred temple, organize spiritual events, 
                and serve the community with devotion and dedication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Temple Maintenance</h3>
                <p className="text-gray-600">
                  Help us maintain the sacred temple premises, perform daily rituals, and preserve the divine atmosphere.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Service</h3>
                <p className="text-gray-600">
                  Support our charitable activities, educational programs, and community welfare initiatives.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Spiritual Events</h3>
                <p className="text-gray-600">
                  Contribute to organizing religious ceremonies, festivals, and spiritual gatherings for devotees.
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <button 
                onClick={() => setShowLearnMore(false)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Close
              </button>
              
              {/* Bottom divider to indicate what's being closed */}
              <div className="mt-4 flex items-center justify-center">
                <div className="w-24 h-px bg-gray-200"></div>
                <span className="mx-3 text-xs text-gray-500">Close Learn More Section</span>
                <div className="w-24 h-px bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 