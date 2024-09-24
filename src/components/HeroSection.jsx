import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#417a97] h-[550px] text-white text-center py-16 px-4 flex items-center flex-col justify-center gap-4">
      <h1 className="text-3xl font-bold md:text-5xl">
        Find Your Perfect Flatmate or Roommate
      </h1>
      <p className="mt-4 text-lg">
        Discover verified flatmates and roommates nearby, tailored to your needs.
      </p>
      <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-800 hover:text-white">
        Start Searching
      </button>
    </div>
  );
};

export default HeroSection;
