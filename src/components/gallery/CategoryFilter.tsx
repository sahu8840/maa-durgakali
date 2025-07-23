// CategoryFilter.tsx
export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: {
  categories: string[],
  selectedCategory: string,
  setSelectedCategory: (cat: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            selectedCategory === category
              ? 'bg-yellow-600 text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 