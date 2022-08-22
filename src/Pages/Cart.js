import React from 'react'
import "../Pages/cart.css"

function Cart() {
  return (
    <div>
      <div className='cart-header'>Your Cart</div>
      <div>
        <p>number</p>
        <img/>
        <p>quantity</p>
        <button>-</button>
        <p>0</p>
        <button>+</button>
        
        <button>delete</button>
      </div>
      
    </div>
  )
}

export default Cart