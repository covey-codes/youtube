import React from "react";
import { RecommendedVideos } from "../constants/RecommendedVideos"; // Import the component

export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  mx-auto p-10">
      {/* Main Video */}
      <div className="w-full lg:w-[100%]">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Recommended Videos Section */}
      <RecommendedVideos />
    </div>
  );
};
