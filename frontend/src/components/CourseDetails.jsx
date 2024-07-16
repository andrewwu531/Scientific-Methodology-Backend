import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className="flex flex-col">
      <div className="flex flex-row">
        <img
          src={`${backendURL}${course.course_banner}`}
          alt={course.course_title}
          className="object-cover object-top w-[56vw] transition-transform duration-300 h-[60vh] group-hover:scale-105"
        />
        <div className="w-[44vw] text-4xl font-bold pt-[8vh] pl-[5vw]">
          {course.course_title}
          <p className="text-xl font-medium text-neutral-400">
            {course.course_category}
          </p>
        </div>
      </div>

      <div className="mx-[18vw] mt-[10vh]">
        {Object.keys(seriesGroupedVideos).map((seriesName, index) => (
          <div key={seriesName} className="mb-14">
            <h3 className="flex items-center justify-center mb-4 text-2xl font-bold">
              Series {index + 1}: {seriesName}
            </h3>
            {seriesGroupedVideos[seriesName].map((video) => (
              <div key={video.pk}>
                <div
                  onClick={() => handleVideoClick(video, seriesName)}
                  className={`p-2 mb-2 rounded-lg cursor-pointer ${
                    openAccordion === `${seriesName}-${video.pk}`
                      ? "bg-purple-900"
                      : currentVideo.pk === video.pk
                        ? "bg-purple-900"
                        : "bg-neutral-900 hover:bg-neutral-700"
                  }`}
                >
                  <div className="flex flex-row items-center justify-between py-2">
                    <div className="flex flex-row items-center ml-[1vw] space-x-4">
                      <img
                        src={`${backendURL}${video.video_icon}`}
                        alt={course.course_title}
                        className="object-cover object-top w-8 h-8 ml-3 transition-transform duration-300 rounded-full group-hover:scale-105"
                      />
                      <p className="font-sans text-small">
                        {video.video_title}
                      </p>
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
  );
}
