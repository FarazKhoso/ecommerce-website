
"use client";
import {client} from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
}

const OurProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0...4] {
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
    <div className="w-screen p-6 md:px-20 py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">Our Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* First Product */}
        {products[0] && (
          <div className="md:col-span-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
            <div className="w-full h-[250px] md:h-[350px] overflow-hidden rounded-md">
              <Image
                src={products[0].imageUrl}
                alt={products[0].name}
                width={600}
                height={400}
                className="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-lg md:text-2xl font-medium">{products[0].name}</h4>
              <p className="text-lg font-bold mt-2">£{products[0].price}</p>
            </div>
            <Link href={`/components/landing_page/Products/${products[0].slug.current}`}>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        )}

        {/* Second Product */}
        {products[1] && (
          <div className="md:col-span-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
            <div className="w-full h-[350px] overflow-hidden rounded-md">
              <Image
                src={products[1].imageUrl}
                alt={products[1].name}
                width={400}
                height={300}
                className="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-medium">{products[1].name}</h4>
              <p className="text-lg font-bold mt-2">£{products[1].price}</p>
            </div>
            <Link href={`/components/landing_page/Products/${products[1].slug.current}`}>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        )}

        {/* Third Product */}
        {products[3] && (
          <div className="md:col-span-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
            <div className="w-full h-[350px] overflow-hidden rounded-md">
              <Image
                src={products[3].imageUrl}
                alt={products[3].name}
                width={400}
                height={300}
                className="object-cover h-full w-full hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium">{products[3].name}</h4>
              <p className="text-lg font-bold mt-2">£{products[3].price}</p>
            </div>
            <Link href={`/components/landing_page/Products/${products[3].slug.current}`}>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProduct;
