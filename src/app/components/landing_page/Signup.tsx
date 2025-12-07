import Image from 'next/image';
import React from 'react';

const Signup = () => {
  return (
    <div>
      {/* Join the Club Section */}
      <div className="md:bg-[#F9F9F9] h-[292px] md:h-[481px] w-screen flex justify-center items-center">
        <div className="bg-white lg:w-[1273px] lg:h-[362px] flex flex-col justify-around items-center h-full px-4 md:px-8">
          {/* Heading */}
          <div className="w-full max-w-md md:max-w-xl flex flex-col items-center text-center space-y-2">
            <h4 className="text-xl md:font-medium md:text-[36px]">
              Join the club and get the benefits
            </h4>
            <p className="text-sm md:text-[16px] md:w-[470px]">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, pop-up stores, and more.
            </p>
          </div>

          {/* Input and Button */}
          <div className="lg:w-[472px] h-14 flex items-center justify-center space-x-2">
            <input
              type="text"
              placeholder="your@email.com"
              className="bg-[#F9F9F9] h-full w-[244px] md:w-[354px] text-center placeholder-gray-500"
            />
            <button className="bg-Dark h-full w-[118px] text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="md:h-[603px] h-[806px] w-screen flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-[60%] flex flex-col justify-evenly px-6 md:px-12 py-6">
          {/* Heading */}
          <div className="w-full text-center md:text-left space-y-1">
            <h4 className="text-lg md:text-2xl font-medium">
              From a studio in London to a global brand with
            </h4>
            <h4 className="text-lg md:text-2xl font-medium">
              over 400 outlets
            </h4>
          </div>

          {/* Description */}
          <div className="mt-4 text-sm md:text-base text-center md:text-left space-y-4">
            <p>
              When we started Avion, the idea was simple. Make high-quality
              furniture affordable and available for the mass market.
            </p>
            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe, and design so our Chelsea boutique became the
              hotbed for the London interior design community.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#F9F9F9] h-[56px] w-full md:w-[170px] rounded-md">
              Get in touch
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <Image
            src="/Image (1).svg"
            alt="Furniture design"
            height={500}
            width={390}
            className="h-[358px] md:h-full md:w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
