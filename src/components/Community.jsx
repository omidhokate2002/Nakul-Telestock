import React from "react";
import { images } from "../assets";

const HousingPartner = () => {
  return (
    <div className="pt-16 pb-16 relative">
      <div className="relative">
        <img src={images.image5} alt="Housing Community" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center ">
          <div className="text-black mt-20">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4">
              YOUR <span className="italic font-semibold">TRUSTED</span> PARTNER
              IN <br /> THE FUTURE
              <span className="italic font-semibold">OF HOUSING</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8">
              Our partnerships with governments and local banks ensure that our
              housing prices are <br /> affordable enough for our target market.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-full">
              Join Our Community Today{" "}
              <span className="ml-2 md:ml-3">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingPartner;
