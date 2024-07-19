import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="flex flex-col bg-black">
      <div className="fixed top-0 z-50 w-full">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Outlet />
    </div>
  );
}

Layout.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
