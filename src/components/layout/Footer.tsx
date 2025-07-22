'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: FaYoutube,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-red-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-red-200 transition-colors duration-200"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-white hover:text-red-200 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-red-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-white">
              मां दुर्गाकाली शक्तिपीठ अयोध्या धाम
            </p>
            <p className="mt-2 text-sm text-red-200">
              Ayodhya Dham, Uttar Pradesh, India
            </p>
            <p className="mt-2 text-sm text-red-200">
              Contact: +91 XXXXX XXXXX | Email: info@mandurgakali.com
            </p>
          </div>
          
          <p className="mt-8 text-center text-sm text-red-200 md:mt-0">
            &copy; {new Date().getFullYear()} मां दुर्गाकाली शक्तिपीठ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 