import React from "react";

const Navbar = () => {
  return (
    <nav className="m-8">
      <div className="flex items-center justify-between">
        <div className="text-black">
          <span className="text-4xl font-extrabold">XYZ</span>{" "}
          <span className="text-4xl font-light italic">INDUSTRIES</span>
        </div>
        <div className="bg-blue-950 md:flex space-x-8 text-zinc-400 p-5 rounded-full">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Property
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 border-black border">
            Sign Up
          </button>
          <button className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600 border-blue-600 border rounded-full">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
