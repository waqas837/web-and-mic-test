"use client";
import React, { useState, useEffect, useRef } from "react";

const RunMirrorTest = () => {
  const [isMirrored, setIsMirrored] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false); // New state for camera status
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [Error, setError] = useState(null);

  // Cleanup function for stopping the camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      streamRef.current = null;
      setIsCameraOn(false); // Reset camera state
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOn(true); // Update state when camera starts
    } catch (err) {
      setError(
        "Error accessing the camera. Please allow permission to access the camera."
      );
      console.error("Error accessing the camera:", err);
    }
  };

  const toggleCamera = () => {
    if (isCameraOn) {
      stopCamera();
    } else {
      startCamera();
    }
  };

  const toggleMirror = () => {
    setIsMirrored(!isMirrored);
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const preventPause = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Cleanup when component unmounts
    return () => {
      stopCamera(); // Ensure the camera stops on unmount
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {Error && <div className="text-red-500">{Error}</div>}
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-lg cursor-pointer ${
          isMirrored ? "scale-x-[-1]" : ""
        }`}
        onClick={toggleFullscreen}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-auto"
          onClick={preventPause}
        />
        <div className="absolute top-3 right-3">
          {isFullscreen ? (
            // Fullscreen exit icon
            <svg /* Your fullscreen exit icon here */ />
          ) : (
            // Fullscreen icon
            <svg /* Your fullscreen icon here */ />
          )}
        </div>
      </div>
      <button
        onClick={toggleCamera}
        className="flex items-center space-x-2 bg-blue-500 p-2 text-white rounded-lg"
      >
        {isCameraOn ? "Stop Camera" : "Start Camera"}
      </button>
      <button
        onClick={toggleMirror}
        className="flex items-center space-x-2 bg-blue-500 p-2 text-white rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
          />
        </svg>
        <span>{isMirrored ? "Show Real View" : "Show Mirror View"}</span>
      </button>
    </div>
  );
};

export default RunMirrorTest;
