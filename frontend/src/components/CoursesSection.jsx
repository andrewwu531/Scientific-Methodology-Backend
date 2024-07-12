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
    <div className="flex mt-[20vh] ml-[6vw]">
      <div className="w-1/4 p-4 text-white bg-black">
        <h2 className="text-red-500">All</h2>
        <ul className="mt-4 text-xl">
          {categories.map((category) => (
            <li key={category.name} className="mt-3">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
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
