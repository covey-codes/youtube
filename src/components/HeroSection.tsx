import React from "react";
import { RecommendedVideos } from "./RecommendedVideos";

export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:p-10">
      <div className="w-full ">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 lg:rounded-[70px] lg:p-[40px] w-full h-full"
            src="https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <RecommendedVideos />
    </div>
  );
};
