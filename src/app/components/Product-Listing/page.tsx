import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
}

const ProductsPage = async () => {
  const query = `
    *[_type == "product"] {
      _id,
      name,
      slug,
      price,
      image {
        asset->{
          url
        }
      }
    }
  `;
  const products: Product[] = await client.fetch(query);

  // Filter out products with missing images
  const filteredProducts = products.filter((_, index) => index !== 5 && index !== 6);

  return (
    <div className="container mx-auto my-12">
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product._id}
            className={`product-card bg-white shadow-md rounded-lg overflow-hidden transition-transform transform duration-500 ease-in-out hover:scale-105 ${
              index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right"
            }`}
          >
            <Image
              src={product.image?.asset?.url}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold truncate">{product.name}</h2>
              <p className="text-lg font-bold text-gray-800 mt-2">£{product.price}</p>
              <Link
               href={`/components/landing_page/Products/${product.slug.current}`}
                className="mt-4 block bg-blue-500 text-white text-sm font-medium py-2 text-center rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;











