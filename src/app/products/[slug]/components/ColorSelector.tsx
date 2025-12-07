// app/products/[slug]/components/ColorSelector.tsx
'use client';

import { Check } from 'lucide-react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSelector = ({ colors, selectedColor, onSelectColor }: ColorSelectorProps) => {
  return (
    <div className="flex gap-3 mt-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelectColor(color)}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center relative ${
            selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-300' : 'border-gray-300'
          }`}
          style={{ backgroundColor: color }}
          aria-label={`Select ${color} color`}
        >
          {selectedColor === color && (
            <Check className="w-4 h-4 text-white" />
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;