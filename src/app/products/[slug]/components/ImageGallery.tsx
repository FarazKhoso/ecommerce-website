// app/products/[slug]/components/ImageGallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main Image */}
      <div className="lg:w-4/5">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={images[mainImageIndex]}
            alt="Product image"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="lg:w-1/5 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:h-auto max-h-96">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImageIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center ${
              mainImageIndex === index ? 'ring-2 ring-gray-900' : ''
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;