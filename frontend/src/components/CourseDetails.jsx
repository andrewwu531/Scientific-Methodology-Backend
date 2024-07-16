import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CourseDetail() {
  const { courseUrl } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
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
          (video) => video.video_episode === "1"
        );
        setCurrentVideo(initialVideo);
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

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
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
    <div className="flex flex-col">
      <img
        src={`${backendURL}${course.course_banner}`}
        alt={course.course_title}
        className="object-cover object-top w-[50vw] transition-transform duration-300 h-[60vh] group-hover:scale-105"
      />
      <div className="flex flex-row w-full p-8 space-x-9">
        {/* Left Section: Video List */}
        <div className="w-1/3">
          {Object.keys(seriesGroupedVideos).map((seriesName) => (
            <div key={seriesName} className="mb-6">
              <h3 className="mb-2 text-xl font-bold">{seriesName}</h3>
              {seriesGroupedVideos[seriesName].map((video) => (
                <div
                  key={video.pk}
                  onClick={() => handleVideoClick(video)}
                  className={`p-2 mb-2 rounded-md cursor-pointer ${
                    currentVideo.pk === video.pk
                      ? "bg-gray-700"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <p className="text-lg font-bold">{video.video_title}</p>
                  <p className="text-sm">{video.video_duration}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Right Section: Current Video */}
        <div className="w-2/3 pr-4">
          <h1 className="mb-2 text-2xl font-bold">
            {currentVideo.video_title}
          </h1>
          <h2 className="mb-4 text-xl">{course.course_title}</h2>
          <p className="mb-2">Series: {currentVideo.video_series}</p>
          <p className="mb-2">Episode: {currentVideo.video_episode}</p>
          <p className="mb-2">Duration: {currentVideo.video_duration}</p>
          <div className="relative h-100 mr-60">
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
      </div>
    </div>
  );
}
