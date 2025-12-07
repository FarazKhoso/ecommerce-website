// app/products/[slug]/components/TabSection.tsx
'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/types/product'; // Assuming you have product types

interface TabSectionProps {
  activeTab: 'details' | 'reviews' | 'faqs';
  product: Product;
}

const TabSection = ({ activeTab, product }: TabSectionProps) => {
  switch (activeTab) {
    case 'details':
      return <ProductDetailsTab product={product} />;
    case 'reviews':
      return <ReviewsTab product={product} />;
    case 'faqs':
      return <FAQsTab />;
    default:
      return <ProductDetailsTab product={product} />;
  }
};

const ProductDetailsTab = ({ product }: { product: Product }) => {
  return (
    <div className="py-6">
      <h3 className="text-lg font-medium text-gray-900">Product Information</h3>
      <div className="mt-4 space-y-4">
        <p className="text-gray-600">{product.description}</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {product.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900">Material</h4>
            <p className="text-gray-600">{product.material}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Care Instructions</h4>
            <p className="text-gray-600">{product.careInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsTab = ({ product }: { product: Product }) => {
  const [reviews] = useState(product.reviews);

  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
          Write a Review
        </button>
      </div>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{review.rating} ★</span>
            </div>
            
            <h4 className="mt-2 font-medium text-gray-900">{review.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{review.date}</p>
            <p className="mt-2 text-gray-700">{review.content}</p>
            
            <div className="flex items-center mt-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                {review.author[0]}
              </div>
              <span className="ml-2 text-sm text-gray-900">{review.author}</span>
              {review.verified && (
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Verified Purchase
                </span>
              )}
            </div>
            
            {review.images && review.images.length > 0 && (
              <div className="mt-4 flex gap-2">
                {review.images.map((image, idx) => (
                  <div key={idx} className="w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                    <Image 
                      src={image} 
                      alt={`Review image ${idx + 1}`} 
                      width={64} 
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex items-center mt-4">
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                <span>Helpful</span>
                <span className="ml-1">{review.helpful}</span>
              </button>
              <button className="ml-4 text-sm text-gray-600 hover:text-gray-900">
                Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQsTab = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for an additional fee and takes 1-2 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return period for all items. Items must be in original condition with tags attached."
    },
    {
      question: "How do I care for this product?",
      answer: "Machine wash cold with like colors. Tumble dry low. Do not bleach. Iron on low heat if needed."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries. International shipping rates and delivery times vary by destination."
    }
  ];

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSection;