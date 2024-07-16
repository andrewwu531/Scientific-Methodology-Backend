import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CourseCarousel() {
  const categories = [
    { name: "Trending Now", icon: "⭐" },
    { name: "Academic Excellence", icon: "🎓" },
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

  const [courses, setCourses] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Trending Now");

  const backendURL = "http://localhost:8000";

  useEffect(() => {
    fetch(`${backendURL}/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    // Fetch courses based on selected category
  };

  return (
    <div>
      <div className="flex flex-col w-full overflow-hidden mt-[4vh] bg-black relative px-[11vw]">
        <div className="flex flex-wrap justify-center gap-3 mb-9">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex items-center py-3.5 rounded-xl px-10 text-neutral-200 hover:bg-neutral-800 ${
                currentCategory === category.name
                  ? "bg-purple-900"
                  : "bg-neutral-950"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-row ml-[8vw] space-x-4">
        {/* <div className="mt-1 text-2xl">⭐</div> */}
        <div className="text-4xl mb-[5vh] font-bold"> Trending Now</div>
      </div>
      <div className="grid grid-cols-3 px-[10vw] gap-x-5 gap-y-10 mb-24">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="flex flex-col w-full h-[58vh] relative course-card overflow-hidden group"
            >
              <div className="relative w-full h-full mb-4 overflow-hidden rounded-md">
                <img
                  src={`${backendURL}/${course.course_banner}`}
                  alt={course.course_title}
                  className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-100 bg-gradient-to-b from-transparent via-transparent to-black"></div>
              </div>

              <div className="flex flex-col">
                <div className="pl-[1vw] flex justify-start bottom-0 w-full h-[12vh] mt-[2vh] text-neutral-200 text-lg font-bold ">
                  {course.course_title}
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-full pl-[1vw] text-neutral-100 font-bold ">
                    {course.course_author}
                  </div>
                  <button className="py-2 mx-2 mr-6 text-xl text-black bg-purple-900 rounded-full px-9 hover:bg-blue-800">
                    ▶
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
