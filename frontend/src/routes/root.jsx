import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import CourseCarousel1 from "../components/CourseCarousel1";
import LoginSection from "../components/LoginSection";
import LandingPageSummary from "../components/LandingPageSummary";
import CoursesSection from "../components/CoursesSection";
import LandingPageMission from "../components/LandingPageMission";

export default function Root() {
  const [showLogin, setShowLogin] = useState(false); // State for showing login section
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user login status

  return (
    <div className="flex flex-col bg-black">
      <NavBar
        setShowLogin={setShowLogin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <LandingPageSummary />

      <LandingPageMission />

      <CoursesSection />

      {/* <CourseCarousel1 isLoggedIn={isLoggedIn} /> */}

      {showLogin && (
        <LoginSection
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
}
