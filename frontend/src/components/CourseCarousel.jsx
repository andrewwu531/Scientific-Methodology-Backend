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
    <div className="flex flex-col w-full overflow-hidden mt-[3vh] bg-black pt-2 mb-10 relative px-[7vw]">
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((category) => (
          <button
            key={category.name}
            className="flex items-center px-4 py-2 rounded-lg bg-neutral-950 text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-1 focus:ring-orange-600"
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
      <div className="mb-6 font-sans text-4xl">Trending Now</div>
      <div className="grid grid-cols-1 px-[2vw] gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="w-full h-[52vh] relative course-card overflow-hidden group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg ">
                <img
                  src={`${backendURL}/${course.course_banner}`}
                  alt={course.course_title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-100 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                {/* <div className="absolute top-0 left-0 w-full h-full bg-opacity-100 bg-gradient-to-t from-transparent via-transparent to-black"></div> */}
                {/* <div className="absolute bottom-0 w-full transition-opacity duration-300 opacity-0 h-1/2 bg-gradient-to-t from-black to-transparent group-hover:opacity-100">
                  <div className="p-4 text-white">{course.additional_text}</div>
                </div> */}
              </div>
              {/* <div
                className="absolute w-full pt-32 text-4xl text-center text-white transform translate-y-1/2 px-7 bottom-1/2"
                style={{
                  fontFamily: font.family,
                  fontSize: font.size,
                  fontWeight: font.weight,
                }}
              >
                {course.course_author}
              </div> */}
              {/* <div className="absolute bottom-1/2 w-full h-0.5 bg-white"></div> */}
              <div className="absolute bottom-0 w-full h-[10.5vh] mb-3 text-center text-neutral-200 text-base font-bold ">
                {course.course_title}
              </div>
              {/* <div className="absolute bottom-0 w-full h-[5vh] mb-3 text-center text-white font-bold px-5">
                {course.course_author}
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCarousel;
