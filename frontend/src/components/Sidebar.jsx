import { useEffect, useState, useRef } from "react";
import SideLibrary from "./SideLibrary";

const [minWidth, maxWidth, defaultWidth] = [275, 400, 380];

export default function Sidebar() {
  const [width, setWidth] = useState(
    parseInt(localStorage.getItem("sidebarWidth")) || defaultWidth
  );

  let isDragged = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isDragged.current) {
        return;
      }

      document.body.style.userSelect = "none";

      setWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;
        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;

        return isWidthInRange ? newWidth : previousWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      document.body.style.userSelect = "auto";
      isDragged.current = false;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarWidth", width);
  }, [width]);

  return (
    <div className="relative flex overflow-y-hidden select-none">
      <aside
        className="relative flex flex-col gap-2"
        style={{ width: `${width / 16}rem` }}
      >
        {/* <SideMenu /> */}

        <SideLibrary />
      </aside>

      {/* Handle */}
      <div
        className="w-2 bg-transparent cursor-col-resize"
        onMouseDown={() => {
          isDragged.current = true;
        }}
      />
    </div>
  );
}
