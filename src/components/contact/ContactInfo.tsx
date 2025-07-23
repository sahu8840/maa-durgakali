// ContactInfo.tsx
import Map from '../../components/Map';

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-gray-600">
            मां दुर्गाकाली शक्तिपीठ<br />
            Jaisinghpur urf basupur Sirsa,<br />
            Panchkoshi Parikrama Marg near Parma Academy High School,<br />
            Ayodhya 224123
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
          <p className="text-gray-600">+91 9930504840</p>
          <p className="text-gray-600">+91 9930504846</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600">sri1008darbarji@gmail.com</p>
          <p className="text-gray-600">darbarjimaadurgakali@gmail.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Temple Timings</h3>
          <div className="space-y-2 text-gray-600">
            <p>Morning Aarti: 5:00 AM - 7:00 AM</p>
            <p>Temple Hours: 7:00 AM - 9:00 PM</p>
            <p>Evening Aarti: 7:00 PM - 8:00 PM</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Map />
      </div>
    </div>
  );
} 