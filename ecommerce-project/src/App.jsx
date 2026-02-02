import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { HomePage } from './pages/HomePage.jsx'
import { Checkout } from './pages/CheckoutPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import './App.css'

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />} />
      <Route path='/checkout' element={<Checkout cart={cart} />} />
      <Route path='/tracking' element={<TrackingPage />} />
      <Route path='/orders' element={<OrdersPage />} />

    </Routes>


  )
}

export default App
