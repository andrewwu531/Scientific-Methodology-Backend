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

  useEffect(() => {
    fetch(`${backendURL}/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden mt-[10vh] bg-black mb-80 relative px-[12vw]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course, index) => {
          const font = fonts[index % fonts.length];
          return (
            <div
              key={course.id}
              className="w-full h-[56vh] relative course-card overflow-hidden group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={`${backendURL}/${course.course_banner}`}
                  alt={course.course_title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-100 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                {/* <div className="absolute bottom-0 w-full transition-opacity duration-300 opacity-0 h-1/2 bg-gradient-to-t from-black to-transparent group-hover:opacity-100">
                  <div className="p-4 text-white">{course.additional_text}</div>
                </div> */}
              </div>
              <div
                className="absolute w-full pt-32 text-4xl text-center text-white transform translate-y-1/2 px-7 bottom-1/2"
                style={{
                  fontFamily: font.family,
                  fontSize: font.size,
                  fontWeight: font.weight,
                }}
              >
                {course.course_author}
              </div>
              {/* <div className="absolute bottom-1/2 w-full h-0.5 bg-white"></div> */}
              <div className="absolute bottom-0 w-full h-[10vh] mb-3 text-center text-white font-bold px-5">
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
