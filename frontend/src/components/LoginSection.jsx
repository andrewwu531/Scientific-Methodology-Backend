import { useState, useEffect, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import landingImage0 from "../static/images/landing0.jpg";
import landingImage1 from "../static/images/landing1.jpg";
import landingImage2 from "../static/images/landing2.jpg";
import landingImage3 from "../static/images/landing3.jpg";
import landingImage4 from "../static/images/landing4.jpg";
import landingImage5 from "../static/images/landing5.jpg";
import landingImage6 from "../static/images/landing6.jpg";
import landingImage7 from "../static/images/landing7.jpg";
import landingImage8 from "../static/images/landing8.jpg";
import landingImage9 from "../static/images/landing9.jpg";
import landingImage10 from "../static/images/landing10.jpg";
import landingImage11 from "../static/images/landing11.jpg";
import { User } from "react-feather";

export default function LoginSection({ setUserEmail, setUser, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true); // State to toggle between login and register
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgotten password view
  const [courseBanners, setCourseBanners] = useState([]);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const banners = [
      landingImage0,
      landingImage1,
      landingImage2,
      landingImage3,
      landingImage4,
      landingImage5,
      landingImage6,
      landingImage7,
      landingImage8,
      landingImage9,
      landingImage10,
      landingImage11,
    ];
    setCourseBanners(banners);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let pos = 0;
    const speedLeft = 1;
    const speedRight = 1.7;

    const moveContainer = () => {
      const leftColumn = container.querySelector(".left-column");
      const rightColumn = container.querySelector(".right-column");

      if (pos <= leftColumn.scrollHeight / 2) {
        pos += 1;
        leftColumn.style.transform = `translateY(-${pos * speedLeft}px)`;
        rightColumn.style.transform = `translateY(-${pos * speedRight}px)`;
        requestAnimationFrame(moveContainer);
      }
    };

    moveContainer();
  }, [courseBanners]);

  const firstColumnBanners = courseBanners.slice(0, 6);
  const secondColumnBanners = courseBanners.slice(6, 12);

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
        localStorage.setItem("userEmail", email);
        setUserEmail(email);
        setUser(User);
        console.log("Logged In/ Register Successfully", setUserEmail);
        console.log("Logged In/ Register Successfully", setUser);
        navigate("/");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error("Error during login/register:", error);
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
      console.error("Error during password reset:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-row h-screen bg-black rounded-lg">
          <div className="z-10 w-[52vw] h-[88vh] pl-[9vw] overflow-hidden mt-20">
            <div className="relative w-full h-full">
              <div
                ref={containerRef}
                className="absolute flex flex-col space-x-5 animate-scroll"
                style={{ transform: "translateY(0px)" }}
              >
                <div className="flex space-x-5">
                  <div className="flex flex-col space-y-4 left-column">
                    {firstColumnBanners
                      .concat(firstColumnBanners)
                      .map((banner, index) => (
                        <img
                          key={index}
                          src={banner}
                          alt={`Course Banner ${index}`}
                          className="w-[28vw] rounded-lg"
                          style={{ marginBottom: "7px" }}
                        />
                      ))}
                  </div>
                  <div className="flex flex-col space-y-4 right-column">
                    {secondColumnBanners
                      .concat(secondColumnBanners)
                      .map((banner, index) => (
                        <img
                          key={index}
                          src={banner}
                          alt={`Course Banner ${index}`}
                          className="w-[28vw] rounded-lg"
                          style={{ marginBottom: "7px" }}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-[13%] bg-gradient-to-b from-neutral-950 via-transparent to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center pt-[10vh] flex-1  
                                ${isForgotPassword ? "pt-40" : ""} `}
          >
            <div className="flex justify-center text-center items-center leading-tight flex-col px-[12.5vw] pt-[10vh] mb-[7vh] font-extrabold text-3xl text-neutral-200">
              Your Personal Growth and Success Matters To Us
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-bold "
                >
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
              <div className="flex flex-col items-center pt-16">
                <button
                  type="submit"
                  className="w-[12rem] py-2.5 text-base font-bold text-black bg-purple-900 rounded-xl hover:scale-105"
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
                    <div className="mt-2 text-[0.8rem] text-red-500">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-row h-screen bg-black rounded-lg">
          <div
            className={`flex flex-col items-center pt-[10vh] flex-1  
                                ${isForgotPassword ? "pt-40" : ""} `}
          >
            <div className="flex justify-center text-center items-center leading-tight flex-col px-[12.5vw] pt-[10vh] mb-[7vh] font-extrabold text-3xl text-neutral-200">
              Your Personal Growth and Success Matters To Us
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-bold "
                >
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
              <div className="flex flex-col items-center pt-16">
                <button
                  type="submit"
                  className="w-[12rem] py-2.5 text-base font-bold text-black bg-purple-900 rounded-xl hover:scale-105"
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
                    <div className="mt-2 text-[0.8rem] text-red-500">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginSection.propTypes = {
  setUserEmail: PropTypes.func,
  setUser: PropTypes.func,
  setIsLoggedIn: PropTypes.func.isRequired,
};
