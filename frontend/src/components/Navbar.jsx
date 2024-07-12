import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import logo from "../static/images/logo111.jpg";

export default function NavBar({ setShowLogin, isLoggedIn, setIsLoggedIn }) {
  const [showLogo, setShowLogo] = useState(false);
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
    setShowLogin(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 7;
      setShowLogo(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center h-[11vh] fixed top-0 left-0 z-50 w-full bg-black shadow-lg px-8">
      <div className="flex items-center">
        {showLogo && <img src={logo} alt="logo" className="w-10 h-10 mr-4" />}
      </div>
      <div className="flex items-center space-x-5">
        <NavbarDropdown />
        <ul role="menu" className="flex items-center gap-6">
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleSignOut}
                className="justify-center px-6 py-2.5 text-base font-bold rounded-lg hover:scale-105 text-black bg-yellow-400"
              >
                Account Logout
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
  setShowLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
