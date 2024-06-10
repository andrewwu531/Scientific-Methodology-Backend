import { useState, useEffect } from "react";
import SideLibrary from "../SideLibrary";
import MainSection from "./MainSection";

export default function MainContainer() {
  const [selectedCategory, setSelectedCategory] = useState("uni_guide");
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    console.log("Selected category:", selectedCategory); // Log selected category
    if (selectedCategory) {
      fetch(`http://127.0.0.1:8000/api/${selectedCategory}/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched data:", data); // Log the fetched data
          setCategoryData(data);
        })
        .catch((error) =>
          console.error("Error fetching category data:", error)
        );
    }
  }, [selectedCategory]);

  return (
    <div className="flex">
      <SideLibrary onCourseSelect={setSelectedCategory} />
      <MainSection categoryData={categoryData} />
    </div>
  );
}
