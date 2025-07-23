// EventsGrid.tsx

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  type: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function EventsGrid({ events }: { events: Event[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {events.map((event) => (
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
                <span className="font-semibold">Date:</span> {formatDate(event.date)}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Time:</span> {event.time}
              </p>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
            {event.type === 'upcoming' && (
              <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
                Read More →
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 