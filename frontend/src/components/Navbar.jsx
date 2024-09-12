import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import { FiChevronDown } from "react-icons/fi";
import logo from "../static/images/logo111.jpg";

export default function Navbar({
  setUser,
  setUserEmail,
  isLoggedIn,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courses, setCourses] = useState([]);
  const [submenuTop, setSubmenuTop] = useState(0);
  const categoryRefs = useRef([]);
  const dropdownRef = useRef(null);

  const backendURL = "http://localhost:8000";

  const categoryMap = {
    "Academic Excellence": "1",
    "English Language": "2",
    "Business English": "3",
    "General Knowledge": "4",
    "Professional Knowledge": "5",
    Sports: "6",
    "Psychology & Wellness": "7",
    "Food & Drink": "8",
    "Hair, Beauty & Fashion": "9",
    "CV & Interview Techniques": "10",
    "Entrepreneurship & Investing": "11",
  };

  const categories = [
    { name: "Academic Excellence", icon: "🎓" },
    { name: "English Language", icon: "📚" },
    { name: "Business English", icon: "📝" },
    { name: "General Knowledge", icon: "🎬" },
    { name: "Professional Knowledge", icon: "🔬" },
    { name: "Sports", icon: "🏅" },
    { name: "Psychology & Mindset", icon: "😊" },
    { name: "Food & Drink", icon: "🍽️" },
    { name: "Hair, Beauty & Fashion", icon: "🕶️" },
    { name: "CV & Interview Techniques", icon: "🏛️" },
    { name: "Entrepreneurship & Investing", icon: "💼" },
  ];

  useEffect(() => {
    axios
      .get("https://backend.scientific-methodology.com/api/courses/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleSignOut = async () => {
    try {
      const response = await axios.post(
        "https://backend.scientific-methodology.com/api/logout/",
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
        setUser(null);
        setUserEmail(null);
        console.log("Logged Out/ Register Successfully", setUserEmail);
        console.log("Logged Out/ Register Successfully", setUser);
        navigate("/");
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
    setShowCategories(false);
    setSelectedCategory(null);
    navigate(`/${course.course_url}`);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowCategories(false);
      setSelectedCategory(null);
    }
  };

  useEffect(() => {
    if (showCategories || selectedCategory) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showCategories, selectedCategory]);

  const filteredCourses = courses.filter(
    (course) => course.course_category === selectedCategory
  );

  const categoryIndex = categories.findIndex(
    (cat) => categoryMap[cat.name] === selectedCategory
  );

  return (
    <nav className="flex justify-between items-center h-[7vh] md:h-[11vh] left-0 w-full bg-black shadow-lg px-4 md:pl-8 md:pr-11">
      <div
        className="flex items-center justify-start mt-2.5 space-x-1 cursor-pointer"
        onClick={handleLogoClick}
      >
        <img src={logo} alt="logo" className="w-10 h-10 mr-1 md:mr-2.5" />
        <div className="flex flex-col text-sm leading-tight md:text-medium">
          <div>Scientific</div>
          <div>Methodology</div>
        </div>
      </div>
      <div className="flex items-center mt-1">
        <ul role="menu" className="relative flex items-center gap-3">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="relative hidden py-3 mt-1 overflow-hidden font-bold bg-black rounded-lg md:block px-7 text-md text-neutral-300"
            >
              <span className="relative z-10 flex items-center md:pl-2 ">
                Explore <FiChevronDown className="ml-1 text-xl font-bold " />
              </span>
              <div className="absolute inset-0 border rounded-lg border-neutral-100"></div>
              <div className="absolute inset-0 bg-black rounded-lg m-[1px]"></div>
            </button>
            {showCategories && (
              <div className="absolute bg-black text-neutral-100 mt-3 py-3 px-1 rounded-lg shadow-lg w-[22vw] -left-[10vw]">
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
                className={`absolute bg-black mr-5 rounded-md shadow-lg w-[23vw] -left-[33vw]  ${
                  categoryIndex >= categories.length - 5
                    ? "-mt-[9vh]"
                    : "mt-[9vh]"
                }`}
                style={{ top: submenuTop }}
              >
                <ul>
                  {filteredCourses.map((course) => (
                    <li
                      key={course.course_url}
                      onClick={() => handleCourseClick(course)}
                      className="flex flex-col items-start pl-[1.5vw] justify-start pt-3 pb-2 cursor-pointer hover:rounded-lg hover:bg-neutral-900"
                    >
                      <div className="flex flex-row justify-start m-2">
                        <img
                          src={`${backendURL}/${course.course_banner}`}
                          alt={course.course_title}
                          className="object-cover w-10 h-10 mt-2 mr-4 rounded"
                        />
                        <div>
                          <div className="w-[13vw] text-small text-neutral-100">
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
                className="relative mt-1 md:w-[12vw] w-[32vw] py-2.5 px-2 md:[px-1] md:px-6 md:py-3.5  md:text-base text-sm md:font-bold  text-neutral-300 bg-black rounded-lg overflow-hidden"
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
                className="relative md:mt-1 md:w-[12vw] w-[32vw] py-2.5 px-2 md:[px-1] md:px-6 md:py-3.5  md:text-base text-sm md:font-bold text-neutral-300 bg-black rounded-lg overflow-hidden"
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

Navbar.propTypes = {
  setUser: PropTypes.func,
  setUserEmail: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};
