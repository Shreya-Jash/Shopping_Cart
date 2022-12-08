import React,{useState} from 'react'
import "../styles/login.css"
import { NavLink } from 'react-router-dom'

function Login() {
  
  const [user,setUser]=useState({
    email:"",
    password:""
  })

  function handleChange(e)
  {
    const {name,value}=e.target
    console.log(e.target)
    setUser({
      ...user,
      [name]:value
    })
  }
  
  
  return (
    <div>
      <p>Welcome Back!</p>
      <form className='login_page' autoComplete="off">
        
        <div className='login_text'>Your Email</div>
        <input 
          type="text" 
          className='login_input'
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <div className='login_text'>Password</div>
        <input 
          type="password" 
          className='login_input'
          autoComplete="new-password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button className='login_button'>Login</button>
        
        <p>Don't have account?</p>
        <NavLink to="/Register" >Register Now</NavLink>
      </form>
    </div>
    
  )
}

export default Login