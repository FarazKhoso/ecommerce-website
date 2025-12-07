import React from "react";
import { client } from "@/sanity/lib/client";
import CategoryProducts from "../page";

// Fetch products from Sanity
const fetchCategoryProducts = async (slug: string) => {
  const query = `
    *[_type == "product" && category->slug.current == $slug] {
      _id,
      name,
      price,
      slug,
      description,
      image {
        asset->{
          url
        }
      }
    }
  `;

  try {
    const products = await client.fetch(query, { slug });
    return products;
  } catch (error) {
    console.error("Error fetching products from Sanity:", error);
    return [];
  }
};

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  // Await the params to avoid sync errors
  const { slug } = await Promise.resolve(params);

  // Validate slug
  if (!slug) {
    console.error("Error: No slug provided.");
    return (
      <div className="text-center py-20 text-red-500">
        Error: No category slug provided.
      </div>
    );
  }

  // Fetch products
  const products = await fetchCategoryProducts(slug);

  return (
    <div>
      <CategoryProducts products={products} slug={{ current: slug }} />
    </div>
  );
}
