"use client"

import OurProduct from './ourProduct'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {client} from "@/sanity/lib/client"; 

interface Product {
  _id: string;
  name: string;
  slug: { current: string };  price: number;
  imageUrl: string;
}

const Ceramics: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][9..12] {
        _id,
        name,
        price,
        slug,
        "imageUrl": image.asset->url
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="w-screen h-auto p-4 md:p-20 py-12">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Section Title */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">New Ceramics</h1>
          </div>

          {/* Dynamic Product Cards */}
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center"
            >
              {/* Product Image */}
              <div className="w-full h-[200px] overflow-hidden rounded-md mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <h4 className="text-lg font-medium text-center">{product.name}</h4>
              <p className="text-gray-600 text-center mt-1">£{product.price}</p>

              {/* View Details Button */}
              <Link href={`/components/landing_page/Products/${product.slug.current}`}>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}

          {/* View Collection Button */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center">
            <Link href="/components/Product-Listing">
              <button className="mt-8 bg-gray-200 px-6 py-3 rounded-md hover:bg-gray-300 transition-all duration-300">
                View Collection
              </button>
            </Link>
          </div>
        </div>
      </div>
<OurProduct/> 
    </div>
  );
};

export default Ceramics;
