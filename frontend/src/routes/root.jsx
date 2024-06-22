import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainContents/MainSection";
import NavBar from "../components/Navbar";
import LoginSection from "../components/LoginSection";

export default function Root() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [courseData, setCourseData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // State for showing login section
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user login status
  const navigate = useNavigate();

  useEffect(() => {
    if (!category) {
      navigate("/muscle_building");
    }
  }, [category, navigate]);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        const selectedData = data.find(
          (course) => course.course_url === selectedCategory
        );
        setCourseData(selectedData);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      fetch(`http://127.0.0.1:8000/api/${selectedCategory}/`)
        .then((response) => response.json())
        .then((data) => setCategoryData(data))
        .catch((error) =>
          console.error("Error fetching category data:", error)
        );
    }
  }, [selectedCategory]);

  const handleCourseSelect = (course_url) => {
    setSelectedCategory(course_url);
    navigate(`/${course_url}`);
  };

  return (
    <div className="h-screen">
      <NavBar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
      <div className="h-[80vh] min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-1.5 bg-neutral-950">
        <Sidebar
          onCourseSelect={handleCourseSelect}
          setSelectedCategory={setSelectedCategory}
        />
        <SectionContainer className="overflow-auto bg-neutral-900">
          <MainSection
            categoryData={categoryData}
            courseData={courseData}
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
            setShowLogin={setShowLogin} // Pass setShowLogin to MainSection
          />
        </SectionContainer>
      </div>
      <aside className="flex items-center justify-between col-span-2 px-4 py-3 bg-gradient-to-r from-accent-1 to-accent-2">
        <p className="pl-3">
          <span className="block text-base tracking-wider ">
            We are M. Our mission is to provide the highest standard educational
            programmes for all through AI and qualified experts,
          </span>
          <span className="text-base tracking-wider">
            from boosting your academic performance, general knowledge and
            language skills to accelerating your bodybuilding progress and
            career prospect.{" "}
          </span>
        </p>
      </aside>
      {showLogin && (
        <LoginSection
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
}
