import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Register.css"
import { useUserAuth } from "../context/UserAuthContext";

function Register() {
  // const [user,setUser]=useState({
  //   name:"",
  //   email:"",
  //   phoneNumber:"",
  //   password:"",
  //   cpassword:" "
  // })

  // function handleChange(e)
  // {
  //   const {name,value}=e.target
  //   // console.log(e.target)
  //   setUser({
  //     ...user,
  //     [name] :value
  //   })
  // }
  const [email,setEmail] =useState();
  const [password,setPassword]=useState();
  const {signUp} = useUserAuth();
  const [error,setError]=useState();
  const navigate =useNavigate();
  const handleSubmit =async(e)=>{
    e.preventDefault();
    setError("");
    try {
      await signUp(email,password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="register">
       {/* {console.log("user", user)} */}
      <h2 className="register_header">Register Below!</h2>
      {error && <div role="alert" className="bg-red-500 text-white font-bold rounded-t px-4 py-2">{error}</div>}
      <form autoComplete="off" className="register_form" onSubmit={handleSubmit}>

        {/* <input 
          type="text" 
          placeholder="Your Name" 
          className="register_input" 
          name="name"
          onChange={handleChange}
          value={user.name}
        /> */}

        <input
          type="email"
          placeholder="Your Email"
          className="register_input"
          name="email"
          // onChange={handleChange}
          onChange={(e) => setEmail(e.target.value)}
          // value={user.email}
        />

        {/* <input
          type="number"
          placeholder="Phone Number"
          className="register_input"
          name="phoneNumber"
          onChange={handleChange}
          value={user.phoneNumber}
        /> */}

        <input
          type="password"
          placeholder="Password"
          className="register_input"
          name="password"
          // onChange={handleChange}
          onChange={(e) => setPassword(e.target.value)}
          // value={user.password}
        />

        {/* <input
          type="password"
          placeholder="Confirm Password"
          className="register_input"
          name="cpassword"
          onChange={handleChange}
          value={user.cpassword}
        /> */}

        <button type="submit" className="register_button">
          Register
        </button>

        <p>Already have an account?</p>
        <NavLink to="/Login">Login</NavLink>
      </form>
    </div>
  );
}

export default Register;
