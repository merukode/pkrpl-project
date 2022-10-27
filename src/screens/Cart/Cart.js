import React from 'react'
import './Cart.css'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Link, useParams } from "react-router-dom";

function Cart() {
  return (
    <>
    <Navbar/>

    <div className='center'>
        <h3>Your Cart</h3>
        <p>Go checkout some items.</p>
        <button>Continue Shopping</button>
    </div>

    <Footer/>
    </>
  )
}

export default Cart;