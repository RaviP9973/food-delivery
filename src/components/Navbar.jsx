import React from "react";
// import { Menu, ShoppingCart } from "lucide-react";
import { CiMenuBurger } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <CiMenuBurger className="w-6 h-6 text-gray-700" />
          <h1 className="text-xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate("/")}>Coffee Menu</h1>
        </div>

        {/* Right - Icons/Cart */}
        <div
          className="flex items-center space-x-4 w-fit cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <CiShoppingCart className="w-8 h-8 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:bg-gray-200 rounded-full p-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
