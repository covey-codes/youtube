import React from "react";
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
    { icon: <ThumbsUp size={15} />, text: "913" },
    { icon: <ThumbsDown size={15} />, text: "" },
    { icon: <Share size={15} />, text: "Share" },
    { icon: <Repeat size={15} />, text: "Remix" },
    { icon: <Download size={15} />, text: "Download" },
    { icon: <Scissors size={15} />, text: "Clip" },
    { icon: <Bookmark size={15} />, text: "Save" },
    { icon: <Flag size={15} />, text: "Report" },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto no-scrollbar p-2">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
        >
          {action.icon}
          <span className="text-sm font-medium">{action.text}</span>
        </button>
      ))}
    </div>
  );
};

export default IconsCarousel;
