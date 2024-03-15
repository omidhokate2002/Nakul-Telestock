import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="container text-center pt-16">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
        CONNECTING DREAMS TO REALITY
      </h1>
      <h2 className="text-4xl md:text-7xl font-semibold italic text-cyan-600">
        YOUR PREMIER
      </h2>
      <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
        REAL ESTATE MARKETPLACE
      </h2>
      <p className="text-lg md:text-xl text-gray-800 mb-4 pt-5">
        Where every search ends with a home
      </p>
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 pt-5">
        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 flex items-center gap-2 mb-3 md:mb-0">
          Find Your Home <IoIosArrowRoundForward size={24} />
        </button>
        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 flex items-center gap-2">
          List Your Property <IoIosArrowRoundForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
