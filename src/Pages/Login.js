import React,{useState} from 'react'
import "../Pages/login.css"
import { NavLink } from 'react-router-dom'

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const [allEntry,setAllEntry]=useState([])

  function submitForm(e)
  {
    e.preventDefault()
    const newEntry = {email:email,password:password}

    setAllEntry([...allEntry,newEntry])
  }

  
  
  return (
    <div>
      <p>Welcome!</p>
      <form className='login_page' autoComplete="off" onSubmit={submitForm}>
        <div className='login_text'>Your Email</div>
        <input type="text" className='login_input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <div className='login_text'>Password</div>
        <input type="password" className='login_input'autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <button className='login_button' >Login</button>
        <p>Don't have account?</p>
        <NavLink to="/Register" >Register Now</NavLink>
      </form>
    </div>
    
  )
}

export default Login