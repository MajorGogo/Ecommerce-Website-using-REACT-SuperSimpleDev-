import {Header} from '../../components/Header-main.jsx'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './HomePage.css'
import { ProductGrid } from './ProductGrid.jsx'


export function HomePage({cart,loadCart}) {


  const[products,setProduct]=useState([])
  // useEffect(()=>{
  //   axios.get('/api/products')
  //   .then((response)=>{
  //     setProduct(response.data)
  //   })
  // },[])

  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data)
  //   })
  // })

  useEffect(()=>{
    const getHomeData=async()=>{
      const response=await axios.get('/api/products')
      setProduct(response.data)
    }
    getHomeData()
  },[])

    return (
    <>
    <title>Ecommerce-Project</title>
    
    <Header cart={cart}/>
    <div className="home-page">
      <ProductGrid products={products} loadCart={loadCart}/>
    </div>
    </>
    
    );
}