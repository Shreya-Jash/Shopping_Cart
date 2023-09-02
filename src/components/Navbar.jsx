import React from "react";
import "../styles/Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function Navbar({ size }) {
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <nav className="flex justify-between text-center">
      <div className="shop-name">
        <NavLink to="/" className="shop-logo">
          <p>
            <span>D</span>URGA<span>M</span>ATA
          </p>
          <p>
            <span>H</span>ARDWARE
          </p>
          <p>
            <span>S</span>TORE
          </p>
        </NavLink>
      </div>
      <div className="nav-container">
        <ul >
          <li className="mt-4">
            <NavLink to="/Cart" className="cart">
              <BsFillCartFill  />
              <span>{size}</span>
            </NavLink>
          </li>
          <li className="mt-2">
            {user ? (
              <li>
                <button onClick={handleLogOut} className="text-[bisque] pr-4 text-lg">Logout</button>
              </li>
            ) : (
              <li>
                <NavLink to="/Login" className="signUp text-[bisque] pr-4 text-lg">
                  Login/Register
                </NavLink>
              </li>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
