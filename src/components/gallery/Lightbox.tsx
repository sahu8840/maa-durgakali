// Lightbox.tsx

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

export default function Lightbox({ selectedImageId, images, onClose }: {
  selectedImageId: number | null,
  images: GalleryImage[],
  onClose: () => void
}) {
  if (!selectedImageId) return null;
  const image = images.find(img => img.id === selectedImageId);
  if (!image) return null;
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative aspect-[4/3] bg-gray-800 rounded-lg">
          {/* Placeholder for actual image in lightbox */}
        </div>
        <div className="mt-4 text-center">
          <p className="text-white text-lg">{image.alt}</p>
        </div>
      </div>
    </div>
  );
} 