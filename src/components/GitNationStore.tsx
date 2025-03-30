import React from "react";
import { ShoppingCart } from "lucide-react";
import { merchData } from "../constants/merchData";
import { MerchItem } from "../types/section";
import { useImagesLoaded } from "../hooks/useImagesLoaded";

const GitNationStore: React.FC = () => {
  const imagesLoaded = useImagesLoaded(merchData.map((item) => item.image));

  return (
    <div className="p-4 lg:ml-[85px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[18.9px] lg:text-2xl font-semibold">
            React Conferences by GitNation store
          </h1>
          <p className="text-[10px] lg:text-[15px]">From Spring</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-4">
          {merchData.map((item: MerchItem) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 lg:w-80 text-center"
            >
              {!imagesLoaded ? (
                <div className="w-full lg:h-80 h-40 bg-gray-200 rounded-md animate-pulse" />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full lg:h-80 h-40 object-cover rounded-md"
                />
              )}
              <h3 className="text-sm lg:text-lg font-semibold mt-2">
                {item.title}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600">
                {item.description}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-blue-500 hover:text-blue-700"
              >
                <ShoppingCart size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitNationStore;
