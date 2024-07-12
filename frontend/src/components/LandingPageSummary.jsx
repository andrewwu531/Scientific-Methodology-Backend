import React, { useEffect, useRef } from "react";
import landingImage from "../static/images/landing_bg.png";
import landingImage2 from "../static/images/login.png";

export default function LandingPageSummary() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let pos = 0;
    const speed = 1.1;
    const imgHeight = 2000; // Adjust based on the actual height of the image

    const moveContainer = () => {
      if (container) {
        const column = container.querySelector(".column");

        if (column) {
          pos += speed;

          if (pos >= imgHeight) {
            // Reset position to create a seamless loop
            pos = 0;
            column.appendChild(column.firstElementChild);
            column.style.transform = `translateY(0px)`;
          } else {
            column.style.transform = `translateY(-${pos}px)`;
          }
        }

        requestAnimationFrame(moveContainer);
      }
    };

    moveContainer();
  }, []);

  // Create a list of image elements to fill the column
  const images = [];
  for (let i = 0; i < 10; i++) {
    images.push(
      <img
        key={i}
        src={landingImage2}
        alt={`Course Banner ${i}`}
        className="w-[33vw]"
      />
    );
  }

  return (
    <div className="flex pt-[12vh] px-[18vw] h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute top-40 z-20 w-[65vw] h-[100vh] bg-center bg-cover"
        style={{
          backgroundImage: `url(${landingImage})`,
          transform: "scale(0.5)",
          transformOrigin: "top left",
          left: "-13vw",
        }}
      ></div>
      <div className="flex flex-row">
        <div className="flex flex-col pt-[14vh] w-[25vw] ml-12 mr-24">
          <div className="z-40 pb-5 text-5xl font-bold text-neutral-200">
            Expert-Led Programmes Designed to Beat Traditional Learning
          </div>
          <div className="z-40 text-xl mt-[4vh] text-neutral-300">
            Invest In Your Personal Growth Through Our Network of World-Renowned
            Mentors
          </div>
          {/* <button className="mt-[6vh] w-[12vw] px-6 py-3 text-md font-bold text-black bg-yellow-500 rounded-lg hover:scale-105">
            Explore Library
          </button> */}
          {/* <button className="mt-[6vh] w-[12vw] px-6 py-3 text-md font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg hover:scale-105">
            Explore Library
          </button> */}
          <button className="mt-[6vh] w-[12vw] px-6 py-3 text-md font-bold  text-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black">
            Explore Library
          </button>
        </div>

        <div className="z-10 w-[40vw] h-full overflow-hidden">
          <div className="relative w-full h-full">
            <div
              ref={containerRef}
              className="absolute flex flex-col animate-scroll"
              style={{ transform: "translateY(0px)" }}
            >
              <div className="flex flex-col column">{images}</div>
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
