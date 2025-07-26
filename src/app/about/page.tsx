import Image from 'next/image';
import HeroSection from '@/components/about/HeroSection';
import HistorySection from '@/components/about/HistorySection';
import SignificanceSection from '@/components/about/SignificanceSection';
import ArchitectureSection from '@/components/about/ArchitectureSection';
import ManagementSection from '@/components/about/ManagementSection';

export default function About() {
  return (
    <div className="py-16 sm:py-16">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HistorySection />
        <SignificanceSection />
        <ArchitectureSection />
        <ManagementSection />
      </div>
    </div>
  );
} 