import React from "react";

const ReactConference = () => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      {/* Channel Logo */}
      <img
        src="https://via.placeholder.com/40"
        alt="Channel Logo"
        className="w-10 h-10 rounded-full"
      />

      {/* Channel Name and Subscribers */}
      <h2 className="text-lg font-semibold">React Conference</h2>
      <p className="text-sm text-gray-500">27.2K subscribers</p>

      {/* Subscribe Button */}
      <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold">
        Subscribe
      </button>
    </div>
  );
};

export default ReactConference;
