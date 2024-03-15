import React from "react";
import { images } from "../assets";

const HousingPartner = () => {
  return (
    <div className="pt-16 pb-16 relative">
      <div className="relative">
        <img src={images.image5} alt="Housing Community" className=" w-full" />
        <div className="absolute inset-0 flex mt-10 justify-center">
          <div className="text-center text-black">
            <h2 className="text-7xl font-extrabold mb-4">
              YOUR <span className="m-3 italic font-semibold">TRUSTED</span>{" "}
              PARTNER IN <br /> THE FUTURE
              <span className="m-3 italic font-semibold">OF HOUSING</span>
            </h2>
            <p className="mb-8">
              Our partnerships with governments and local banks ensure that our
              housing prices are <br /> affordable enough for our target market.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-7 rounded-full">
              Join Our Community Today <span className="ml-3">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingPartner;
