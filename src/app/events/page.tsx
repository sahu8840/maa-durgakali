'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/events/HeroSection';
import FilterButtons from '@/components/events/FilterButtons';
import EventsGrid from '@/components/events/EventsGrid';
import CalendarSection from '@/components/events/CalendarSection';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/api/events')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch events');
        return res.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Compute type if not present in backend
  const filteredEvents = events.filter((event: Event) => {
    if (filter === 'all') return true;
    const eventDate = new Date(event.date);
    const now = new Date();
    const isUpcoming = eventDate >= now;
    return filter === 'upcoming' ? isUpcoming : !isUpcoming;
  });

  return (
    <div className="py-16 sm:py-24">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterButtons filter={filter} setFilter={setFilter} />
        {loading ? (
          <div className="text-center py-8">Loading events...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">{error}</div>
        ) : (
          <EventsGrid events={filteredEvents} />
        )}
        <CalendarSection />
      </div>
    </div>
  );
} 