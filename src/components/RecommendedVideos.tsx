import React from "react";

export const RecommendedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Mastering React in 10 Minutes",
      creator: "CodeWithMe",
      views: "1.2M views",
      time: "2 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },

    {
      id: 5,
      title: "CSS Grid Made Easy",
      creator: "DesignCode",
      views: "300K views",
      time: "1 day ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 5,
      title: "CSS Grid Made Easy",
      creator: "DesignCode",
      views: "300K views",
      time: "1 day ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 5,
      title: "CSS Grid Made Easy",
      creator: "DesignCode",
      views: "300K views",
      time: "1 day ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 5,
      title: "CSS Grid Made Easy",
      creator: "DesignCode",
      views: "300K views",
      time: "1 day ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },

    {
      id: 6,
      title: "TypeScript for Beginners",
      creator: "TypeMaster",
      views: "600K views",
      time: "4 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
  ];

  return (
    <div className="w-full lg:w-1/4 hidden lg:flex flex-col space-y-4 mt-4 lg:mt-0 lg:ml-4 max-h-screen overflow-y-auto p-2">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        Recommended Videos
      </h2>
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex space-x-3 hover:bg-gray-100 p-2 rounded-lg transition duration-200"
        >
          <div className="w-2/5 flex-shrink-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-24 object-cover rounded-md"
            />
          </div>

          <div className="w-3/5 flex flex-col justify-between">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
              {video.title}
            </h3>
            <p className="text-xs text-gray-600 hover:text-gray-800">
              {video.creator}
            </p>
            <p className="text-xs text-gray-500">
              {video.views} • {video.time}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
