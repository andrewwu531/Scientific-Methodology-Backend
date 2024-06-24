import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FlatButton from "./Buttons/FlatButton";
import RegisterButton from "./Buttons/RegisterButton";
import { routes } from "../shared/routes";
import axios from "axios";

export default function NavBar({ setShowLogin, isLoggedIn, setIsLoggedIn }) {
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

  return (
    <nav className="bg-neutral-950 flex justify-between px-8 pt-2.5 h-[10vh]">
      <div className="flex flex-row justify-start">
        <div className="flex flex-col pt-4 pl-3 text-3xl font-bold">WAVE-R</div>
        <div className="flex gap-2 pl-10 text-sm font-bold pt-9 text-neutral-300">
          | &nbsp; Academics &nbsp; | &nbsp; Language &nbsp; | &nbsp; Lifestyle
          &nbsp; | &nbsp; Career &nbsp; | &nbsp; Personal Development &nbsp; |
        </div>
      </div>

      <ul role="menu" className="flex items-center pt-1 gap-7">
        <li>
          <FlatButton
            href="#"
            className={`text-base font-bold ${isLoggedIn ? "text-transparent" : "text-neutral-300"} hover:text-white hover:scale-105`}
          >
            {isLoggedIn ? "" : "Try for Free"}
          </FlatButton>
        </li>
        <li>
          {isLoggedIn ? (
            <>
              <button
                onClick={handleSignOut}
                className="justify-center px-6 py-2.5 text-base font-bold text-black bg-yellow-400 rounded-lg hover:scale-105"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={handleClick}
              className="justify-center px-6 py-2.5 text-base font-bold text-black bg-yellow-400 rounded-lg hover:scale-105"
            >
              Register/ Log In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
