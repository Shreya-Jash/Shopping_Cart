import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useUserAuth } from "../context/UserAuthContext";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signUp } = useUserAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register flex flex-col rounded-lg shadow-2xl shadow-stone-700 absolute w-80 xs:w-[450px] h-[450px]">
      <h2 className="register_header text-xl text-center pb-4 font-bold text-[bisque] ">
        Register Below!
      </h2>
      {error && (
        <div
          role="alert"
          className="bg-red-500 text-white font-bold rounded-t px-4 py-2"
        >
          {error}
        </div>
      )}
      <form
        autoComplete="off"
        className="register_form flex justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex-col w-72 xs:w-96">
          <div className="login_text">Your Email</div>

          <input
            type="email"
            className="register_input w-72 xs:w-96"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="login_text">Password</div>

          <input
            type="password"
            className="register_input w-72 xs:w-96"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="register_button w-1/5 h-6 text-sm bg-[bisque]"
          >
            Register
          </button>
          <p className="text-center text-lg pt-5 text-[bisque]">
            Already have an account?{" "}
            <NavLink to="/Login" className="text-[#f7b769]">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
