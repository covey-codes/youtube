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
  MoreHorizontal,
} from "lucide-react";

const IconsCarousel = () => {
  const [showMore, setShowMore] = useState(false);

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
    <div className="flex space-x-4 truncate max-w overflow-x-auto hide-scrollbar p-5">
      {likeDislikeBox}

      {actions.slice(0, 3).map((action, index) => (
        <button
          key={index}
          className="flex items-center space-x-5  bg-gray-200 px-4 sm:py-2 rounded-full hover:bg-gray-300 transition"
        >
          {action.icon}
          <span className="text-sm flex-shrink-0 font-medium">
            {action.text}
          </span>
        </button>
      ))}

      <div className="relative lg:block hidden">
        <button
          className="flex items-center bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
          onClick={() => setShowMore(!showMore)}
        >
          <MoreHorizontal size={15} />
        </button>

        {showMore && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-32">
            {actions.slice(3).map((action, index) => (
              <button
                key={index}
                className="flex w-full items-center space-x-3 px-2 py-1 hover:bg-gray-100 rounded-md"
              >
                {action.icon}
                <span className="text-sm font-medium">{action.text}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="lg:hidden flex space-x-4">
        {actions.slice(3).map((action, index) => (
          <button
            key={index}
            className="flex items-center space-x-5 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
          >
            {action.icon}
            <span className="text-sm font-medium">{action.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IconsCarousel;
