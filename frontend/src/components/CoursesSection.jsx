import React, { useState, useEffect } from "react";

const categories = [
  { name: "Academics", icon: "🎓" },
  { name: "English Language", icon: "📚" },
  { name: "Business English", icon: "📝" },
  { name: "General Knowledge", icon: "🎬" },
  { name: "Professional Knowledge", icon: "🔬" },
  { name: "Sports", icon: "🏅" },
  { name: "Health & Wellness", icon: "😊" },
  { name: "Food & Drink", icon: "🍽️" },
  { name: "Hair, Beauty & Fashion", icon: "🕶️" },
  { name: "CV & Interview Techniques", icon: "🏛️" },
  { name: "Entrepreneurship & Investing", icon: "💼" },
];

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);

  const backendURL = "http://localhost:8000";

  useEffect(() => {
    fetch(`${backendURL}/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  return (
    <div className="flex mt-[5vh] mx-[10vw]">
      <div className="text-white bg-black ">
        <h2 className="mt-4 font-sans text-lg font-bold text-yellow-400">
          All Programmes
        </h2>
        <ul className="mt-2 font-sans text-lg font-bold text-neutral-200">
          {categories.map((category) => (
            <li key={category.name} className="mt-3">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4 ml-[3vw]">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="w-[19vw] h-[70vh] relative course-card overflow-hidden group "
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img
                  src={`${backendURL}/static${course.course_banner}`}
                  alt={course.course_title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-xl"
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-opacity-100 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesSection;
