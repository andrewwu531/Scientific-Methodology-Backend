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
      <div className="grid grid-cols-3 gap-x-4 gap-y-4 ml-[3vw]">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              className="w-full h-[60vh] relative course-card overflow-hidden group bg-neutral-950 rounded-lg shadow-lg"
            >
              <div className="relative w-full overflow-hidden rounded-t-lg h-2/3">
                <img
                  src={`${backendURL}/static${course.course_banner}`}
                  alt={course.course_title}
                  className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between p-4 h-1/3">
                <div>
                  <h3 className="font-bold text-md text-neutral-100">
                    {course.course_title}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <button className="underline text-neutral-200 hover:underline">
                    View Details
                  </button>
                  <div className="flex space-x-2 ">{course.course_author}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesSection;
