import React, { useEffect, useRef, useState } from "react";
import landingImage0 from "../static/images/landing0.jpg";
import landingImage1 from "../static/images/landing1.jpg";
import landingImage2 from "../static/images/landing2.jpg";
import landingImage3 from "../static/images/landing3.jpg";
import landingImage4 from "../static/images/landing4.jpg";
import landingImage5 from "../static/images/landing5.jpg";
import landingImage6 from "../static/images/landing6.jpg";
import landingImage7 from "../static/images/landing7.jpg";
import landingImage8 from "../static/images/landing8.jpg";
import landingImage9 from "../static/images/landing9.jpg";
import landingImage10 from "../static/images/landing10.jpg";
import landingImage11 from "../static/images/landing11.jpg";
import logo from "../static/images/logo111.jpg";

export default function LandingPageSummary() {
  const [courseBanners, setCourseBanners] = useState([]);
  const containerRef = useRef(null);

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
    const banners = [
      landingImage0,
      landingImage1,
      landingImage2,
      landingImage3,
      landingImage4,
      landingImage5,
      landingImage6,
      landingImage7,
      landingImage8,
      landingImage9,
      landingImage10,
      landingImage11,
    ];
    setCourseBanners(banners);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let pos = 0;
    const speedLeft = 1;
    const speedRight = 1.7;

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

  const firstColumnBanners = courseBanners.slice(0, 6);
  const secondColumnBanners = courseBanners.slice(6, 12);

  return (
    <div className="flex px-[6vw] h-screen bg-black">
      <div className="flex flex-row">
        <div className="flex flex-col pt-[10.5vh] w-[46vw]">
          <div className="z-40 text-5xl font-bold mt-[3vh] text-neutral-200 w-4/5">
            Top-Performing Outcome with Top-Performing Mentors
          </div>
          <div className="grid grid-cols-2 mt-[4.5vh] gap-y-2 gap-x-2 mr-[4vw]">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center text-md justify-start w-full h-[9vh] pl-4 rounded-xl bg-neutral-950 text-neutral-200 "
              >
                <span className="mr-3">{category.icon}</span>
                <div className="text-md">{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="z-10 w-[40vw] h-[90vh] overflow-hidden mt-20">
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
                        src={banner}
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
                        src={banner}
                        alt={`Course Banner ${index}`}
                        className="w-[28vw] rounded-lg"
                        style={{ marginBottom: "7px" }}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Top Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-[13%] bg-gradient-to-b from-neutral-950 via-transparent to-transparent pointer-events-none z-10"></div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
