// app/products/[slug]/components/SizeSelector.tsx
'use client';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSelectSize }: SizeSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelectSize(size)}
          className={`px-4 py-2 border rounded-md text-sm font-medium ${
            selectedSize === size
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
          }`}
          aria-label={`Select size ${size}`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;