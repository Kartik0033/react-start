import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { Checkout } from './pages/CheckoutPage.jsx'
import { TrackingPage } from './pages/TrackingPage.jsx'
import { OrdersPage } from './pages/OrdersPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/tracking' element={<TrackingPage />} />
      <Route path='/orders' element={<OrdersPage />} />

    </Routes>


  )
}

export default App
