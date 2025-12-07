// src/types/product.ts
export interface ProductReview {
  id: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  author: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: string[];
  sizes: string[];
  features?: string[];
  material?: string;
  careInstructions?: string;
  reviews: ProductReview[];
}