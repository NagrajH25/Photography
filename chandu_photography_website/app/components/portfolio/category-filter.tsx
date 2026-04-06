type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({ categories, activeCategory, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeCategory === category
              ? "bg-[#2d1f19] text-[#fff8f0]"
              : "border border-[#d8c0a4] bg-white/75 text-[#4e3b30] hover:bg-[#f6eadf]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
