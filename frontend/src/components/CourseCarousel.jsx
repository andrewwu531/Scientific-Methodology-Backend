import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseCarousel = () => {
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const backendURL = "http://localhost:8000";

  const fonts = [
    "'Playfair Display', serif",
    "'Montserrat', sans-serif",
    "'Roboto Slab', serif",
    "'Open Sans', sans-serif",
    "'Lato', sans-serif",
    "'Merriweather', serif",
    "'Oswald', sans-serif",
    "'Source Sans Pro', sans-serif",
    "'Raleway', sans-serif",
    "'Nunito', sans-serif",
    "'PT Serif', serif",
    "'Quicksand', sans-serif",
    "'Crimson Text', serif",
    "'Roboto', sans-serif",
    "'Poppins', sans-serif",
    "'Arimo', sans-serif",
    "'Ubuntu', sans-serif",
    "'Karla', sans-serif",
    "'Droid Serif', serif",
    "'Cabin', sans-serif",
  ];

  useEffect(() => {
    fetch(`${backendURL}/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  const totalCardsToShow = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(courses.length / totalCardsToShow) - 1;
      return Math.min(prevIndex + 1, maxIndex);
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const getTransformValue = () => {
    const maxIndex = Math.ceil(courses.length / totalCardsToShow) - 1;
    const currentSetIndex = Math.min(currentIndex, maxIndex);
    return currentSetIndex * (100 / totalCardsToShow) * totalCardsToShow;
  };

  return (
    <div className="flex flex-col w-full overflow-hidden mt-[20vh] bg-black px-10 mb-80 relative">
      <div
        className="flex justify-end mb-4 mr-5 space-x-2"
        style={{ zIndex: 10 }}
      >
        <button
          onClick={prevSlide}
          className="p-2 text-white bg-gray-800 rounded"
        >
          {"<"}
        </button>

        <button
          onClick={nextSlide}
          className="p-2 text-white bg-gray-800 rounded"
        >
          {">"}
        </button>
      </div>

      <div
        className="flex transition-transform duration-[1.5s] ease-in-out gap-x-4"
        style={{ transform: `translateX(-${getTransformValue()}%)` }}
      >
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="w-1/5 h-[56vh] relative flex-shrink-0 course-card overflow-hidden"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src={`${backendURL}/${course.course_banner}`}
                alt={course.course_title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div
              className="absolute w-full text-4xl font-bold text-center text-white transform translate-y-1/2 bottom-1/2"
              style={{ fontFamily: fonts[index % fonts.length] }}
            >
              {course.course_author}
              {console.log(
                `Index: ${index}, Font Family: ${fonts[index % fonts.length]}`
              )}
            </div>
            <div className="absolute bottom-0 w-full h-[10vh] p-2 pt-4 text-center text-white bg-black bg-opacity-75">
              {course.course_title}
            </div>
          </div>
        ))}
      </div>

      <button className="self-center px-6 py-3 font-bold text-black rounded-lg mt-14 bg-btn-1 text-md hover:scale-105">
        Explore All Programmes
      </button>
    </div>
  );
};

export default CourseCarousel;
