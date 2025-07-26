import HeroSection from '@/components/donations/HeroSection';
import DonationMethods from '@/components/donations/DonationMethods';
import DonationForm from '@/components/donations/DonationForm';
import FadeInWrapper from '@/components/layout/FadeInWrapper';

export default function DonationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeInWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Our Temple
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your generous donations help us maintain the temple, organize spiritual events, 
              and serve the community. Every contribution, no matter how small, makes a difference 
              in preserving our sacred traditions.
            </p>
          </div>
        </FadeInWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInWrapper>
            <DonationMethods />
          </FadeInWrapper>
          
          <FadeInWrapper>
            <DonationForm />
          </FadeInWrapper>
        </div>
      </div>
    </div>
  );
} 