import './App.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'   // should be react-router-dom, not react-router
import { HomePage } from './Pages/Home/HomePage'
import { OrderPage } from './Pages/OrderPage'
import { CheckoutPage } from './Pages/Checkout/CheckoutPage'
import { TrackingPage } from './Pages/TrackingPage'

function App() {
  const [cart,setCart]=useState([])

  // useEffect(()=>{
  //   axios.get('/api/cart-items?expand=product')
  //     .then((response)=>{
  //       setCart(response.data)
  //     })
  // },[])
  const loadCart= async()=>{
      const response=await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

  useEffect(()=>{ 
    loadCart()
  },[])

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='/checkout' element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path='/order' element={<OrderPage cart={cart} />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  )
}

export default App

