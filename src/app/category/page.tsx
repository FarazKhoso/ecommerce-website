"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  slug: {
    current: string;
  };
  image?: {
    asset?: {
      url?: string;
    };
  };
}

interface CategoryProductsProps {
  products?: Product[];
  slug?: {
    current: string;
  };
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ products, slug }) => {
  if (!slug?.current) {
    return (
      <div className="text-center py-20 text-red-500">
        <h1>Error: Invalid category information.</h1>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl">
          No products found for the category &quot;{slug.current}&quot;.
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">
        {slug.current} Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-4">
            {/* Product Image */}
            <div className="h-[200px] w-full overflow-hidden rounded-md mb-4">
              {product.image?.asset?.url ? (
                <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  No Image Available
                </div>
              )}
            </div>
            {/* Product Details */}
            <h2 className="text-lg font-medium">{product.name}</h2>
            <p className="text-gray-600">£{product.price}</p>
            <p className="text-gray-500 mt-2">{product.description}</p>
            {/* View Details Button */}
            <Link href={`/components/landing_page/Products/${product.slug.current}`}>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
