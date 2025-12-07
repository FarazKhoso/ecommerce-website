'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';
import useCartStore from '@/app/store/cartStore';

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    discountPrice?: number;
    thumbnail: string;
    color: string;
    size: string;
    quantity: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const getDiscountPercentage = () => {
    if (item.discountPrice && item.price > item.discountPrice) {
      const percentage = Math.round(((item.price - item.discountPrice) / item.price) * 100);
      return `-${percentage}%`;
    }
    return null;
  };

  const discountPercentage = getDiscountPercentage();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-24 h-24 object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
            
            {/* Color and Size */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Color:</span>
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full border-2 border-white shadow" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="ml-1 text-sm text-gray-600 capitalize">{item.color}</span>
                </div>
              </div>
              
              <div>
                <span className="text-sm text-gray-600 mr-2">Size:</span>
                <span className="text-sm text-gray-900">{item.size}</span>
              </div>
            </div>
          </div>

          {/* Mobile: Price */}
          <div className="sm:hidden mt-2">
            <div className="flex items-center gap-2">
              {item.discountPrice ? (
                <>
                  <span className="font-bold text-gray-900">${item.discountPrice.toFixed(2)}</span>
                  <span className="text-gray-500 line-through">${item.price.toFixed(2)}</span>
                  {discountPercentage && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {discountPercentage}
                    </span>
                  )}
                </>
              ) : (
                <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <span className="px-4 py-2 text-gray-900">{item.quantity}</span>
            
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors duration-200"
          >
            <Trash2 className="w-4 h-4" />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Desktop: Price */}
      <div className="hidden sm:flex flex-col items-end justify-between">
        <div className="flex items-center gap-2">
          {item.discountPrice ? (
            <>
              <span className="font-bold text-gray-900">${(item.discountPrice * item.quantity).toFixed(2)}</span>
              <span className="text-gray-500 line-through">${(item.price * item.quantity).toFixed(2)}</span>
              {discountPercentage && (
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                  {discountPercentage}
                </span>
              )}
            </>
          ) : (
            <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
          )}
        </div>
        
        {item.discountPrice && (
          <div className="mt-1 text-right">
            <span className="text-gray-500 line-through text-sm">${item.price.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;