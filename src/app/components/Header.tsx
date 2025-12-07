
'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { IoIosContact, IoMdLogIn } from 'react-icons/io';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import useCartStore from '@/app/store/cartStore';
import useAuthStore from '@/app/store/authStore';
import UserProfile from './auth/UserProfile';

interface Category {
  name: string;
  slug: string;
}

const Header = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const { isAuthenticated, user, logout } = useAuthStore();

  const [categories, setCategories] = useState<Category[]>([]); // To store categories
  const [searchTerm, setSearchTerm] = useState(''); // To handle the search input

  // Fetch categories from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{name, "slug": slug.current}`;
      const categoryData = await client.fetch(query);
      setCategories(categoryData);
    };

    fetchCategories();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Redirect to a dynamic category page if the searched term matches a category
      const matchedCategory = categories.find((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (matchedCategory) {
        window.location.href = `/category/${matchedCategory.slug}`;
      } else {
        alert('Category not found');
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
    } else {
      // Navigate to auth page
      window.location.href = '/auth';
    }
  };

  const handleCartClick = () => {
    if (!isAuthenticated) {
      // If not authenticated, redirect to auth page with cart as redirect target
      window.location.href = '/auth?redirect=/Shopping-Cart/';
    } else {
      // If authenticated, proceed to cart
      window.location.href = '/Shopping-Cart/';
    }
  };

  return (
    <div>
      {/* Top Header */}
      <div className="h-[68px] w-screen flex justify-between items-center px-4 md:px-8">
        <h1 className="text-2xl font-bold">Avion</h1>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-[500px] mx-2 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress} // Listen for Enter key press
            placeholder="Search categories..."
            className="border border-gray-300 px-4 py-2 pl-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-200"
          />
          <AiOutlineSearch
            onClick={handleSearch}
            className="absolute left-3 text-gray-500 cursor-pointer"
            size={20}
          />
        </div>

        <div className="flex items-center md:gap-6 gap-4 relative">
          <button
            onClick={handleCartClick}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <BiCart className="md:text-2xl text-xl cursor-pointer text-gray-700" />
            {totalItems > 0 && (
              <span
                className="absolute top-1 right-1 bg-red-500
        text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
              >
                {totalItems}
              </span>
            )}
          </button>

          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <button
              onClick={handleAuthAction}
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <IoMdLogIn className="md:text-xl text-lg cursor-pointer" />
              <span className="hidden md:inline">Sign In</span>
            </button>
          )}
        </div>
      </div>

      <hr className="w-[90%] mx-auto" />

      {/* Categories Menu */}
      <div className="h-[68px] w-screen hidden md:block">
        <ul className="h-full flex justify-center items-center gap-5 text-[#726E8D]">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`}>
                <p className="hover:text-black cursor-pointer">{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;



