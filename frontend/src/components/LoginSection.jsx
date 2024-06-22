import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function LoginSection({ setShowLogin, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and register

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? "http://127.0.0.1:8000/api/register/"
      : "http://127.0.0.1:8000/api/login/";
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
    const loginSection = document.getElementById("login-section");
    loginSection.classList.remove("animate-slide-in");
    loginSection.classList.add("animate-slide-out");
    setTimeout(() => {
      setShowLogin(false);
    }, 1000); // Match the duration of the slide-out animation
  };

  useEffect(() => {
    const loginSection = document.getElementById("login-section");
    if (loginSection) {
      loginSection.classList.remove("animate-slide-out");
      loginSection.classList.add("animate-slide-in");
    }
  }, []);

  return (
    <div
      id="login-section"
      className="fixed top-0 right-0 h-full transform translate-x-full bg-white shadow-lg w-80 animate-slide-in"
    >
      <div className="flex justify-end p-4">
        <button onClick={handleClose}>&times;</button>
      </div>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded"
        >
          {isRegistering ? "Register" : "Log In"}
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-blue-500"
          >
            {isRegistering
              ? "Already have an account? Log In"
              : "Don’t have an account? Register"}
          </button>
        </div>
      </form>
    </div>
  );
}

LoginSection.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
