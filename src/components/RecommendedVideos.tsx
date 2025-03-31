export const RecommendedVideos = () => {
  const videos = Array(6).fill({ id: 0 });

  return (
    <div className="w-full lg:w-1/4 hidden lg:flex flex-col space-y-4 mt-4 lg:mt-0 lg:ml-4 max-h-screen overflow-y-auto p-2">
      <h2 className="text-[25px] font-semibold text-gray-800 mb-2">
        Recommended Videos
      </h2>
      {videos.map((_, index) => (
        <div
          key={index}
          className="flex space-x-3 bg-gray-200 p-2 rounded-lg animate-pulse"
        >
          <div className="w-2/5 flex-shrink-0 bg-gray-400 h-24 rounded-md"></div>

          <div className="w-3/5 flex flex-col justify-between">
            <div className="h-4 bg-gray-400 rounded w-4/5"></div>
            <div className="h-3 bg-gray-400 rounded w-3/5 mt-2"></div>
            <div className="h-3 bg-gray-300 rounded w-2/5 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
