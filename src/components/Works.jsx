import React from "react";
import { images } from "../assets";
const HowItWorks = () => {
  return (
    <div>
      <div className="container pt-16 flex flex-col items-center space-y-8 mt-16 mb-16">
        <h1 className="text-7xl font-bold">HOW IT WORKS?</h1>
        <p className="text-sm">Step by Step Guide</p>
      </div>

      <div className="flex items-start pl-20">
        <div className="flex items-center max-w-4xl gap-8">
          <img src={images.image1} alt="Discover Your Perfect Home" />
          <div className="ml-6">
            <h2 className="text-3xl font-bold mb-2">
              Discover Your Perfect Home
            </h2>
            <p className="text-gray-600 mb-4">
              Use our advanced filters to narrow down your search. Specify
              everything from location to amenities, ensuring you find the
              property that feels right.
            </p>
            <button className=" text-gray-500 underline">Learn More</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end rounded-lg pr-20">
        <div className="flex items-center max-w-4xl gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Showcase Your Property</h2>
            <p className="text-gray-600">
              List your property with ease. Fill in detailed forms to highlight
              every feature, attracting the perfect buyer directly.
            </p>
            <button className=" text-gray-500 underline">Learn More</button>
          </div>
          <img src={images.image2} alt="Showcase Your Property" />
        </div>
      </div>

      <div className="flex items-center rounded-lg pl-20">
        <div className="flex items-center max-w-4xl gap-8">
          <img src={images.image3} alt="Connect and Communicate" />
          <div className="ml-6">
            <h2 className="text-3xl font-bold mb-2">Connect and Communicate</h2>
            <p className="text-gray-600 text-left ">
              Our platform facilitates direct communication between buyer and
              seller, making negotiations transparent and straightforward.
            </p>
            <button className=" text-gray-500 underline">Learn More</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end rounded-lg pr-20">
        <div className="flex items-center max-w-4xl gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Seal the Deal Securely</h2>
            <p className="text-gray-600">
              Advance payments made safe. Secure your agreement with confidence,
              and step closer to your dream property.
            </p>
            <button className=" text-gray-500 underline">Learn More</button>
          </div>
          <img src={images.image4} alt="Seal the Deal Securely" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
