import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseCarousel = () => {
  const [courses, setCourses] = useState([]);

  const backendURL = "http://localhost:8000";

  const fonts = [
    { family: "'Times New Roman', serif", size: "2rem", weight: "bold" },
    { family: "'Montserrat', sans-serif", size: "3rem" },
    { family: "'Roboto Slab', serif", size: "2rem", weight: "bold" },
    { family: "'Open Sans', sans-serif", size: "3rem" },
    { family: "'Lato', sans-serif", size: "2rem", weight: "bold" },
    { family: "'Merriweather', serif", size: "3rem" },
    { family: "'Oswald', sans-serif", size: "2rem", weight: "bold" },
    {
      family: "'Source Sans Pro', sans-serif",
      size: "2rem",
      weight: "bold",
    },
    { family: "'Raleway', sans-serif", size: "2rem", weight: "bold" },
    { family: "'Nunito', sans-serif", size: "3rem" },
    { family: "'PT Serif', serif", size: "2rem", weight: "bold" },
    { family: "'Quicksand', sans-serif", size: "3rem" },
    { family: "'Crimson Text', serif", size: "2rem", weight: "bold" },
    { family: "'Roboto', sans-serif", size: "3rem" },
    { family: "'Poppins', sans-serif", size: "2rem", weight: "bold" },
    { family: "'Arimo', sans-serif", size: "3rem" },
    { family: "'Ubuntu', sans-serif", size: "2rem", weight: "bold" },
    { family: "'Karla', sans-serif", size: "2rem", weight: "bold" },
    { family: "'Droid Serif', serif", size: "2rem", weight: "bold" },
    { family: "'Cabin', sans-serif", size: "3rem" },
  ];

  const categories = [
    { name: "Trending Now", icon: "⭐" },
    { name: "Academic Excellence", icon: "🎓" },
    { name: "English Language Learning", icon: "📚" },
    { name: "Entrepreneurship & Investing", icon: "💼" },
    { name: "Sports & Athletics", icon: "🏅" },
    { name: "Business English", icon: "📝" },
    { name: "Science & Technology", icon: "🔬" },
    { name: "Film & TV", icon: "🎬" },
    { name: "Health & Wellness", icon: "😊" },
    { name: "Community & Government", icon: "🏛️" },
    { name: "Food & Drink", icon: "🍽️" },
    { name: "Music & Culture", icon: "🎵" },
    { name: "Outdoor Adventures & Events", icon: "🏞️" },
    { name: "Acting & Performing Arts", icon: "🎭" },
  ];

  useEffect(() => {
    fetch(`${backendURL}/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  return (
    <div className="flex flex-row w-full overflow-hidden mt-[10vh] bg-black mb-10  px-[8vw]">
      <div className="flex flex-wrap justify-start w-[20vw]">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center justify-center w-full h-[14vh] rounded-lg bg-neutral-950 text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <span className="mr-3">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid pl-[4vw] gap-x-3.5 gap-y-10 grid-cols-3">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="w-[18vw] h-[52vh] relative course-card overflow-hidden group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg ">
                <img
                  src={`${backendURL}/${course.course_banner}`}
                  alt={course.course_title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-100 bg-gradient-to-b from-transparent via-transparent to-black"></div>
              </div>
              <div className="absolute bottom-0 w-full h-[8.5vh] mb-3 text-center text-neutral-200 text-base font-bold ">
                {course.course_title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCarousel;
