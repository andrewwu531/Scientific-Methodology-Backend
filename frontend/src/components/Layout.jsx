import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout({ setShowLogin, isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="flex flex-col bg-black">
      <div className="fixed top-0 z-50 w-full">
        <NavBar
          setShowLogin={setShowLogin}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
      <Outlet />
    </div>
  );
}
