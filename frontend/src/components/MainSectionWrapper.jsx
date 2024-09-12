import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MainSection from "../components/MainContents/MainSection";

function MainSectionWrapper() {
  const { category } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch(`https://backend.scientific-methodology.com/api/courses/`)
      .then((response) => response.json())
      .then((data) => {
        const selectedData = data.find(
          (course) => course.course_url === category
        );
        setCourseData(selectedData);
      })
      .catch((error) => console.error("Error fetching course data:", error));
  }, [category]);

  useEffect(() => {
    if (category) {
      fetch(`https://backend.scientific-methodology.com/api/${category}/`)
        .then((response) => response.json())
        .then((data) => setCategoryData(data))
        .catch((error) =>
          console.error("Error fetching category data:", error)
        );
    }
  }, [category]);

  return (
    <MainSection
      categoryData={categoryData}
      courseData={courseData}
      selectedVideo={selectedVideo}
      setSelectedVideo={setSelectedVideo}
    />
  );
}

export default MainSectionWrapper;
