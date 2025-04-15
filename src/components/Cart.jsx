import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/cartContext";
import { toast } from "react-hot-toast";
import { IoIosStar, IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import {
  FaArrowLeft,
  FaTruck,
  FaPercent,
  FaTag,
  FaShippingFast,
  FaCreditCard,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
    clearCart,
    updateQuantity,
  } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome15") {
      setDiscount(15);
      toast.success("Promo code applied: 15% off");
    } else if (promoCode.toLowerCase() === "coffee20") {
      setDiscount(20);
      toast.success("Promo code applied: 20% off");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const getDiscountedTotal = () => {
    const total = getTotalPrice();
    return total - (total * discount) / 100;
  };

  const paymentMethods = [
    {
      id: "card",
      label: "Credit Card",
      icon: <FaCreditCard className="text-blue-500" />,
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      icon: <MdSecurity className="text-green-500" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fadeIn">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate("/")}
          className="mr-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 active:scale-90 transition duration-150"
        >
          <FaArrowLeft className="text-gray-600" />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 animate-fadeIn">
          <div className="relative inline-block">
            <CiShoppingCart className="h-32 w-32 mx-auto text-gray-400" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-20">
              ☕
            </div>
          </div>
          <p className="mt-6 text-xl text-gray-600">Your cart is empty</p>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 active:scale-95 transition duration-150 shadow-md hover:shadow-lg"
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <>
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-700">
                Items ({cart.length})
              </h2>
              <p className="text-2xl font-bold text-emerald-600">
                ₹{getTotalPrice()}
              </p>
            </div>
            <div className="flex items-center text-sm text-gray-600 animate-fadeInLeft">
              <FaTruck className="mr-2 text-emerald-500" />
              <p>Free delivery on orders above ₹500</p>
            </div>
          </div>

          {/* Delivery Time Estimation */}
          <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg mb-6 animate-fadeIn">
            <div className="flex items-center text-blue-800">
              <FaShippingFast className="text-xl mr-2" />
              <span className="font-semibold">Estimated Delivery</span>
            </div>
            <div className="text-blue-900 font-bold">25-30 mins</div>
          </div>

          <div className="space-y-4 mb-8">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-fadeIn hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="md:w-1/4 h-24 w-full overflow-hidden rounded-md mb-4 md:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="md:ml-6 flex-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.name}
                        </h3>
                        {item.isVeg ? (
                          <span
                            className="inline-block h-4 w-4 rounded-full bg-green-500 ml-2"
                            title="Vegetarian"
                          ></span>
                        ) : (
                          <span
                            className="inline-block h-4 w-4 rounded-full bg-red-500 ml-2"
                            title="Non-Vegetarian"
                          ></span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description.substring(0, 60)}...
                      </p>
                      {item.time && (
                        <p className="text-xs text-gray-400 flex items-center">
                          <FaTag className="mr-1" /> Delivery: {item.time}
                        </p>
                      )}
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-lg font-semibold text-gray-800">
                        ₹{item.price}
                      </p>
                      {item.rating && (
                        <div className="flex items-center justify-end mt-1">
                          <IoIosStar className="text-yellow-500" />
                          <span className="ml-1 text-sm text-gray-600">
                            {item.rating}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
                    {/* Quantity control */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <IoIosRemoveCircle className="text-red-500 text-xl" />
                      </button>
                      <span className="px-4 py-1 font-medium">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <IoIosAddCircle className="text-green-500 text-xl" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item)}
                      className="text-sm text-red-500 hover:text-red-700 px-3 py-1 border border-red-200 rounded-md hover:bg-red-50 active:scale-95 transition duration-150 flex items-center"
                    >
                      <span className="mr-1">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Promo Code Section */}
            <div
              className="p-4 border border-gray-200 rounded-lg animate-fadeIn hover:shadow-md transition-shadow duration-200"
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center border-b pb-2">
                <FaPercent className="mr-2 text-red-500" />
                Apply Promo Code
              </h3>
              <div className="flex">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-200"
                />
                <button
                  onClick={applyPromoCode}
                  className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 active:scale-95 transition duration-150"
                >
                  Apply
                </button>
              </div>
              {discount > 0 ? (
                <p className="mt-2 text-green-600 text-sm flex items-center">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Applied: {discount}% discount
                </p>
              ) : (
                <div className="mt-2 text-gray-500 text-xs">
                  <p>Try these codes: welcome15, coffee20</p>
                </div>
              )}
            </div>

            {/* Payment Methods */}
            <div
              className="p-4 border border-gray-200 rounded-lg animate-fadeIn hover:shadow-md transition-shadow duration-200"
              style={{ animationDelay: "400ms" }}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center border-b pb-2">
                <FaCreditCard className="mr-2 text-blue-500" />
                Payment Method
              </h3>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="mr-2"
                      defaultChecked={method.id === "card"}
                    />
                    <div className="flex items-center">
                      {method.icon}
                      <span className="ml-2">{method.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div
            className="bg-gray-50 p-4 rounded-lg mb-6 animate-fadeIn hover:shadow-md transition duration-200"
            style={{ animationDelay: "500ms" }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-3 border-b pb-2">
              Order Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{getTotalPrice()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">
                  ₹{(getTotalPrice() * 0.05).toFixed(2)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({discount}%)</span>
                  <span>
                    -₹{((getTotalPrice() * discount) / 100).toFixed(2)}
                  </span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-lg">
                    ₹
                    {(getDiscountedTotal() + getTotalPrice() * 0.05).toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Inclusive of all taxes
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <button
              onClick={clearCart}
              className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-98 transition duration-150"
            >
              Clear Cart
            </button>
            <button
              onClick={() => {
                toast.success("Order Placed Successfully!");
                clearCart();
              }}
              className="px-6 py-3 bg-emerald-600 rounded-md text-sm font-medium text-white hover:bg-emerald-700 active:scale-98 transition duration-150 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>Place Order Now</span>
              <span className="animate-bounce">🚀</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
