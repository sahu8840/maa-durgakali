// ShareExperienceForm.tsx
'use client';
import { useState, useRef, ChangeEvent } from 'react';

function getCurrentDateDDMMYYYY() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

export default function ShareExperienceForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    content: '',
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    } else {
      setPhoto(null);
    }
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('location', formData.location);
      form.append('content', formData.content);
      form.append('date', getCurrentDateDDMMYYYY());
      if (photo) {
        form.append('image', photo);
      }
      const res = await fetch('http://localhost:8080/api/testimonials', {
        method: 'POST',
        body: form,
      });
      if (!res.ok) throw new Error('Failed to submit testimonial');
      setSuccess(true);
      setFormData({ name: '', location: '', content: '' });
      setPhoto(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      if (onSubmitted) onSubmitted();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
      <p className="text-gray-600 mb-8">
        We would love to hear about your spiritual journey and experience at our temple.
      </p>
      {success ? (
        <div className="text-green-600 mt-4 text-lg font-semibold">Thank you for your testimonial!</div>
      ) : (
        <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto" encType="multipart/form-data">
          <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
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
          <div className="mb-4 text-left">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
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
          <div className="mb-4 text-left">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
              Photo (optional)
            </label>
            <div className="flex items-center gap-4">
              <label className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-semibold cursor-pointer border border-yellow-300 hover:bg-yellow-200 transition-colors duration-200">
                Choose file
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  ref={fileInputRef}
                />
              </label>
              {photo && (
                <span className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-mono text-sm border border-gray-300">
                  {photo.name}
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="ml-2 text-gray-400 hover:text-red-600 focus:outline-none"
                    aria-label="Remove selected image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
            </div>
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Testimonial
            </label>
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
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Testimonial'}
          </button>
          {error && <div className="text-red-600 mt-4">{error}</div>}
        </form>
      )}
    </div>
  );
} 