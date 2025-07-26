// EventsGrid.tsx

type Event = {
  id: number;
  title: string;
  date: string; // DD-MM-YYYY
  time: string;
  description: string;
  image: string;
};

function parseDate(dateString: string) {
  // Expects DD-MM-YYYY
  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(dateString: string) {
  // Already in DD-MM-YYYY
  return dateString;
}

export default function EventsGrid({ events }: { events: Event[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {events.map((event) => {
        const isUpcoming = parseDate(event.date) >= new Date(new Date().setHours(0,0,0,0));
        return (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={e => {
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#eee;color:#888;">No Image</div>';
                    }
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    isUpcoming
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {isUpcoming ? 'Upcoming' : 'Past'}
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
              {isUpcoming && (
                <button className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  Read More →
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
} 