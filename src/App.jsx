import { useState } from 'react'
import './App.css'
import MenuCard from './components/MenuCard'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MenuCard />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
