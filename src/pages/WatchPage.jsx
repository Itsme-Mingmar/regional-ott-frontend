import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecommendedMovies from "../components/common/RecommendedMovies";
import {
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaVolumeUp,
  FaVolumeMute,
  FaTimes,
} from "react-icons/fa";

const WatchPage = () => {
  const { id } = useParams();

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Update progress
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  // Set duration
  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  // Seek
  const handleSeek = (e) => {
    const video = videoRef.current;
    const newTime = (e.target.value / 100) * duration;
    video.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Volume
  const handleVolumeChange = (e) => {
    const value = e.target.value;
    videoRef.current.volume = value;
    setVolume(value);
  };

  // Format time
  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white pt-20 px-6">
      
      {/*  Container */}
      <div
        ref={containerRef}
        className={`relative bg-black overflow-hidden transition-all duration-300
          ${isFullscreen ? "flex items-center justify-center h-screen" : "rounded-xl"}
        `}
      >
        {/* Video Height Behavior */}
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className={`w-full transition-all duration-300
            ${isFullscreen ? "h-screen object-contain" : "h-[500px] object-cover"}
          `}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />

        {/* Close button in fullscreen */}
        {isFullscreen && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-black/60 p-3 rounded-full hover:bg-black"
          >
            <FaTimes />
          </button>
        )}

        {/* Controls Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          
          {/* Progress Bar */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs w-12">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="flex-1 accent-purple-600"
            />

            <span className="text-xs w-12 text-right">
              {formatTime(duration)}
            </span>
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-between items-center">
            
            <div className="flex items-center gap-4">
              {/* Play Pause */}
              <button
                onClick={togglePlay}
                className="text-xl hover:scale-110 transition"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>

              {/* Volume */}
              <div className="flex items-center gap-2">
                {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 accent-purple-600"
                />
              </div>
            </div>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="text-xl hover:scale-110 transition"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold pb-10">
          Saints & Sinners - Episode {id}
        </h1>
      </div>
      <RecommendedMovies currentMovieId={id} />
    </div>
  );
};

export default WatchPage;