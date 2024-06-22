import PropTypes from "prop-types";
import FlatButton from "./Buttons/FlatButton";
import RegisterButton from "./Buttons/RegisterButton";
import { routes } from "../shared/routes";

export default function Navbar({ setShowLogin, isLoggedIn }) {
  const handleClick = () => {
    setShowLogin(true);
  };

  return (
    <nav className="bg-black flex justify-between px-8 pt-1.5 h-[10vh]">
      <div className="flex flex-row justify-start">
        <div className="flex flex-col gap-2 pt-4 text-3xl font-bold ">M</div>
        <div className="flex gap-2 pl-12 text-sm font-bold pt-9 text-neutral-300">
          | &nbsp; Academics &nbsp; | &nbsp; Language &nbsp; | &nbsp; Lifestyle
          &nbsp; | &nbsp; Career &nbsp; | &nbsp; Personal Development &nbsp; |
        </div>
      </div>

      <ul role="menu" className="flex items-center gap-7">
        <li>
          <FlatButton
            href="#"
            className="text-base font-bold text-neutral-300 hover:text-white hover:scale-105"
          >
            Try for Free
          </FlatButton>
        </li>
        <li>
          {isLoggedIn ? (
            <RegisterButton href={routes.PROFILE} className="px-6 py-3">
              My Profile
            </RegisterButton>
          ) : (
            <button
              onClick={handleClick}
              className="justify-center px-6 py-3 text-base font-bold text-black bg-yellow-400 rounded-lg hover:scale-105"
            >
              Register/ Log In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
