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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login flex flex-col rounded-lg shadow-2xl shadow-stone-700 absolute w-80 xs:w-[450px] h-[450px]">
      <p className="text-xl text-center font-bold text-[bisque]">
        Login to your account!
      </p>
      {error && (
        <div
          role="alert"
          className="bg-red-500 text-white font-bold rounded-t px-4 py-2"
        >
          {error}
        </div>
      )}
      <form
        className="login_page flex justify-center"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="flex-col w-72 xs:w-96">
          <div className="login_text">Your Email</div>
          <input
            type="text"
            className="login_input w-72 xs:w-96 "
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="login_text">Password</div>
          <input
            type="password"
            className="login_input w-72 xs:w-96"
            autoComplete="new-password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_button w-1/5 h-6 text-sm ">Login</button>
          <div className="h-px bg-[bisque] mt-4 mb-4"></div>
          <div>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>

          <p className="text-center text-lg pt-5 text-[bisque]">
            Don't have account?{" "}
            <NavLink to="/Register" className="text-[#f7b769]">
              Register Now
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
