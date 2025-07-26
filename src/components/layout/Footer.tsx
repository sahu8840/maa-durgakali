'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Donations', href: '/donations' },
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
    {
      name: 'Location',
      href: 'https://maps.app.goo.gl/hb41egCzv4m2XkzX8',
      icon: FaMapMarkerAlt,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-yellow-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-yellow-200 transition-colors duration-200"
              target={item.name === 'Location' ? '_blank' : '_self'}
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
              className="text-sm leading-6 text-white hover:text-yellow-200 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-yellow-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-white">
              मां दुर्गाकाली शक्तिपीठ अयोध्या धाम
            </p>
            <p className="mt-2 text-sm text-yellow-200">
              Maa Durgakali Shakti Peeth, Jaisinghpur urf basupur Sirsa,<br />
              Panchkoshi Parikrama Marg near Parma Academy High School,<br />
              Ayodhya 224123
            </p>
            <p className="mt-2 text-sm text-yellow-200">
              Contact: +91 9930504840, +91 9930504846<br />
              Email: sri1008darbarji@gmail.com, darbarjimaadurgakali@gmail.com
            </p>
          </div>
          
          <p className="mt-8 text-center text-sm text-yellow-200 md:mt-0">
            &copy; {new Date().getFullYear()} मां दुर्गाकाली शक्तिपीठ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 