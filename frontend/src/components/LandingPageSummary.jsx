import React, { useEffect, useRef, useState } from "react";
import landingImage from "../static/images/landing_bg.png";

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
    <div className="flex pt-[12vh] px-[15vw] h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute top-52 z-20 w-[70vw] h-[100vh] bg-center bg-cover"
        style={{
          backgroundImage: `url(${landingImage})`,
          transform: "scale(0.5)",
          transformOrigin: "top left",
          left: "-16vw",
        }}
      ></div>
      <div className="flex flex-row">
        <div className="flex flex-col pt-[10vh] w-[30vw] pl-10">
          <div className="z-40 w-3/4 pb-5 text-5xl font-bold text-neutral-200">
            Expert-Led Programmes Designed to Beat Traditional Learning
          </div>
          <div className="z-40 w-3/4 text-xl mt-[4vh] text-neutral-300">
            Invest In Your Personal Growth Through Our Network of World-Class
            Mentors
          </div>
          <button className="mt-[6vh] w-[12vw] px-6 py-3 text-md font-bold text-black bg-yellow-500 rounded-lg hover:scale-105">
            Explore Library
          </button>
        </div>

        <div className="z-10 w-[40vw] h-full overflow-hidden">
          <div className="relative w-full h-full">
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
                        className="w-[28vw] rounded-lg"
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
                        className="w-[28vw] rounded-lg"
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
      </div>
    </div>
  );
}
