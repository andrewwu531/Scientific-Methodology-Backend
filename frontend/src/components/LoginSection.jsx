import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import loginImage from "../static/images/login.png";

export default function LoginSection({ setShowLogin, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true); // State to toggle between login and register
  const [isHidden, setIsHidden] = useState(false); // State to handle login container visibility
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgotten password view

  const overlayRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      handlePasswordReset();
      return;
    }

    const url = isLoggingIn
      ? "http://127.0.0.1:8000/api/login/"
      : "http://127.0.0.1:8000/api/register/";
    try {
      const response = await axios.post(
        url,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setIsLoggedIn(true);
        handleClose(); // Ensure login section closes upon success
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handlePasswordReset = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/password-reset/",
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setError("Password reset link sent to your email.");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
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
      className="overlay pt-[10vh]"
      onClick={handleOverlayClick}
    >
      <div
        className={`login-container flex flex-row h-[80vh] w-[55rem] rounded-lg bg-neutral-950 ${isHidden ? "hidden" : ""}`}
      >
        <div>
          <img
            src={loginImage}
            alt="Login"
            className="rounded-l-lg h-full w-[27.5vw]"
          />
        </div>

        <div
          className={`flex flex-col items-center pt-[17%] flex-1
                          ${isForgotPassword ? "pt-40" : ""} `}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm font-bold ">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[16rem] px-3.5 py-2.5 text-sm rounded focus:outline-none focus:ring-0 focus:bg-neutral-950 bg-neutral-950"
                required
              />
            </div>
            {!isForgotPassword && (
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="text-sm font-bold">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(!isForgotPassword)}
                    className={`text-xs text-neutral-200 ${isForgotPassword ? "" : "underline"}`}
                  >
                    {isForgotPassword
                      ? "Back to Login"
                      : "Forgot your password?"}
                  </button>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[16rem] px-3.5 py-2.5 text-sm rounded focus:outline-none focus:ring-0 bg-neutral-950"
                  required
                />
              </div>
            )}
            <div className="flex flex-col items-center pt-6">
              <button
                type="submit"
                className="w-[12rem] py-2.5 text-base font-bold text-black bg-yellow-400 rounded-xl hover:scale-105"
              >
                {isForgotPassword
                  ? "Reset Password"
                  : isLoggingIn
                    ? "Log In"
                    : "Register"}
              </button>
              <div className="mt-4 text-center">
                {!isForgotPassword && (
                  <button
                    type="button"
                    onClick={() => setIsLoggingIn(!isLoggingIn)}
                    className="text-xs text-neutral-200"
                  >
                    {isLoggingIn ? (
                      <>
                        Don’t have an account?{" "}
                        <span className="underline">Register</span>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <span className="underline">Log In</span>
                      </>
                    )}
                  </button>
                )}
                {error && (
                  <div className="mt-2 text-[0.8rem] text-red-500">{error}</div>
                )}
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
