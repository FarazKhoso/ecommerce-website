
  'use client';

  import React, { useEffect, useState } from 'react';
  import Image from 'next/image';
  import { client } from '@/sanity/lib/client';

  interface Product {
    name: string;
    description: string;
    image: string;
  }

  const Hero = () => {
    const [slides, setSlides] = useState<Product[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Fetch product data from Sanity
    useEffect(() => {
      const fetchProducts = async () => {
        const query = `*[_type == "product"]{
          name,
          description,
          "image": image.asset->url
        }`;
        const products = await client.fetch(query);
        setSlides(products);
      };

      fetchProducts();
    }, []);

    // Auto-slide every 4 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [slides]);

    if (!slides.length) return null;

    return (
      <div className="w-full h-[704px] bg-[#2A254B] text-white relative overflow-hidden py-6">
        {/* Container */}
        <div className="max-w-[1280px] mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {slides[currentSlide]?.name}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              {slides[currentSlide]?.description}
            </p>
            <button className="bg-white text-[#2A254B] font-semibold px-6 py-2 mt-4 rounded-md hover:bg-gray-100 transition-all">
              Shop Now
            </button>
          </div>

        {/* Right Image */}
  <div className="w-full md:w-1/2 h-[350px] flex items-center justify-center overflow-hidden relative">
    {slides[currentSlide]?.image ? (
      <div className="w-[500px] h-[300px] flex justify-center items-center overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={slides[currentSlide]?.image}
          alt={slides[currentSlide]?.name || 'Product Image'}
          layout="fill" // Fill the container
          objectFit="cover" // Maintain aspect ratio and cover the container
          className="rounded-lg"
        />
      </div>
    ) : (
      <p className="text-center text-gray-500">No Image Available</p>
    )}
  </div>
  </div>

        {/* Pagination Indicators */}
        <div className='hidden md:block'>
        <div className="absolute bottom-8 w-full flex justify-center gap-2 ">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
            ></span>
          ))}
          </div>
        </div>
      </div>
    );
  };

  export default Hero;
