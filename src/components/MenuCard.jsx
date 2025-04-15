import React, { useContext, useState, useMemo } from "react";
import { PiShareFat } from "react-icons/pi";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty, IoIosArrowDown } from "react-icons/io";
import { FaFilter, FaStar, FaFire, FaSortAmountDown, FaTags } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import CartContext from "../context/cartContext";
import toast from "react-hot-toast";
import { FaArrowUp } from "react-icons/fa";
const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    price: 255,
    rating: 4.2,
    reviews: 9,
    description:
      "Rich flavors of bold espresso smoothly blended with steamed milk",
    image:
      "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=",
    isVeg: false,
    time: null,
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Mocha",
    price: 285,
    rating: null,
    reviews: null,
    description:
      "An expert blend of chocolate milk and our Espresso for a caffeinated chocolate sensation",
    image:
      "https://media.gettyimages.com/id/1324007808/photo/dalgona-coffee-with-coffee-beans-on-table.jpg?s=612x612&w=0&k=20&c=rMYdqfDabwczSHdceHnrCNwawEhTQy4N7hPqzJErl5c=",
    isVeg: true,
    time: "15 mins",
    tag: "New"
  },
  {
    id: 3,
    name: "Caramel Latte",
    price: 320,
    rating: 4.7,
    reviews: 12,
    description:
      "Smooth espresso with steamed milk and rich caramel syrup, topped with foam",
    image:
      "https://media.gettyimages.com/id/1324007808/photo/dalgona-coffee-with-coffee-beans-on-table.jpg?s=612x612&w=0&k=20&c=rMYdqfDabwczSHdceHnrCNwawEhTQy4N7hPqzJErl5c=",
    isVeg: true,
    time: "15 mins",
    tag: "Popular"
  },
];

const MenuCard = () => {
  const { cart, addToCart, removeFromCart, searchQuery } = useContext(CartContext);
  const [favorites, setFavorites] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeSort, setActiveSort] = useState("recommended");
  const [expandedItems, setExpandedItems] = useState([]);
  
  const toggleItemExpand = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };
  
  const filteredItems = useMemo(() => {
    let items = searchQuery 
      ? menuItems.filter(
          item => 
            item.name.toLowerCase().includes(searchQuery) || 
            item.description.toLowerCase().includes(searchQuery)
        )
      : [...menuItems];
      
    // Sort items based on activeSort
    if (activeSort === "price-low") {
      items.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-high") {
      items.sort((a, b) => b.price - a.price);
    } else if (activeSort === "rating") {
      items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    
    return items;
  }, [searchQuery, activeSort]);
  
  const toggleFavorite = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId));
      toast.success("Removed from favorites");
    } else {
      setFavorites([...favorites, itemId]);
      toast.success("Added to favorites");
    }
  };
  
  const sortOptions = [
    { id: "recommended", label: "Recommended", icon: <FaStar className="text-yellow-500" /> },
    { id: "price-low", label: "Price: Low to High", icon: <FaSortAmountDown className="text-blue-500" /> },
    { id: "price-high", label: "Price: High to Low", icon: <FaSortAmountDown className="transform rotate-180 text-red-500" /> },
    { id: "rating", label: "Highest Rated", icon: <FaStar className="text-amber-500" /> }
  ];
  
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-white">
      {/* Header with filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row justify-between items-center animate-fadeIn">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">Special Menu</h1>
          {filteredItems.length > 0 && (
            <span className="ml-2 text-sm text-gray-500">({filteredItems.length} items)</span>
          )}
        </div>
        <div className="flex gap-2 mt-3 md:mt-0">
          <button 
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium hover:scale-105 active:scale-95 transition-transform duration-150 shadow-sm hover:shadow"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter />
            <span>Filters</span>
          </button>
          <button className="relative flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium hover:bg-blue-100 hover:scale-105 active:scale-95 transition duration-150 group">
            <MdOutlineLocalOffer />
            <span>Offers</span>
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              2
            </span>
          </button>
        </div>
      </div>
      
      {/* Filters Section */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6 animate-fadeIn shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-700 mb-3">Sort By</h3>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map(option => (
              <button
                key={option.id}
                className={`flex items-center px-3 py-2 rounded-md text-sm transition duration-150 ${
                  activeSort === option.id 
                    ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setActiveSort(option.id)}
              >
                <span className="mr-2">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Search results message */}
      {searchQuery && (
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-md mb-4 animate-fadeIn">
          <p className="text-blue-700">
            Showing results for: <span className="font-semibold">"{searchQuery}"</span>
            {filteredItems.length === 0 && (
              <span className="block mt-1 text-sm">No items found. Try a different search term.</span>
            )}
          </p>
        </div>
      )}
      
      <div className="space-y-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col-reverse md:flex-row justify-between items-start border-b pb-6 rounded-lg hover:shadow-lg transition duration-300 p-4 animate-fadeIn group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Left Side */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="flex items-center space-x-2">
                  {item.isVeg ? (
                    <span className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </span>
                  ) : (
                    <span className="w-4 h-4 border-2 border-red-600 rounded-sm flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                    </span>
                  )}
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  {item.tag && (
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      item.tag === 'Bestseller' ? 'bg-amber-100 text-amber-700' :
                      item.tag === 'New' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.tag === 'Bestseller' && <FaFire className="inline mr-1" />}
                      {item.tag === 'New' && <FaTags className="inline mr-1" />}
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Rating */}
                {item.rating && (
                  <div className="flex items-center text-yellow-500 text-sm mt-1">
                    <span>★</span>
                    <span className="ml-1 text-gray-700">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>
                )}

                {/* Time */}
                {item.time && (
                  <div className="text-sm text-green-600 mt-1">⏱ {item.time}</div>
                )}

                <div className="text-gray-800 font-semibold mt-2">
                  ₹{item.price}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {expandedItems.includes(item.id) 
                    ? item.description 
                    : `${item.description.slice(0, 50)}...`}
                  <button 
                    className="text-blue-500 cursor-pointer hover:underline ml-1 focus:outline-none"
                    onClick={() => toggleItemExpand(item.id)}
                  >
                    {expandedItems.includes(item.id) ? 'less' : 'more'}
                    <IoIosArrowDown className={`inline ml-1 transform transition-transform duration-200 ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="flex space-x-4 mt-4">
                  <button 
                    className="text-gray-600 text-xl rounded-full border border-gray-300 p-2 hover:bg-gray-200 hover:scale-110 active:scale-90 transition-transform duration-150"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites.includes(item.id) ? (
                      <IoIosHeart className="text-red-500" />
                    ) : (
                      <IoIosHeartEmpty />
                    )}
                  </button>
                  <button 
                    className="text-gray-600 text-xl rounded-full border border-gray-300 p-2 hover:bg-gray-200 hover:scale-110 active:scale-90 transition-transform duration-150"
                  >
                    <IoBookmarkOutline />
                  </button>
                  <button 
                    className="text-gray-600 text-xl rounded-full border border-gray-300 p-2 hover:bg-gray-200 hover:scale-110 active:scale-90 transition-transform duration-150"
                  >
                    <PiShareFat />
                  </button>
                </div>
              </div>

              {/* Right Side (Image & Add Button) */}
              <div className="w-full md:w-1/3 flex flex-col items-center space-y-2 relative">
                <div className="relative w-full h-48 md:w-40 md:h-40 overflow-hidden rounded-xl group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {cart.some((cartItem) => cartItem.id === item.id) ? (
                  <button
                    className="bg-white text-red-600 font-bold border border-red-400 rounded-lg px-4 py-1 absolute -bottom-1 z-10 shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 active:scale-95 transform"
                    onClick={() => {
                      toast.error("Removed from cart");
                      removeFromCart(item);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="bg-white text-red-600 font-bold border border-red-400 rounded-lg px-4 py-1 absolute -bottom-1 z-10 shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 active:scale-95 transform"
                    onClick={() => {
                      toast.success("Added to cart");
                      addToCart(item);
                    }}
                  >
                    Add +
                  </button>
                )}

              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4 animate-bounce">☕</div>
            <h3 className="text-xl font-semibold text-gray-700">No coffee found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search.</p>
          </div>
        )}
      </div>
      
      {/* Quick Scroll To Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 active:scale-90 transition-all duration-200"
      >
        <FaArrowUp/>
      </button>
    </div>
  );
};

export default MenuCard;
