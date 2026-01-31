import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { Checkout } from './pages/CheckoutPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<Checkout />} />

    </Routes>


  )
}

export default App
