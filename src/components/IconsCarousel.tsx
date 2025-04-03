import { useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Repeat,
  Download,
  Scissors,
  Bookmark,
  Flag,
  Share,
} from "lucide-react";

const IconsCarousel = () => {
  const actions = [
    { icon: <Share size={15} />, text: "Share" },
    { icon: <Repeat size={15} />, text: "Remix" },
    { icon: <Download size={15} />, text: "Download" },
    { icon: <Scissors size={15} />, text: "Clip" },
    { icon: <Bookmark size={15} />, text: "Save" },
    { icon: <Flag size={15} />, text: "Report" },
  ];

  const likeDislikeBox = (
    <button className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
      <ThumbsUp size={15} />
      <span className="text-sm font-medium">913</span>
      <span className="text-sm font-medium mx-1">/</span>
      <ThumbsDown size={15} />
      <span className="text-sm font-medium">0</span>
    </button>
  );

  return (
    <div className="flex space-x-4 overflow-x-auto hide-scrollbar p-5">
      {likeDislikeBox}

      {actions.map((action, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
        >
          {action.icon}
          <span className="text-sm flex-shrink-0 font-medium">
            {action.text}
          </span>
        </button>
      ))}
    </div>
  );
};

export default IconsCarousel;
