'use client';

import { useState } from 'react';
import useCartStore from '@/app/store/cartStore';

const OrderSummary = () => {
  const items = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const [couponCode, setCouponCode] = useState('');

  // Calculate totals
  const subtotal = items.reduce((sum, item) => {
    // Since the store doesn't have discountPrice, we use the regular price
    return sum + item.price * item.quantity;
  }, 0);

  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Coupon ${couponCode} applied!`);
    // In a real app, you would validate and apply the coupon here
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
            </div>
        </div>
      </div>

      {/* Coupon Code */}
      <form onSubmit={handleApplyCoupon} className="mt-6">
        <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
          Coupon Code
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter code"
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Apply
          </button>
        </div>
      </form>

      <div className="mt-6 space-y-3">
        <button
          onClick={clearCart}
          className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
        >
          Clear Cart
        </button>
        
        <button className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;