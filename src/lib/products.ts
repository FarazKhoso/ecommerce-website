// src/lib/products.ts
import { Product } from '@/types/product';

// Mock data for products - you would replace this with actual data fetching logic
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Cotton T-Shirt',
    description: 'A high-quality cotton t-shirt with a comfortable fit. Perfect for everyday wear.',
    category: 'T-Shirts',
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.5,
    reviewCount: 128,
    images: [
      'https://placehold.co/600x600?text=T-Shirt+Front',
      'https://placehold.co/600x600?text=T-Shirt+Back',
      'https://placehold.co/600x600?text=T-Shirt+Side',
      'https://placehold.co/600x600?text=T-Shirt+Detail',
    ],
    colors: ['#000000', '#FFFFFF', '#0000FF', '#808080'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      '100% Premium Cotton',
      'Breathable fabric',
      'Machine washable',
      'Pre-shrunk for perfect fit'
    ],
    material: 'Cotton',
    careInstructions: 'Machine wash cold with like colors. Tumble dry low.',
    reviews: [
      {
        id: 'r1',
        rating: 5,
        title: 'Great quality!',
        content: 'This t-shirt is exactly what I was looking for. The material is soft and comfortable, and the fit is perfect.',
        date: '2023-05-15',
        author: 'Alex Johnson',
        verified: true,
        helpful: 24,
        images: ['https://placehold.co/100x100?text=Review+Photo', 'https://placehold.co/100x100?text=Review+Photo']
      },
      {
        id: 'r2',
        rating: 4,
        title: 'Good value for money',
        content: 'Nice t-shirt, good quality for the price. The color is exactly as shown in the pictures.',
        date: '2023-06-20',
        author: 'Maria Garcia',
        verified: true,
        helpful: 15,
        images: []
      }
    ]
  },
  {
    id: '2',
    title: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans with stretch for comfort and style.',
    category: 'Jeans',
    price: 79.99,
    rating: 4.2,
    reviewCount: 89,
    images: [
      'https://placehold.co/600x600?text=Jeans+Front',
      'https://placehold.co/600x600?text=Jeans+Back',
    ],
    colors: ['#0000FF', '#000000', '#808080'],
    sizes: ['28', '30', '32', '34', '36'],
    features: [
      '98% Cotton, 2% Elastane',
      'Five-pocket design',
      'Zip fly with button closure',
      'Premium denim fabric'
    ],
    material: 'Cotton Blend',
    careInstructions: 'Machine wash cold. Do not bleach. Tumble dry medium.',
    reviews: [
      {
        id: 'r3',
        rating: 5,
        title: 'Perfect fit',
        content: 'These jeans fit perfectly. I love the slim fit without being too tight.',
        date: '2023-04-10',
        author: 'James Wilson',
        verified: true,
        helpful: 18,
        images: []
      }
    ]
  }
];

export async function getProductBySlug(slug: string): Promise<Product | null> {
  // In a real application, you would fetch from your database or API
  // For now, we'll simulate an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Find product by matching slug to title (in lowercase and with spaces replaced by hyphens)
  const product = mockProducts.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
  
  return product || null;
}