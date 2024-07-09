import React, { useEffect, useRef } from "react";

export default function LandingPageSummary() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    let pos = 0;
    const direction = 1;

    const moveImage = () => {
      if (pos > 300) {
        pos = -image.clientHeight;
      }
      pos += direction;
      image.style.top = `${pos}px`;
      requestAnimationFrame(moveImage);
    };

    moveImage();
  }, []);

  return (
    <div className="flex items-center justify-between h-screen px-[10vw] pt-10">
      <div className="flex flex-col">
        <div className="w-1/2 text-6xl font-bold">
          Expert-Led Programmes Designed to Beat Traditional Learning
        </div>
        <div className="w-1/2  text-xl mt-[10vh]">
          Invest In Your Personal Growth Through Our Network of World-Class
          Mentors
        </div>
      </div>

      <div className="relative w-1/2 overflow-hidden h-72">
        <img
          ref={imageRef}
          src="your-image.jpg"
          alt="Moving"
          className="absolute w-full"
        />
      </div>
    </div>
  );
}
