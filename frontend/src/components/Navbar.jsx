import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import logo from "../static/images/logo111.jpg";

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courses, setCourses] = useState([]);
  const [submenuTop, setSubmenuTop] = useState(0);
  const categoryRefs = useRef([]);

  const backendURL = "http://localhost:8000";

  // Map category names to numbers and vice versa
  const categoryMap = {
    "Academic Excellence": "1",
    "English Language": "2",
    "Business English": "3",
    "General Knowledge": "4",
    "Professional Knowledge": "5",
    Sports: "6",
    "Health & Wellness": "7",
    "Food & Drink": "8",
    "Hair, Beauty & Fashion": "9",
    "CV & Interview Techniques": "10",
    "Entrepreneurship & Investing": "11",
  };

  const reverseCategoryMap = Object.entries(categoryMap).reduce(
    (acc, [key, value]) => ({ ...acc, [value]: key }),
    {}
  );

  const categories = [
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

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/logout/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        setIsLoggedIn(false);
        localStorage.removeItem("userEmail");
        navigate("/"); // Redirect to home or login page
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("An error occurred during sign out:", error);
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(categoryMap[category]);
    setSubmenuTop(categoryRefs.current[index].offsetTop);
  };

  const handleCourseClick = (course) => {
    navigate(`/${course.course_url}`);
  };

  const filteredCourses = courses.filter(
    (course) => course.course_category === selectedCategory
  );

  return (
    <nav className="flex justify-between items-center h-[10vh] left-0 w-full bg-black shadow-lg px-8">
      <div
        className="flex items-center justify-start mt-2.5 space-x-1 cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src={logo} alt="logo" className="w-10 h-10 mr-2.5" />
        <div className="flex flex-col leading-tight text-md">
          <div>Growth</div>
          <div>Engineering</div>
        </div>
      </div>
      <div className="flex items-center mt-1 space-x-4">
        <NavbarDropdown />
        <ul role="menu" className="relative flex items-center gap-6">
          <li className="relative">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="relative mt-1 w-[12vw] px-6 py-3 text-md font-bold text-neutral-300 bg-black rounded-lg overflow-hidden"
            >
              <span className="relative z-10">Explore</span>
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "linear-gradient(to right, #FDE68A, #60A5FA)", // Smooth gradient from yellow-300 to blue-400
                }}
              ></div>
              <div className="absolute inset-0 bg-black rounded-lg m-[1px]"></div>
            </button>
            {showCategories && (
              <div className="absolute bg-black text-white mt-3 py-3 px-1 rounded-lg shadow-lg w-[22vw] -left-[10vw]">
                <ul>
                  {categories.map((category, index) => (
                    <li
                      key={category.name}
                      ref={(el) => (categoryRefs.current[index] = el)}
                      onClick={() => handleCategoryClick(category.name, index)}
                      className="flex items-center px-5 py-2.5 cursor-pointer hover:bg-neutral-900 hover:rounded-lg"
                    >
                      <span className="mr-3.5">{category.icon}</span>
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedCategory && (
              <div
                className="absolute bg-black text-white mt-3 mr-5 rounded-md shadow-lg w-[22vw] -left-[32vw]"
                style={{ top: submenuTop }}
              >
                <ul>
                  {filteredCourses.map((course) => (
                    <li
                      key={course.course_url}
                      onClick={() => handleCourseClick(course)}
                      className="flex flex-col items-center px-4 py-2 cursor-pointer hover:rounded-lg hover:bg-neutral-900"
                    >
                      <div className="flex flex-row m-2">
                        <img
                          src={`${backendURL}/${course.course_banner}`}
                          alt={course.course_title}
                          className="object-cover w-10 h-10 mt-2 mr-6 rounded"
                        />
                        <div>
                          <div className="w-[13vw] text-sm font-bold text-gray-400">
                            {course.course_title}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleSignOut}
                className="relative mt-1 w-[12vw] px-6 py-3 text-md font-bold text-neutral-300 bg-black rounded-lg overflow-hidden"
              >
                <span className="relative z-10">Account Signout</span>
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(to right, #FDE68A, #60A5FA)", // Smooth gradient from yellow-300 to blue-400
                  }}
                ></div>
                <div className="absolute inset-0 bg-black rounded-lg m-[1px]"></div>
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={handleClick}
                className="relative mt-1 w-[12vw] px-6 py-3 text-md font-bold text-neutral-300 bg-black rounded-lg overflow-hidden"
              >
                <span className="relative z-10">Register/ Log In</span>
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "linear-gradient(to right, #FDE68A, #60A5FA)", // Smooth gradient from yellow-300 to blue-400
                  }}
                ></div>
                <div className="absolute inset-0 bg-black rounded-lg m-[1px]"></div>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
