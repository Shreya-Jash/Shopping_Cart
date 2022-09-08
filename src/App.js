import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

// Page import
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp'
import Products from './components/Products'
import Register from './Pages/Register'

import Data from './components/Data'

export default function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [buttonText, setButtonText] = useState('Add Item');


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    setButtonText('Item added');
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <Router>
        <Navbar setShow={setShow} size={cart.length}/>
        <Routes>
          <Route exact path='/' element={<Home handleClick={handleClick}/>}/>
        </Routes>
        <Routes>
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
        </Routes>
        <Routes>
          <Route path='/SignUp' element={<SignUp />}/>
        </Routes>
        <Routes>
          <Route path='/Register' element={<Register />}/>
        </Routes>
      </Router>
    </div>
  )
}
