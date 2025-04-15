import React, { useContext, useState } from "react";
// import { Menu, ShoppingCart } from "lucide-react";
import { CiMenuBurger } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline, IoClose, IoLocationOutline } from "react-icons/io5";
import { FiUser, FiHeart, FiClock, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, setSearchQuery } = useContext(CartContext);
  const [searchText, setSearchText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setSearchQuery(e.target.value.toLowerCase());
  };
  
  const locations = [
    { id: 1, name: "Delhi", address: "123 new Delhi", time: "15-20 min" },
    { id: 2, name: "Mumbai", address: "456 Andheri", time: "25-30 min" },
    { id: 3, name: "Hydrabad", address: "789 Hayedar Nagar", time: "10-15 min" }
  ];
  
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-20 animate-fadeDown">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Left - Logo with Menu */}
            <div className="flex items-center space-x-2 group">
              <div className="relative">
                <CiMenuBurger 
                  className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500 transition-colors duration-200" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></span>
              </div>
              <h1 
                className="text-xl font-bold text-gray-800 cursor-pointer relative overflow-hidden group-hover:text-red-600 transition-colors duration-300" 
                onClick={() => navigate("/")}
              >
                Coffee Menu
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </h1>
            </div>
            
            {/* Mobile Cart Button */}
            <div className="block md:hidden">
              <div
                className="flex items-center cursor-pointer relative hover:scale-105 active:scale-95 transition-transform duration-150"
                onClick={() => navigate("/cart")}
              >
                <CiShoppingCart className="w-8 h-8 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:bg-gray-200 rounded-full p-1" />
                {cart.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cart.length}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Location Selector */}
          <div className="hidden md:flex items-center border-r pr-4 text-sm">
            <button 
              className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setShowLocationModal(true)}
            >
              <IoLocationOutline className="text-red-500 mr-1" />
              <span>Select Location</span>
            </button>
          </div>
          

          <div className="flex items-center relative w-full md:w-1/3 group">
            <input 
              type="text" 
              placeholder="Search coffee..."
              value={searchText}
              onChange={handleSearch}
              className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all group-hover:shadow-md"
            />
            <IoSearchOutline className="text-gray-500 absolute left-3 group-hover:text-red-500 transition-colors" />
            {searchText && (
              <button 
                onClick={() => {
                  setSearchText("");
                  setSearchQuery("");
                }} 
                className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IoClose />
              </button>
            )}
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center ml-auto space-x-4">
            <button className="text-gray-700 hover:text-red-500 transition-colors">
              <FiUser className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-red-500 transition-colors relative">
              <FiHeart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <div
              className="flex items-center cursor-pointer relative hover:scale-105 active:scale-95 transition-transform duration-150"
              onClick={() => navigate("/cart")}
            >
              <CiShoppingCart className="w-8 h-8 text-gray-700 hover:text-red-500 transition-colors" />
              {cart.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-fadeIn border-t border-gray-200">
            <div className="p-4 space-y-3">
              <button 
                className="flex items-center w-full py-2 hover:bg-gray-50 rounded px-2 transition-colors"
                onClick={() => setShowLocationModal(true)}
              >
                <IoLocationOutline className="text-red-500 mr-2" />
                <span>Select Location</span>
              </button>
              <button className="flex items-center w-full py-2 hover:bg-gray-50 rounded px-2 transition-colors">
                <FiUser className="text-red-500 mr-2" />
                <span>Profile</span>
              </button>
              <button className="flex items-center w-full py-2 hover:bg-gray-50 rounded px-2 transition-colors">
                <FiHeart className="text-red-500 mr-2" />
                <span>Favorites</span>
              </button>
              <button className="flex items-center w-full py-2 hover:bg-gray-50 rounded px-2 transition-colors">
                <FiClock className="text-red-500 mr-2" />
                <span>Order History</span>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Location Selection Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 backdrop-blur-xs z-30 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fadeUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Select Delivery Location</h3>
              <button 
                onClick={() => setShowLocationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-3 mt-4">
              {locations.map(location => (
                <div 
                  key={location.id}
                  className="border border-gray-200 rounded-lg p-3 hover:border-red-300 hover:bg-red-50 cursor-pointer transition-colors"
                  onClick={() => setShowLocationModal(false)}
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium">{location.name}</h4>
                    <span className="text-sm text-green-600">{location.time}</span>
                  </div>
                  <p className="text-sm text-gray-500">{location.address}</p>
                </div>
              ))}
              
              <button className="w-full mt-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                Use Current Location
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
