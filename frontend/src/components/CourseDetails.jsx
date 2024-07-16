import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";

export default function CourseDetail() {
  const { courseUrl } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const backendURL = "http://localhost:8000";

  useEffect(() => {
    // Fetch course details
    axios
      .get(`${backendURL}/api/courses/`)
      .then((response) => {
        const courseData = response.data.find(
          (course) => course.course_url === courseUrl
        );
        setCourse(courseData);
      })
      .catch((error) => console.error("Error fetching course data:", error));

    // Fetch course videos
    axios
      .get(`${backendURL}/api/course/${courseUrl}/`)
      .then((response) => {
        setVideos(response.data);
        const initialVideo = response.data.find(
          (video) => video.video_series === "1" && video.video_episode === "1"
        );
        setCurrentVideo(initialVideo);
        setOpenAccordion(`Series 1-${initialVideo.pk}`);
      })
      .catch((error) => console.error("Error fetching course videos:", error));
  }, [courseUrl]);

  useEffect(() => {
    if (currentVideo) {
      console.log("Current video updated:", currentVideo);
    }
  }, [currentVideo]);

  if (!course || !currentVideo) {
    return <div>Loading...</div>;
  }

  const handleVideoClick = (video, seriesName) => {
    if (openAccordion === `${seriesName}-${video.pk}`) {
      setOpenAccordion(null);
    } else {
      setCurrentVideo(video);
      setOpenAccordion(`${seriesName}-${video.pk}`);
    }
  };

  // Group videos by series
  const seriesGroupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.video_series_name]) {
      acc[video.video_series_name] = [];
    }
    acc[video.video_series_name].push(video);
    return acc;
  }, {});

  return (
    <div className="relative bg-black">
      <div className="fixed top-0 z-50 w-full">
        <NavBar />
      </div>

      <div className="relative flex flex-col pt-[11vh] pb-[8vh] z-10">
        <div className="relative flex justify-center w-full">
          <div className="absolute top-0 left-0 z-40 w-full h-full bg-opacity-100 bg-gradient-to-b from-transparent via-transparent to-black"></div>

          <div
            className="relative z-10 w-[24vw] h-[65vh] overflow-hidden"
            style={{ marginRight: "-1vw" }}
          >
            <img
              src={`${backendURL}/media/Muscle_Building_Course_Banner_1.jpg`}
              alt={course.course_title}
              className="object-cover object-top w-full h-full mt-[12vh] rounded-xl transition-transform duration-300"
            />
          </div>
          <div className="relative z-20 w-[33vw] h-[65vh] overflow-hidden">
            <img
              src={`${backendURL}/${course.course_banner}`}
              alt={course.course_title}
              className="object-cover object-top w-full h-full transition-transform duration-300 rounded-t-xl"
            />
          </div>
          <div
            className="relative z-10 w-[24vw] h-[65vh] overflow-hidden"
            style={{ marginLeft: "-1vw" }}
          >
            <img
              src={`${backendURL}/media/Muscle_Building_Course_Banner_2.jpg`}
              alt={course.course_title}
              className="object-cover object-top w-full h-full mt-[12vh] rounded-xl transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="z-50 mx-auto text-3xl font-bold text-center w-96 mt-[-8vh]">
            {course.course_title}
          </h2>
          <p className="w-[35vw] text-center mx-auto text-neutral-200">
            {course.course_descriptions}
          </p>
          <div className="flex flex-row items-center justify-center pt-5 space-x-16">
            <p className="font-bold text-md text-neutral-200">
              {course.course_author}
            </p>
            <button className="py-2 text-xl text-black bg-purple-800 px-11 rounded-3xl">
              ▶
            </button>
          </div>
        </div>

        <div className="mx-[18vw] mt-[9vh]">
          {Object.keys(seriesGroupedVideos).map((seriesName, index) => (
            <div key={seriesName} className="mb-14">
              <h3 className="flex items-center justify-center mb-5 text-2xl font-bold text-neutral-200">
                Series {index + 1}: {seriesName}
              </h3>
              {seriesGroupedVideos[seriesName].map((video) => (
                <div key={video.pk}>
                  <div
                    onClick={() => handleVideoClick(video, seriesName)}
                    className={`p-2 mb-2.5 rounded-lg cursor-pointer ${
                      openAccordion === `${seriesName}-${video.pk}`
                        ? "bg-purple-900"
                        : currentVideo.pk === video.pk
                          ? "bg-purple-900"
                          : "bg-neutral-950 hover:bg-neutral-700"
                    }`}
                  >
                    <div className="flex flex-row items-center justify-between py-2">
                      <div className="flex flex-row items-center ml-[1vw] space-x-5">
                        <img
                          src={`${backendURL}${video.video_icon}`}
                          alt={course.course_title}
                          className="object-cover object-top w-8 h-8 ml-3 transition-transform duration-300 rounded-full group-hover:scale-105"
                        />
                        <p className="font-sans text-md">{video.video_title}</p>
                      </div>
                      <div className="mr-[2vw]">
                        <p className="text-sm">{video.video_duration}</p>
                      </div>
                    </div>
                  </div>
                  {openAccordion === `${seriesName}-${video.pk}` && (
                    <div className="p-2 mt-4 rounded-lg bg-neutral-800">
                      <div className="relative h-100">
                        <video
                          key={currentVideo.pk} // Adding key to ensure video component re-renders
                          controls
                          className="object-cover w-full h-full rounded-lg"
                        >
                          <source
                            src={`${backendURL}${currentVideo.video_video}`}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
