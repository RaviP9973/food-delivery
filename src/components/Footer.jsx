import React from "react";
import { FiCoffee, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-center md:justify-start">
              <FiCoffee className="mr-2 text-red-500" />
              Coffee Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              The best coffee delivered to your doorstep. Quality beans, freshly
              ground and brewed to perfection.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Locations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors duration-200"
              >
                <FiInstagram className="text-gray-700 hover:text-red-500 transition-colors duration-200" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors duration-200"
              >
                <FiFacebook className="text-gray-700 hover:text-red-500 transition-colors duration-200" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors duration-200"
              >
                <FiTwitter className="text-gray-700 hover:text-red-500 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600">
            © 2023 Coffee Delivery. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-200"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
