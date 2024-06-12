import SectionContainer from "../components/SectionContainer";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainContents/MainSection";
import NavBar from "../components/Navbar";

export default function Root() {
  const [selectedCategory, setSelectedCategory] = useState("uni_guide");
  const [courseData, setCourseData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/courses/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response for Course Data was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedData = data.find(
          (course) => course.course_url === selectedCategory
        );
        console.log("Fetched course data:", selectedData); // Log the fetched data
        setCourseData(selectedData);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, [selectedCategory]);

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
    <div className="h-screen">
      <NavBar />
      <div className="h-[80vh] min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-1.5 bg-black-2">
        <Sidebar onCourseSelect={setSelectedCategory} />
        <SectionContainer className="overflow-auto bg-neutral-900">
          <MainSection categoryData={categoryData} courseData={courseData} />
        </SectionContainer>
      </div>
      <aside className="flex items-center justify-between col-span-2 px-4 py-3 bg-gradient-to-r from-accent-1 to-accent-2">
        <p className="pl-3">
          <span className="block text-base tracking-wider ">
            We are M. Our mission is to provide the highest standard programmes
            for all through AI and qualified experts,
          </span>
          <span className="text-base tracking-wider">
            from boosting your academic performance, general knowledge and
            language skills to accelerating your bodybuilding progress and
            career prospect.{" "}
          </span>
        </p>
      </aside>
    </div>
  );
}
