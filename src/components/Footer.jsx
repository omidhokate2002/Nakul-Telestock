import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "http://your-backend-url.com/subscribe",
        {
          email: email,
        }
      );
      setMessage(response.data.message);
      setEmail(""); // Clear the email input after successful subscription
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error(error);
    }
  };
  return (
    <footer className="bg-nav-footer  p-10 mt-16">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row m-8">
        <div className="flex flex-col mb-4 md:mb-0 gap-5 pr-36">
          <h2 className="text-white text-4xl mr-4">
            <span className="font-bold">XYZ</span>{" "}
            <span className="italic font-light">INDUSTRIES</span>
          </h2>
          <p className="text-gray-400 items-center justify-center max-w-sm text-pretty">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </p>
          <button className="bg-transparent hover:bg-blue-700 text-white border-white border py-2 px-4 rounded-full w-1/3 flex mt-3">
            EXPLORE <IoIosArrowRoundForward size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="mb-4">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li>About Us</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-white font-semibold mb-2">Customer Support</h3>
            <ul className="text-gray-400">
              <li>Feedback</li>
              <li>Report a Problem</li>
              <li>Request a Call Back</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Subscribe Us</h3>
            <p className=" mb-2 text-gray-400">
              Subscribe to our weekly newsletter
            </p>
            <div>
              <input
                type="email"
                placeholder="Email Id"
                className=" w-full py-2 px-4 focus:ring-blue-500 focus:border-transparent rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-lg"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
              {message && <p className="text-gray-500 mt-2">{message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 mt-4 border-t-2 border-gray-500 pt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <FaYoutube
            className="text-gray-400 hover:text-white transition-colors duration -300"
            size={20}
          />
          <FaTwitter
            className="text-gray-400 hover:text-white transition-colors duration-300"
            size={20}
          />
          <FaInstagram
            className="text-gray-400 hover:text-white transition-colors duration-300"
            size={20}
          />
          <FaFacebook
            className="text-gray-400 hover:text-white transition-colors duration-300"
            size={20}
          />
        </div>
        <div className="flex text-gray-400 gap-2">
          <span>Terms </span> | <span> Privacy</span>
          <div className="text-gray-400 mx-4">@ 2024 XYZ</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
