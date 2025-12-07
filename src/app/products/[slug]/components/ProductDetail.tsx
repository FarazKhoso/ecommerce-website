// app/products/[slug]/components/ProductDetail.tsx
'use client';

import { useState } from 'react';
import { Star, Truck, RefreshCw, Shield, Share2, Heart } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Product } from '@/types/product'; // Assuming you have product types
import useAuthStore from '@/app/store/authStore';
import useCartStore from '@/app/store/cartStore';
import ImageGallery from './ImageGallery';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import TabSection from './TabSection';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'reviews' | 'faqs'>('details');

  const { isAuthenticated } = useAuthStore();
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      // Store the cart item in localStorage so we can add it after login
      const pendingCartItem = {
        id: product.id,
        name: product.title,
        price: product.discountedPrice || product.price,
        imageUrl: product.images[0], // Using first image as cart item image
      };

      localStorage.setItem('pendingCartItem', JSON.stringify(pendingCartItem));

      // Redirect to login page with Shopping-Cart as redirect parameter
      router.push('/auth?redirect=/Shopping-Cart');
      return;
    }

    // If authenticated, add item to cart
    const cartItem = {
      id: product.id,
      name: product.title,
      price: product.discountedPrice || product.price,
      imageUrl: product.images[0], // Using first image as cart item image
    };

    addItem(cartItem);
  };

  const getDiscountPercentage = () => {
    if (product.discountedPrice && product.price > product.discountedPrice) {
      const percentage = Math.round(((product.price - product.discountedPrice) / product.price) * 100);
      return `-${percentage}%`;
    }
    return null;
  };

  const discountPercentage = getDiscountPercentage();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>{product.category}</span> &gt; <span>{product.title}</span>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Image Gallery */}
          <div className="sticky top-4">
            <ImageGallery images={product.images} />
          </div>

          {/* Right Column - Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{product.rating} ★ | {product.reviewCount} reviews</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              {product.discountedPrice ? (
                <>
                  <span className="text-2xl font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
                  <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  {discountPercentage && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {discountPercentage}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Color Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <ColorSelector 
                colors={product.colors} 
                selectedColor={selectedColor} 
                onSelectColor={setSelectedColor} 
              />
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <SizeSelector 
                sizes={product.sizes} 
                selectedSize={selectedSize} 
                onSelectSize={setSelectedSize} 
              />
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Add to Cart
            </button>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-gray-900" />
                <span className="text-xs mt-1">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="w-6 h-6 text-gray-900" />
                <span className="text-xs mt-1">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-6 h-6 text-gray-900" />
                <span className="text-xs mt-1">2 Year Warranty</span>
              </div>
            </div>

            {/* Share and Favorite */}
            <div className="mt-8 flex gap-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Share2 className="w-5 h-5 mr-1" />
                <span>Share</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Heart className="w-5 h-5 mr-1" />
                <span>Favorite</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`${
                  activeTab === 'details'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`${
                  activeTab === 'reviews'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Rating & Reviews
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`${
                  activeTab === 'faqs'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                FAQs
              </button>
            </nav>
          </div>
          <TabSection 
            activeTab={activeTab} 
            product={product} 
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 sm:px-6">
          {/* Image Gallery */}
          <ImageGallery images={product.images} />

          {/* Product Info */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{product.rating} ★ | {product.reviewCount} reviews</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              {product.discountedPrice ? (
                <>
                  <span className="text-xl font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
                  <span className="text-base text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  {discountPercentage && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                      {discountPercentage}
                    </span>
                  )}
                </>
              ) : (
                <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="mt-4 text-gray-600">{product.description}</p>

            {/* Color Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <ColorSelector 
                colors={product.colors} 
                selectedColor={selectedColor} 
                onSelectColor={setSelectedColor} 
              />
            </div>

            {/* Size Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <SizeSelector 
                sizes={product.sizes} 
                selectedSize={selectedSize} 
                onSelectSize={setSelectedSize} 
              />
            </div>

            {/* Quantity Selector */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-5 h-5 text-gray-900" />
                <span className="text-xs mt-1">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCw className="w-5 h-5 text-gray-900" />
                <span className="text-xs mt-1">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-5 h-5 text-gray-900" />
                <span className="text-xs mt-1">2 Year Warranty</span>
              </div>
            </div>

            {/* Share and Favorite */}
            <div className="mt-6 flex gap-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Share2 className="w-4 h-4 mr-1" />
                <span>Share</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Heart className="w-4 h-4 mr-1" />
                <span>Favorite</span>
              </button>
            </div>
          </div>

          {/* Mobile Sticky Add to Cart */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Add to Cart - ${product.discountedPrice ? product.discountedPrice : product.price}
            </button>
          </div>
        </div>

        {/* Mobile Tabs Section */}
        <div className="mt-16 px-4 sm:px-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('details')}
                className={`${
                  activeTab === 'details'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Product Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`${
                  activeTab === 'reviews'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Rating & Reviews
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`${
                  activeTab === 'faqs'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                FAQs
              </button>
            </nav>
          </div>
          <TabSection 
            activeTab={activeTab} 
            product={product} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;