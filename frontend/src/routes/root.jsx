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
  const [isMissionSticky, setIsMissionSticky] = useState(false); // State for sticky LandingPageMission

  useEffect(() => {
    const handleScroll = () => {
      const summaryHeight =
        document.getElementById("landingPageSummary").offsetHeight;
      const missionHeight =
        document.getElementById("landingPageMission").offsetHeight;

      if (
        window.scrollY > summaryHeight &&
        window.scrollY < summaryHeight + missionHeight
      ) {
        setIsMissionSticky(true);
      } else {
        setIsMissionSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {/* <TableOfContents /> */}

      <CourseCarousel />
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
