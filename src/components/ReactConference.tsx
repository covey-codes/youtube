import React from "react";

const ReactConference = () => {
  return (
    <div className="flex items-center p-1 space-x-4 mt-4">
      <img
        src="/valery.jpg"
        alt="Channel Logo"
        className="w-10 h-10 rounded-full"
      />

      <h2 className="text-[0.9rem] text-nowrap font-semibold">
        React Conferences by G...
      </h2>
      <p className="text-[0.7rem] text-gray-500">27.2K </p>

      <button className="bg-black text-white px-2 py-2 rounded-full font-semibold">
        Subscribe
      </button>
    </div>
  );
};

export default ReactConference;
