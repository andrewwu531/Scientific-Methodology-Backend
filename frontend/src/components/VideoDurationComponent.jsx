import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const VideoDurationComponent = ({ videoSrc, videoId, onDurationLoaded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleLoadedMetadata = () => {
      const videoDuration = videoElement.duration;
      onDurationLoaded(videoId, videoDuration);
    };
    console.log("videoId", videoId);

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [videoSrc, videoId, onDurationLoaded]);

  return (
    <video ref={videoRef} className="hidden">
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

VideoDurationComponent.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  videoId: PropTypes.number.isRequired, // Updated to number
  onDurationLoaded: PropTypes.func.isRequired,
};

export default VideoDurationComponent;
