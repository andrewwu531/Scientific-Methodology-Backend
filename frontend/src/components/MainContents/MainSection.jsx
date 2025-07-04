import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FAQAccordion from "../FAQAccordion";
import VideoDurationComponent from "../VideoDurationComponent"; // Adjust the import path accordingly

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function MainSection({
  categoryData,
  courseData,
  selectedVideo,
  setSelectedVideo,
  setShowLogin,
  isLoggedIn,
}) {
  const backendURL = "http://localhost:8000"; // URL of your Django server
  const [open, setOpen] = useState(null);
  const videoRefs = useRef({}); // Object to store refs for each video element

  useEffect(() => {
    if (categoryData && categoryData.length > 0) {
      const seriesMap = categoryData.reduce((acc, video) => {
        if (!acc[video.video_series_name]) {
          acc[video.video_series_name] = [];
        }
        acc[video.video_series_name].push(video);
        return acc;
      }, {});

      const firstSeries = Object.keys(seriesMap)[0];
      const firstVideo = seriesMap[firstSeries][0];
      setSelectedVideo(firstVideo);
    }
  }, [categoryData, setSelectedVideo]);

  useEffect(() => {
    const handleSeek = (e) => {
      const video = e.target;
      const rect = video.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const clickTime = (clickX / width) * video.duration;
      video.currentTime = clickTime;
      video.play(); // Ensure video plays from the clicked time
    };

    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        video.addEventListener("click", handleSeek);
      }
    });

    return () => {
      Object.keys(videoRefs.current).forEach((key) => {
        const video = videoRefs.current[key];
        if (video) {
          video.removeEventListener("click", handleSeek);
        }
      });
    };
  }, [categoryData, selectedVideo]);

  const handleVideoClick = (video, value) => {
    if (video.video_subscription_type !== "1") {
      // Check if the video is not free
      setShowLogin(true);
    } else {
      setSelectedVideo(video);
      setOpen(open === value ? null : value);
    }
  };

  // Ensure categoryData is not null or undefined
  if (!categoryData || categoryData.length === 0 || !courseData) {
    return <div>Loading...</div>;
  }

  const seriesMap = categoryData.reduce((acc, video) => {
    if (!acc[video.video_series_name]) {
      acc[video.video_series_name] = [];
    }
    acc[video.video_series_name].push(video);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex flex-col pb-16 pl-8 mx-16 overflow-auto pt-7 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-thumb-hover-gray-600">
        <div className="pb-6 text-2xl font-bold text-neutral-100">
          {courseData.course_title}
        </div>
        <div className="h-40 mr-60">
          <img
            src={`${backendURL}/${courseData.course_banner}`}
            alt="banner"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {Object.keys(seriesMap).map((seriesName, seriesIndex) => (
          <div key={seriesIndex}>
            <div className="pb-3.5 pl-3 text-xl font-bold pt-9 text-neutral-300">
              Series {seriesIndex + 1} : {seriesName}
            </div>
            {seriesMap[seriesName].map((video, index) => (
              <div key={video.pk}>
                <div
                  className={`flex flex-row items-center justify-between pt-1.5 mr-8 cursor-pointer bg-neutral-900
                    ${index === 0 ? "pt-3 rounded-tl-md rounded-tr-md" : ""}
                    ${index === seriesMap[seriesName].length - 1 ? "pb-3 rounded-bl-md rounded-br-md" : ""}
                    ${selectedVideo && selectedVideo.pk === video.pk ? "text-yellow-400 " : ""}`}
                  onClick={() =>
                    handleVideoClick(
                      video,
                      video.video_series_name + video.video_episode
                    )
                  }
                >
                  <div className="flex flex-row items-center justify-start w-full">
                    <div className="ml-5 h-7">
                      <img
                        src={`${backendURL}/${video.video_icon}`}
                        alt="icon"
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <div
                      className={`px-5 py-1 font-sans text-small 
                        ${selectedVideo && selectedVideo.pk === video.pk ? "text-yellow-400 " : "text-neutral-300"}
                        ${index === 0 ? "rounded-tl-md rounded-tr-md" : ""}`}
                    >
                      {`S${video.video_series}`} <span>&nbsp;</span>
                      {`E${video.video_episode}`} <span>&nbsp; &nbsp;</span>
                      {`${video.video_title}`}
                    </div>
                    <div className="flex flex-row items-center ml-auto">
                      <div
                        className={`w-32 mr-7 h-0.5 rounded-full 
                         ${selectedVideo && selectedVideo.pk === video.pk ? "bg-yellow-400 " : "bg-green-500"}`}
                      ></div>
                      <div className="text-sm mr-7">{video.video_duration}</div>
                    </div>
                  </div>
                </div>
                <Accordion
                  value={video.video_series_name + video.video_episode}
                  open={open === video.video_series_name + video.video_episode}
                  icon={
                    <Icon
                      id={video.video_series_name + video.video_episode}
                      open={
                        open === video.video_series_name + video.video_episode
                      }
                    />
                  }
                >
                  <AccordionHeader className="hidden">
                    {video.video_title}
                  </AccordionHeader>
                  <AccordionBody className="text-xs">
                    {open === video.video_series_name + video.video_episode && (
                      <div className="pt-4 pl-8 text-neutral-300">
                        <div className="relative h-100 mr-60">
                          <video
                            controls
                            className="object-cover w-full h-full rounded-lg"
                            ref={(el) => (videoRefs.current[video.pk] = el)} // Store ref in the videoRefs object
                          >
                            <source
                              src={`${backendURL}/${video.video_video}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    )}
                  </AccordionBody>
                </Accordion>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <FAQAccordion
          course_url={courseData.course_url}
          setShowLogin={setShowLogin}
          isLoggedIn={isLoggedIn}
        />
        <Footer />
      </div>
    </div>
  );
}

MainSection.propTypes = {
  courseData: PropTypes.shape({
    course_url: PropTypes.string.isRequired,
    course_name: PropTypes.string.isRequired,
    course_category: PropTypes.string.isRequired,
    course_title: PropTypes.string.isRequired,
    course_banner: PropTypes.string.isRequired,
  }).isRequired,
  categoryData: PropTypes.arrayOf(
    PropTypes.shape({
      course_url: PropTypes.string.isRequired,
      video_title: PropTypes.string.isRequired,
      video_subscription_type: PropTypes.string.isRequired,
      video_series_name: PropTypes.string.isRequired,
      video_series: PropTypes.string.isRequired,
      video_episode: PropTypes.string.isRequired,
      video_icon: PropTypes.string.isRequired,
      video_video: PropTypes.string.isRequired,
      pk: PropTypes.number.isRequired, // Use pk as the unique identifier
    })
  ).isRequired,
  selectedVideo: PropTypes.object,
  setSelectedVideo: PropTypes.func.isRequired,
  setShowLogin: PropTypes.func.isRequired, // Add prop type for setShowLogin
  isLoggedIn: PropTypes.func.isRequired,
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
