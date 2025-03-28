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
      id: 2,
      title: "Understanding JavaScript Closures",
      creator: "JS Explained",
      views: "950K views",
      time: "1 week ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 3,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 4,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 5,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
    {
      id: 6,
      title: "Building a Full-Stack App",
      creator: "DevJourney",
      views: "820K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/sHnG8tIYMB4?si=0i1FrRInyxVed3sA",
    },
  ];

  return (
    <div className="w-full lg:w-1/4 hidden lg:flex flex-col space-y-4 mt-4 lg:mt-0 lg:ml-4">
      {videos.map((video) => (
        <div key={video.id} className="flex space-x-2">
          <div className="w-2/5 relative">
            <img
              src={video.thumbnail}
              alt="Video Thumbnail"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="w-3/5 flex flex-col">
            <h3 className="text-sm font-medium">{video.title}</h3>
            <p className="text-xs text-gray-500">{video.creator}</p>
            <p className="text-xs text-gray-500">
              {video.views} • {video.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
