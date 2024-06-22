import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import loginImage from "../static/images/login.png";

export default function LoginSection({ setShowLogin, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State to toggle between login and register
  const [isHidden, setIsHidden] = useState(false); // State to handle login container visibility

  const overlayRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoggingIn
      ? "http://127.0.0.1:8000/api/login/"
      : "http://127.0.0.1:8000/api/register/";
    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      if (response.data.success) {
        setIsLoggedIn(true);
        handleClose(); // Ensure login section closes upon success
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const handleClose = () => {
    setIsHidden(true); // Hide login container
    const overlay = overlayRef.current;
    overlay.classList.remove("faded"); // Remove fade from background
    setTimeout(() => {
      setShowLogin(false);
    }, 500); // Match the duration of the fade-out animation
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    if (overlay) {
      overlay.classList.add("faded"); // Add fade to background
    }
    setIsHidden(false); // Show login container
  }, []);

  return (
    <div
      ref={overlayRef}
      id="login-overlay"
      className="overlay pt-[7%]"
      onClick={handleOverlayClick}
    >
      <div
        className={`login-container flex flex-row h-[70vh] w-[48rem] rounded-xl bg-neutral-900 ${isHidden ? "hidden" : ""}`}
      >
        <div>
          <img
            src={loginImage}
            alt="Login"
            className="rounded-l-xl h-[70vh] w-[24rem]"
          />
        </div>

        <div className="flex flex-col items-center pt-[14%] flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-bold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3.5 py-2 mb-2 rounded focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="flex flex-col items-center flex-1">
              {error && <div className="mb-4 text-red-500">{error}</div>}
              <button
                type="submit"
                className="w-[12rem] py-2.5 text-base font-bold text-black bg-yellow-400 rounded-xl hover:scale-105"
              >
                {isLoggingIn ? "Log In" : "Register"}
              </button>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsLoggingIn(!isLoggingIn)}
                  className="text-xs text-neutral-200"
                >
                  {isLoggingIn
                    ? "Don’t have an account? Register"
                    : "Already have an account? Log In"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

LoginSection.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
