import React from "react";
import PropTypes from "prop-types";
import SectionContainer from "./SectionContainer";
import VerticalCard from "./Cards/VerticalCard";
import SecondaryButton from "./Buttons/SecondaryButton";
import FlatButton from "./Buttons/FlatButton";

const categories = [
  {
    title: "Academics & Language Learning",
    items: [
      {
        text: "University 1st Class Honour Guide",
        course_url: "uni_guide",
        border: true,
      },
      {
        text: "High School Past Paper Q&A",
        course_url: "uni_pp",
        border: true,
      },
      {
        text: "Sample Topic Essays",
        course_url: "topic_essays",
        border: false,
      },
      {
        text: "English Pronunciation",
        course_url: "english_pronunciation",
        border: true,
      },
      {
        text: "Accents & Speech Delivery",
        course_url: "accents",
        border: false,
      },
      {
        text: "Business English",
        course_url: "business_english",
        border: false,
      },
      {
        text: "Storytelling Principles",
        course_url: "storytelling",
        border: false,
      },
      { text: "Comedy Writing", course_url: "comedy_writing", border: false },
    ],
  },
  {
    title: "Health & Lifestyle",
    items: [
      { text: "Muscle Building", course_url: "muscle_building", border: true },
      { text: "Weight Loss", course_url: "weight_loss", border: true },
      { text: "Fashion", course_url: "fashion", border: false },
      { text: "Meal Recipes", course_url: "meal_recipes", border: false },
      { text: "Social Skills", course_url: "social_skills", border: false },
      { text: "Makeup", course_url: "makeup", border: false },
      { text: "Hairstyles", course_url: "hairstyles", border: false },
      { text: "Psychology", course_url: "psychology", border: false },
    ],
  },
  {
    title: "Social & Entertainment",
    items: [
      { text: "Movies & TV Shows", course_url: "movies_tv", border: true },
      { text: "Travel Journals", course_url: "travel", border: true },
      { text: "Football", course_url: "football", border: true },
      { text: "Basketball", course_url: "basketball", border: false },
      { text: "Martial Art", course_url: "martial_arts", border: false },
      { text: "Pets", course_url: "pets", border: false },
      {
        text: "Cars & Driving Licence Test",
        course_url: "cars_driving",
        border: false,
      },
    ],
  },
  {
    title: "Career & Finance",
    items: [
      {
        text: "Sample CVs & Cover Letters",
        course_url: "sample_cvs",
        border: true,
      },
      {
        text: "Job Searching Guide",
        course_url: "job_searching",
        border: true,
      },
      {
        text: "Interview Techniques",
        course_url: "interview_techniques",
        border: true,
      },
      { text: "Dress Codes", course_url: "dress_codes", border: false },
      {
        text: "Investing - Stocks & Crypto",
        course_url: "stocks_crypto",
        border: false,
      },
      {
        text: "Investing - Real Estates",
        course_url: "real_estates",
        border: false,
      },
      { text: "Tech Knowledge", course_url: "tech_knowledge", border: false },
    ],
  },
];

function SideLibrary({ onCourseSelect }) {
  const handleCourseSelect = (course_url) => {
    console.log("Course selected:", course_url); // Log the course_url
    onCourseSelect(course_url);
  };

  return (
    <div>
      <SectionContainer>
        <div className="flex flex-col overflow-auto h-[70vh] scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
          <VerticalCard className="flex flex-col items-start gap-3 p-3.5 pb-5 rounded-lg bg-black-1">
            {categories.map((category) => (
              <div key={category.title}>
                <p className="pt-2 pb-3 pl-2 text-base font-bold text-white">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2.5 mb-3">
                  {category.items.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`px-4 py-2 pt-2.5 text-tiny text-neutral-100 text-sans font-regular 
                        text-sm bg-zinc-800 text-black justify-center hover:scale-105
                        ${item.border ? "border-2 border-yellow-400" : ""}`}
                      onClick={() => handleCourseSelect(item.course_url)}
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pb-3"></div>
          </VerticalCard>
        </div>
        <div className="bg-neutral-900 flex flex-col items-start justify-center px-5 h-[9vh]">
          <ul className="flex flex-wrap text-[0.9rem] text-neutral-400 gap-3">
            {["About", "Customer Support", "Legal", "Privacy"].map((item) => (
              <li key={item}>
                <FlatButton href="#">{item}</FlatButton>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </div>
  );
}

SideLibrary.propTypes = {
  onCourseSelect: PropTypes.func.isRequired,
};

export default SideLibrary;
