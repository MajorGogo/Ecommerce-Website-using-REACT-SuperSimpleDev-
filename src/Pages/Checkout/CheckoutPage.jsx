
import './CheckoutPage-header.css'
import './CheckoutPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PaymentSummary } from './PaymentSummary'
import { OrderSummary } from './OrderSummary'
import { CheckoutHeaderContent } from './CheckoutHeaderContent'


export function CheckoutPage({ cart ,loadCart}) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)

  // useEffect(()=>{
  //   axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
  //     .then((response)=>{
  //       setDeliveryOptions(response.data)
  //     })

  //   axios.get('/api/payment-summary')
  //     .then((response)=>{
  //       setPaymentSummary(response.data)
  //     })
  // },[])

  useEffect(() => {
    const getDeliveryOptionsData = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data)
    }
    getDeliveryOptionsData()
  }, [])

  useEffect(()=>{
    const getPaymentSummaryData = async () => {
      const response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data)
    }
    getPaymentSummaryData()
  },[cart])

  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <CheckoutHeaderContent/>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart}/>
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>

  )
}