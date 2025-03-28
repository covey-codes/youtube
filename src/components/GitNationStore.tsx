import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { merchData } from "../data/merchData";

const GitNationStore = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = merchData.map(
      (item) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = resolve;
          img.onerror = resolve;
        })
    );
    Promise.all(imagePromises).then(() => setImagesLoaded(true));
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            React Conferences by GitNation store
          </h1>
          <p className="text-sm">From Spring</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-4">
          {merchData.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40 text-center">
              {!imagesLoaded ? (
                <div className="w-full h-40 bg-gray-200 rounded-md animate-pulse" />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              )}
              <h3 className="text-sm font-semibold mt-2">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.description}</p>
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
