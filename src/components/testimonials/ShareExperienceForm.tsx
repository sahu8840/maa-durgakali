// ShareExperienceForm.tsx
'use client';
import { useState } from 'react';

export default function ShareExperienceForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    content: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', location: '', content: '' });
  };

  return (
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
      <p className="text-gray-600 mb-8">
        We would love to hear about your spiritual journey and experience at our temple.
      </p>
      {formSubmitted ? (
        <div className="text-green-600 font-semibold text-lg">Thank you for sharing your testimonial!</div>
      ) : (
        <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto text-left space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Testimonial</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleFormChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
          >
            Submit Testimonial
          </button>
        </form>
      )}
    </div>
  );
} 