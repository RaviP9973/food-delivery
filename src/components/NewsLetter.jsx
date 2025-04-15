import React, { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";

const NewsLetter = () => {

    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if(email) {
          alert('Thanks for subscribing!');
          setEmail('');
        }
      };
  return (
    <section className="bg-red-600 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
          <p className="mt-2">
            Get the latest offers and updates delivered to your inbox
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
          <div className="relative flex-grow max-w-md">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-3 pl-10 pr-20 rounded-l-lg text-gray-900 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-gray-900 text-white rounded-r-lg flex items-center hover:bg-gray-800 transition-colors"
            >
              Subscribe
              <FiSend className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
