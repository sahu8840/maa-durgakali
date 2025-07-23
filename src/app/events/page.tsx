'use client';

import { useState } from 'react';
import HeroSection from '@/components/events/HeroSection';
import FilterButtons from '@/components/events/FilterButtons';
import EventsGrid from '@/components/events/EventsGrid';
import CalendarSection from '@/components/events/CalendarSection';

const events = [
  {
    id: 1,
    title: 'Navratri Celebration 2024',
    date: '2024-04-09',
    time: '6:00 AM - 9:00 PM',
    description: 'Nine days of divine celebration with special pujas, bhajans, and cultural programs.',
    image: '/images/events/navratri.jpg',
    type: 'upcoming'
  },
  {
    id: 2,
    title: 'Kali Puja',
    date: '2024-05-15',
    time: '7:00 PM - 11:00 PM',
    description: 'Special night puja dedicated to Maa Kali with traditional rituals and prasad distribution.',
    image: '/images/events/kali-puja.jpg',
    type: 'upcoming'
  },
  {
    id: 3,
    title: 'Annual Temple Anniversary',
    date: '2024-03-01',
    time: 'All Day Event',
    description: 'Celebrating the temple foundation day with grand ceremonies and community feast.',
    image: '/images/events/anniversary.jpg',
    type: 'past'
  },
  {
    id: 4,
    title: 'Durga Puja 2023',
    date: '2023-10-15',
    time: 'All Day Event',
    description: 'Five days of grand celebration with traditional rituals and cultural performances.',
    image: '/images/events/durga-puja.jpg',
    type: 'past'
  }
];

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const filteredEvents = events.filter(event => filter === 'all' ? true : event.type === filter);

  return (
    <div className="py-16 sm:py-24">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterButtons filter={filter} setFilter={setFilter} />
        <EventsGrid events={filteredEvents} />
        <CalendarSection />
      </div>
    </div>
  );
} 