import React, { useState } from "react";
import LandingPageSummary from "../components/LandingPageSummary";
import CourseCarousel from "../components/CourseCarousel";
import LandingPageMission from "../components/LandingPageMission";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ";

export default function Root() {
  return (
    <div>
      <LandingPageSummary />
      <LandingPageMission />
      <CourseCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}
