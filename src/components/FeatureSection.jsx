import React from "react";
import { FaCreditCard, FaPhone, FaShieldAlt, FaTruck } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition-shadow duration-300">
            <FaTruck className="text-red-500 text-3xl mb-3" />
            <h3 className="font-bold text-gray-800">Free Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">On orders above ₹500</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition-shadow duration-300">
            <FaPhone className="text-red-500 text-3xl mb-3" />
            <h3 className="font-bold text-gray-800">24/7 Support</h3>
            <p className="text-sm text-gray-600 mt-1">Call us anytime</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition-shadow duration-300">
            <FaCreditCard className="text-red-500 text-3xl mb-3" />
            <h3 className="font-bold text-gray-800">Secure Payment</h3>
            <p className="text-sm text-gray-600 mt-1">100% secure checkout</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 hover:shadow-md rounded-lg transition-shadow duration-300">
            <FaShieldAlt className="text-red-500 text-3xl mb-3" />
            <h3 className="font-bold text-gray-800">Quality Guarantee</h3>
            <p className="text-sm text-gray-600 mt-1">Best beans selection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
