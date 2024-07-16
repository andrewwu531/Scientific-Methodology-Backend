import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import CourseCarousel from "../components/CourseCarousel";
import LoginSection from "../components/LoginSection";
import LandingPageSummary from "../components/LandingPageSummary";
import CoursesSection from "../components/CoursesSection";
import TableOfContents from "../components/TableOfContents";
import LandingPageMission from "../components/LandingPageMission";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/Accordion/MuscleBuildingTab";

export default function Root() {
  const [showLogin, setShowLogin] = useState(false); // State for showing login section
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user login status
  const [currentCategory, setCurrentCategory] = useState("Trending Now"); // State for current category

  return (
    <div className="flex flex-col bg-black">
      <div className="fixed top-0 z-50 w-full">
        <NavBar
          setShowLogin={setShowLogin}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>

      <LandingPageSummary />
      <LandingPageMission />

      <CourseCarousel
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <FAQ />
      <Footer />

      {showLogin && (
        <LoginSection
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
}
