// ImageGrid.tsx

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

export default function ImageGrid({ images, onImageClick }: {
  images: GalleryImage[],
  onImageClick: (id: number) => void
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => onImageClick(image.id)}
        >
          <div className="absolute inset-0 bg-gray-200" />
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <p className="text-white text-sm">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 