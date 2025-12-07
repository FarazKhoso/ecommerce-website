// app/products/[slug]/components/QuantitySelector.tsx
'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg w-32">
      <button
        onClick={handleDecrease}
        className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      
      <span className="px-4 py-2 text-gray-900 w-10 text-center">{quantity}</span>
      
      <button
        onClick={handleIncrease}
        className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuantitySelector;