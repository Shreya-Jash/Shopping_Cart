import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "../styles/Register.css"

function Register() {
  const [user,setUser]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    cpassword:" "
  })

  function handleChange(e)
  {
    const {name,value}=e.target
    // console.log(e.target)
    setUser({
      ...user,
      [name] :value
    })
  }

  return (
    <div className="register">
       {/* {console.log("user", user)} */}
      <h2 className="register_header">Register Below!</h2>
      <form autoComplete="off" className="register_form">

        <input 
          type="text" 
          placeholder="Your Name" 
          className="register_input" 
          name="name"
          onChange={handleChange}
          value={user.name}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="register_input"
          name="email"
          onChange={handleChange}
          value={user.email}
        />

        <input
          type="number"
          placeholder="Phone Number"
          className="register_input"
          name="phoneNumber"
          onChange={handleChange}
          value={user.phoneNumber}
        />

        <input
          type="password"
          placeholder="Password"
          className="register_input"
          name="password"
          onChange={handleChange}
          value={user.password}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="register_input"
          name="cpassword"
          onChange={handleChange}
          value={user.cpassword}
        />

        <button type="submit" className="register_button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
