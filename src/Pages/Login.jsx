import React, { useState } from "react";
import "../styles/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    setError("");
    try {
      await logIn(email,password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  }

  const handleGoogleSignIn= async(e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  }
  // const [user,setUser]=useState({
  //   email:"",
  //   password:""
  // })

  // function handleChange(e)
  // {
  //   const {name,value}=e.target
  //   console.log(e.target)
  //   setUser({
  //     ...user,
  //     [name]:value
  //   })
  // }

  return (
    <div>
      <p>Welcome Back!</p>
      {error && <div role="alert" className="bg-red-500 text-white font-bold rounded-t px-4 py-2">{error}</div>}
      <form className="login_page" autoComplete="off" onSubmit={handleSubmit}>
        <div className="login_text">Your Email</div>
        <input
          type="text"
          className="login_input"
          name="email"
          // value={user.email}
          // onChange={handleChange}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="login_text">Password</div>
        <input
          type="password"
          className="login_input"
          autoComplete="new-password"
          name="password"
          // value={user.password}
          // onChange={handleChange}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login_button">Login</button>
        <div>
          <GoogleButton onClick={handleGoogleSignIn}/>
        </div>

        <p>Don't have account?</p>
        <NavLink to="/Register">Register Now</NavLink>
      </form>
    </div>
  );
}

export default Login;
