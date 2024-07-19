import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import logo from "../static/images/logo111.jpg";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/logout/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setIsLoggedIn(false);
        navigate("/"); // Redirect to home or login page
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("An error occurred during sign out:", error);
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center h-[10vh] left-0 w-full bg-black shadow-lg px-8">
      <div className="flex items-center justify-start mt-2.5 space-x-1">
        <img src={logo} alt="logo" className="w-10 h-10 mr-2.5" />
        <div className="flex flex-col leading-tight text-md">
          <div>Independent</div>
          <div>Education</div>
        </div>
      </div>
      <div className="flex items-center mt-1 space-x-4">
        <NavbarDropdown />
        <ul role="menu" className="flex items-center gap-6">
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleSignOut}
                className="relative mt-1 w-[12vw] px-6 py-3 text-md font-bold text-neutral-300 bg-black rounded-lg overflow-hidden"
              >
                <span className="relative z-10">Account Signout</span>
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(to right, #FDE68A, #60A5FA)", // Smooth gradient from yellow-300 to blue-400
                  }}
                ></div>
                <div className="absolute inset-0 bg-black rounded-lg m-[1px]"></div>
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={handleClick}
                className="relative mt-1 w-[12vw] px-6 py-3 text-md font-bold text-neutral-300 bg-black rounded-lg overflow-hidden"
              >
                <span className="relative z-10">Register/ Log In</span>
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(to right, #FDE68A, #60A5FA)", // Smooth gradient from yellow-300 to blue-400
                  }}
                ></div>
                <div className="absolute inset-0 bg-black rounded-lg m-[1px]"></div>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
