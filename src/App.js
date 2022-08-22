import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

// Page import
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp'

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/Cart' element={<Cart />}/>
        </Routes>
        <Routes>
          <Route path='/SignUp' element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  )
}
