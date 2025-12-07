// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ProductDetail from './components/ProductDetail';
import { getProductBySlug } from '@/lib/products'; // Assuming you have this function

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export default ProductPage;