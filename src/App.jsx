import { useState, useEffect } from 'react'
import './App.css'
import MenuCard from './components/MenuCard'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import { FiCoffee} from "react-icons/fi";
import FeatureSection from './components/FeatureSection'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);



  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-red-100">
        <div className="text-center animate-pulse">
          <FiCoffee className="w-16 h-16 mx-auto text-red-500" />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">Coffee Delivery</h1>
          <p className="text-gray-600">Loading delicious coffee...</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-50 to-red-100 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-4 pb-10 px-4">
        <Routes>
          <Route path='/' element={<MenuCard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
      <FeatureSection />
      <NewsLetter />
      <Footer />
      
    </div>
  )
}

export default App
