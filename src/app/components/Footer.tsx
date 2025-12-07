"use client";

import React, { useEffect, useState } from "react";
import {
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
}

const Footer: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [email, setEmail] = useState<string>("");

  // Fetch categories dynamically from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "category"]{name, "slug": slug.current}`;
      const fetchedCategories = await client.fetch(query);
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  const handleSignUp = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Signed up successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-Dark text-white">
      {/* Footer Content */}
      <div className="container mx-auto p-6 md:py-14 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Links Section */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Dynamic Categories */}
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-semibold">Categories</li>
            {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-sm hover:underline hover:text-gray-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400">Loading categories...</li>
            )}
          </ul>

          {/* Static Menus */}
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-semibold">Menu</li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                New arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Best sellers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Recently viewed
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Popular this week
              </Link>
            </li>
            <li>
              <Link
                href="/components/Product-Listing"
                className="text-sm hover:underline hover:text-gray-300"
              >
                All products
              </Link>
            </li>
          </ul>

          {/* Company Info */}
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-semibold">Our company</li>
            <li>
              <Link
                href="/components/about"
                className="text-sm hover:underline hover:text-gray-300"
              >
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Vacancies
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline hover:text-gray-300">
                Returns policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Mailing List */}
        <div className="md:col-span-2">
          <p className="text-lg font-semibold">Join our mailing list</p>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow p-2 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              onClick={handleSignUp}
              className="px-4 py-2 bg-white text-Dark rounded-md hover:bg-gray-300"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full bg-gray-700 h-[1px]"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm">© 2022 Avion LTD. All rights reserved.</p>
        <div className="flex gap-4 text-lg">
          <Link href="https://www.linkedin.com/in/muhammad-faraz-931200347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="hover:text-gray-300">
            <FaLinkedin />
          </Link>
          <Link href="https://www.facebook.com/share/154nD3RiJb/?mibextid=qi2Omg" className="hover:text-gray-300">
            <IoLogoFacebook />
          </Link>
          <Link href="https://www.instagram.com/p/C6mFDs5iQ3P/?igsh=Mng2emNpdjh0N3Bi" className="hover:text-gray-300">
            <FaInstagram />
          </Link>
          <Link href="https://www.skype.com" className="hover:text-gray-300">
            <FaSkype />
          </Link>
          <Link href="https://www.twitter.com" className="hover:text-gray-300">
            <FaTwitter />
          </Link>
          <Link href="https://www.pinterest.com" className="hover:text-gray-300">
            <FaPinterest />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
