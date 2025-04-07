import React, { useContext } from "react";
import { PiShareFat } from "react-icons/pi";
import { IoBookmarkOutline } from "react-icons/io5";
import CartContext from "../context/cartContext";
import toast from "react-hot-toast";

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
  },
  {
    id: 2,
    name: "Mocha",
    price: 285,
    rating: null,
    reviews: null,
    description:
      "An expert blend of chocolate milk and our Espresso for a caffeinated choc...",
    image:
      "https://media.gettyimages.com/id/1324007808/photo/dalgona-coffee-with-coffee-beans-on-table.jpg?s=612x612&w=0&k=20&c=rMYdqfDabwczSHdceHnrCNwawEhTQy4N7hPqzJErl5c=",
    isVeg: true,
    time: "15 mins",
  },
  {
    id: 3,
    name: "Mocha",
    price: 285,
    rating: null,
    reviews: null,
    description:
      "An expert blend of chocolate milk and our Espresso for a caffeinated choc...",
    image:
      "https://media.gettyimages.com/id/1324007808/photo/dalgona-coffee-with-coffee-beans-on-table.jpg?s=612x612&w=0&k=20&c=rMYdqfDabwczSHdceHnrCNwawEhTQy4N7hPqzJErl5c=",
    isVeg: true,
    time: "15 mins",
  },
];

const MenuCard = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 bg-white">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-start border-b pb-6"
        >
          {/* Left Side */}
          <div className="w-1/2">
            <div className="flex items-center space-x-2">
              {item.isVeg && (
                <span className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                </span>
              )}
              <h2 className="text-lg font-semibold">{item.name}</h2>
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
              {item.description.slice(0, 50)}...
              <span className="text-blue-500">more</span>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="text-gray-600 text-xl rounded-full border border-gray-300 p-2 hover:bg-gray-200 hover:shadow-lg transition-all duration-300">
                <IoBookmarkOutline />
              </button>
              <button className="text-gray-600 text-xl rounded-full border border-gray-300 p-2 hover:bg-gray-200 hover:shadow-lg transition-all duration-300">
                <PiShareFat />
              </button>
            </div>
          </div>

          {/* Right Side (Image & Add Button) */}
          <div className="w-1/3 flex flex-col items-center space-y-2 relative  ">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-xl object-cover w-40 h-40 hover:scale-105 transition-all duration-300"
            />

            {cart.some((cartItem) => cartItem.id === item.id) ? (
              <button
                className="bg-white text-red-600 font-bold border border-red-400 rounded-lg px-4 py-1 absolute bottom-5  z-100 hover:bg-red-600 hover:text-white transition-all duration-300"
                onClick={() => {
                  toast.error("removed from cart");
                  removeFromCart(item);
                }}
              >
                Remove
              </button>
            ) : (
              <button
                className="bg-white text-red-600 font-bold border border-red-400 rounded-lg px-4 py-1 absolute bottom-5  z-100 hover:bg-red-600 hover:text-white transition-all duration-300"
                onClick={() => {
                  toast.success("Added to cart");
                  addToCart(item);
                }}
              >
                Add +
              </button>
            )}
            {/* ADD + */}

            <p className="text-xs text-gray-500   mt-5">customisable</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
