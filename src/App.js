import React, {useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

// Page import
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'

export default function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
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
        <Navbar  size={cart.length}/>
        <Routes>
          <Route exact path='/' element={<Home handleClick={handleClick}/>}/>
        </Routes>
        <Routes>
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
        </Routes>
        <Routes>
          <Route path='/Login' element={<Login />}/>
        </Routes>
        <Routes>
          <Route path='/Register' element={<Register />}/>
        </Routes>
      </Router>
    </div>
  )
}
