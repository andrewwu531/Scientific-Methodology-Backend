import React, { useEffect, useRef, useState } from "react";

export default function LandingPageSummary() {
  const [courseBanners, setCourseBanners] = useState([]);
  const containerRef = useRef(null);
  const backendURL = "http://localhost:8000";

  useEffect(() => {
    fetch(`${backendURL}/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        const banners = data.map((course) => course.course_banner);
        setCourseBanners(banners);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let pos = 0;
    const speedLeft = 0.8;
    const speedRight = 1.5;

    const moveContainer = () => {
      const leftColumn = container.querySelector(".left-column");
      const rightColumn = container.querySelector(".right-column");

      if (pos > leftColumn.scrollHeight / 2) {
        pos = 0;
      }
      pos += 1;

      leftColumn.style.transform = `translateY(-${pos * speedLeft}px)`;
      rightColumn.style.transform = `translateY(-${pos * speedRight}px)`;

      requestAnimationFrame(moveContainer);
    };

    moveContainer();
  }, [courseBanners]);

  const firstColumnBanners = courseBanners.slice(0, 5);
  const secondColumnBanners = courseBanners.slice(5, 10);

  return (
    <div className="flex pt-[12vh] px-[10vw] h-screen">
      <div className="flex flex-col pt-[10vh]">
        <div className="w-3/4 text-6xl font-bold">
          Expert-Led Programmes Designed to Beat Traditional Learning
        </div>
        <div className="w-3/4 text-xl mt-[5vh]">
          Invest In Your Personal Growth Through Our Network of World-Class
          Mentors
        </div>
        <button className="mt-[6vh] w-[13vw] px-6 py-3.5 text-md font-bold text-black bg-orange-600 rounded-lg hover:scale-105">
          Explore Library
        </button>
      </div>

      <div className="relative w-[120vw] overflow-hidden h-[80vh]">
        {/* Scrolling Content */}
        <div
          ref={containerRef}
          className="absolute flex flex-col space-x-5 animate-scroll"
          style={{ transform: "translateY(0px)" }}
        >
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-4 left-column">
              {firstColumnBanners
                .concat(firstColumnBanners)
                .map((banner, index) => (
                  <img
                    key={index}
                    src={`${backendURL}${banner}`}
                    alt={`Course Banner ${index}`}
                    className="w-[30vw] rounded-lg"
                    style={{ marginBottom: "7px" }}
                  />
                ))}
            </div>
            <div className="flex flex-col space-y-4 right-column">
              {secondColumnBanners
                .concat(secondColumnBanners)
                .map((banner, index) => (
                  <img
                    key={index}
                    src={`${backendURL}${banner}`}
                    alt={`Course Banner ${index}`}
                    className="w-[30vw] rounded-lg"
                    style={{ marginBottom: "7px" }}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-neutral-950 via-transparent to-transparent pointer-events-none z-10"></div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}
