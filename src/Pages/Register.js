import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "../Pages/Register.css"

function Register() {
  const [userRegistration,setUserRegistration]=useState({
    name:"",
    email:"",
    phoneNumber:"",
    password:"",
    cpassword:""
  })

  const [record,setRecord]=useState([])

  function onChange(e)
  {
    const name=e.target.name
    const value=e.target.value

    setUserRegistration({...userRegistration,[name] :value})
  }

  function handleSubmit(e)
  {
    e.preventDefault()

    const newRecord={...userRegistration, id: new Date().getTime().toString()}
    setRecord([...record,newRecord])
  }

  return (
    <div className="register">
      <h2 className="register_header">Register Below!</h2>
      <form autoComplete="off" className="register_form" onSubmit={handleSubmit}>
        
        <input 
          type="text" 
          placeholder="Your Name" 
          className="register_input" 
          id="name"
          name="name"
          onChange={onChange}
          value={userRegistration.name}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="register_input"
          id="email"
          name="email"
          onChange={onChange}
          value={userRegistration.email}
        />

        <input
          type="number"
          placeholder="Phone Number"
          className="register_input"
          id="phoneNumber"
          name="phoneNumber"
          onChange={onChange}
          value={userRegistration.phoneNumber}
        />

        {/* <input
          type="date"
          placeholder="Date of Birth"
          className="register_input"
          id="date"
          onChange={onChange}
        /> */}

        <input
          type="password"
          placeholder="Password"
          className="register_input"
          id="password"
          name="password"
          onChange={onChange}
          value={userRegistration.password}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="register_input"
          id="cpassword"
          name="cpassword"
          onChange={onChange}
          value={userRegistration.cpassword}
        />

        <button type="submit" className="register_button" id="registerButton">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
