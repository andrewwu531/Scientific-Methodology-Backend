import { useEffect } from "react";

export default function UseVideoSeek(videoRef) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeek = (e) => {
      const rect = video.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const clickTime = (clickX / width) * video.duration;
      video.currentTime = clickTime;
    };

    video.addEventListener("click", handleSeek);

    return () => {
      video.removeEventListener("click", handleSeek);
    };
  }, [videoRef]);
}
