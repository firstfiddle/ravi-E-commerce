/* eslint-disable no-unused-vars */
import './App.css'
import axios from 'axios'
import {Routes , Route} from "react-router-dom"
import Header from './Component/layout/Header'
import Footer from './Component/layout/Footer'
import Home from './Component/Home'


import Login from './Component/user/Login'
import Register from './Component/user/Register'
import Dashboard from './Component/admin/Dashboard'
import Profile from './Component/user/Profile'
import Contact from './Component/Contact'
import Cart from './Component/cart/Cart'


import Checkout from './Component/checkout/Checkout'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect ,useState } from 'react'
import { loadUser } from './redux/actions/UserAction'



import ProductDetail from './Component/product/ProductDetail'
import CheckoutStep from './Component/cart/CheckoutStep'
import Shipping from './Component/cart/Shipping'
 import ConfirmOrder from './Component/cart/ConfirmOrder'
import Payment from './Component/payment/Payment'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; 
import Success from './Component/payment/Success'
import Order from './Component/Order/Order'
import OrderDetails from './Component/Order/OrderDetails'
import CatFil from './Component/category/CatFil'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'


function App() {
  const {isAuthenticated } = useSelector((state) => state.auth);
  const [stripeApiKey, setStripeApiKey] = useState("");
    async function getStripeApiKey() {
    const { data } = await axios.get("/api/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  //console.log(stripeApiKey)
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadUser())
    getStripeApiKey()
  },[dispatch])
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="productDetail/:id" element={<ProductDetail/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/register" element={<Register/> } />
       
        <Route path="/contact" element={<Contact/> } />
        <Route path="/cart" element={<Cart/> } />
        <Route path="/catfil" element={<CatFil/> } />
        {/* <Route path="/checkout" element={<Checkout/> } />
        <Route path="/checkoutStep" element={<CheckoutStep/> } /> */}
       
       {/* secure route honge */}
       <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/profile" element={<Profile/> } />
        {/* <Route path='/update/:id' element={<Profile/>}/> */}
        <Route path="/shipping" element={<Shipping/> } />
        <Route path="/dashboard" element={<Dashboard/> } />
        <Route path="/order/confirm" element={<ConfirmOrder/> } />
        <Route path="/success" element={<Success/> } />
        <Route path="/orders/me" element={<Order/> } />
        <Route path="/order/:id" element={ <OrderDetails/>} />
        </Route>
        {
          stripeApiKey && (
            <Route 
            path='/payment' element ={ 
              <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment/>
              </Elements>
            } />
          )
        }
       
        </Routes>
    <Footer/>
    </>
  )
}

export default App