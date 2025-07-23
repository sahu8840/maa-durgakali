// ContactSection.tsx
import Link from 'next/link';

export default function ContactSection() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h2>
      <p className="text-gray-600 mb-6">
        Our priests and temple staff are available to answer your questions and provide guidance.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
      >
        Book a Puja
      </Link>
    </div>
  );
} 