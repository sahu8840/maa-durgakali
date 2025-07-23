// FilterButtons.tsx
export default function FilterButtons({ filter, setFilter }: { filter: 'all' | 'upcoming' | 'past', setFilter: (f: 'all' | 'upcoming' | 'past') => void }) {
  return (
    <div className="flex justify-center space-x-4 mb-12">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          filter === 'all'
            ? 'bg-yellow-600 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        All Events
      </button>
      <button
        onClick={() => setFilter('upcoming')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          filter === 'upcoming'
            ? 'bg-yellow-600 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Upcoming
      </button>
      <button
        onClick={() => setFilter('past')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          filter === 'past'
            ? 'bg-yellow-600 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Past Events
      </button>
    </div>
  );
} 