import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import FlatButton from "./Buttons/FlatButton";
import RegisterButton from "./Buttons/RegisterButton";
import { routes } from "../shared/routes";
import axios from "axios";
import NavbarDropdown from "./NavbarDropDown";

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
    <nav className=" flex justify-between h-[10vh] fixed top-0 left-0 z-50 w-full bg-black shadow-lg">
      <div className="flex flex-row justify-start pt-4">
        <div className="flex flex-col pt-1 text-3xl font-bold pl-36 text-neutral-200">
          Mentorship
        </div>
        <div className="pl-8">
          <NavbarDropdown />
        </div>
      </div>

      <ul role="menu" className="flex items-center gap-6 pr-24">
        {/* <li>
          <FlatButton
            className={`text-base font-bold text-neutral-300 hover:text-white hover:scal-105
                                  ${isLoggedIn ? "pt-0.5" : "gap-1"}`}
          >
            {isLoggedIn ? "Member Zone" : "Try for Free"}
          </FlatButton>
        </li> */}
        <li>
          {isLoggedIn ? (
            <>
              <button
                onClick={handleSignOut}
                className="justify-center px-6 py-2.5 text-base font-bold  rounded-lg hover:scale-105
                          text-black bg-yellow-400"
              >
                Account Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleClick}
              className=" mt-2 w-[12vw] px-6 py-3 text-md font-bold  text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black"
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
