import React, { useContext, useEffect } from 'react'
import CartContext from '../context/cartContext'
import { toast } from 'react-hot-toast';
import { IoIosStar } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";


const Cart = () => {
    const {cart, addToCart, removeFromCart, getTotalPrice, clearCart} = useContext(CartContext);
    useEffect(() => {
        console.log(cart);
    }, [cart]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-10">
          <CiShoppingCart className="h-20 w-20 mx-auto text-gray-400" />
          <p className="mt-4 text-lg text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-700">Items ({cart.length})</h2>
              <p className="text-2xl font-bold text-emerald-600">₹{getTotalPrice()}</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                
                <div className="ml-6 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      {item.time && <p className="text-xs text-gray-400">Delivery: {item.time}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-800">₹{item.price}</p>
                      {item.isVeg ? (
                        <span className="inline-block h-4 w-4 rounded-full bg-green-500 mt-1" title="Vegetarian"></span>
                      ) : (
                        <span className="inline-block h-4 w-4 rounded-full bg-red-500 mt-1" title="Non-Vegetarian"></span>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    {item.rating && (
                      <div className="flex items-center">
                        <IoIosStar className="text-yellow-500" />
                        <span className="ml-1 text-sm text-gray-600">{item.rating} ({item.reviews} reviews)</span>
                      </div>
                    )}
                    <button 
                      onClick={() => removeFromCart(item)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-8">
            <button 
              onClick={clearCart}
              className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Clear Cart
            </button>
            <button 
              onClick={() => {
                toast.success("Order Placed Successfully!");
                clearCart();
              }}
              className="px-6 py-3 bg-emerald-600 rounded-md text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none"
            >
              Place Order Now
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
