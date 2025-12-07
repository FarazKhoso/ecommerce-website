
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // Import useRouter
import useCartStore from '@/app/store/cartStore'; // Zustand store
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
}

const ProductPage = () => {
  const params = useParams();
  const router = useRouter(); // Initialize useRouter
  const slug = params?.slug;

  const [product, setProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) return;

      const query = `
        *[_type == "product" && slug.current == $slug][0] {
          _id,
          name,
          price,
          description,
          image {
            asset->{
              url
            }
          }
        }
      `;

      try {
        const result = await client.fetch(query, { slug });
        setProduct(result);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      // Add item to cart
      addItem({
        id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.image.asset.url,
      });

      // Navigate to Cart Page
      router.push('/Shopping-Cart'); // Replace with the actual cart page route
    }
  };

  if (!product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={400}
            height={300}
            className="w-full max-w-sm object-cover rounded-md shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg mt-2">{product.description}</p>
            <p className="text-lg font-semibold mt-4">
              Price: <span className="text-green-600">${product.price}</span>
            </p>
            <button
              onClick={handleAddToCart}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
