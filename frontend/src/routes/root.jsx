import { useState } from "react";
import LandingPageSummary from "../components/LandingPageSummary";
import CourseCarousel from "../components/CourseCarousel";
import LandingPageMission from "../components/LandingPageMission";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/Accordion/MuscleBuildingTab";

export default function Root() {
  const [currentCategory, setCurrentCategory] = useState("Trending Now");

  return (
    <div>
      <LandingPageSummary />
      <LandingPageMission />
      <CourseCarousel
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <FAQ />
      <Footer />
    </div>
  );
}
