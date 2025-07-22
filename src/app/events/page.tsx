'use client';

import { useState } from 'react';
import Image from 'next/image';

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

  const filteredEvents = events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <div className="py-16 sm:py-24">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0 bg-red-900/90" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Temple Events
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full ${
              filter === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-2 rounded-full ${
              filter === 'upcoming'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-6 py-2 rounded-full ${
              filter === 'past'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200" />
                {/* Placeholder for event image */}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.type === 'upcoming'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.type === 'upcoming' && (
                  <button className="text-red-600 hover:text-red-700 font-semibold">
                    Set Reminder →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Event Calendar</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-center text-gray-600">
              Calendar component will be integrated here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 