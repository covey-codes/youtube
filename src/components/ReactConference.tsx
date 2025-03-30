const ReactConference = () => {
  return (
    <div className="flex items-center lg:ml-[85px] p-1 space-x-4 mt-4">
      <img
        src="/valery.jpg"
        alt="Channel Logo"
        className="w-10 lg:w-15 h-10 lg:h-15 rounded-full"
      />

      <h2 className="text-[1rem] font-semibold truncate max-w-[170px] lg:max-w-none lg:whitespace-nowrap">
        React Conferences by GitNation
      </h2>
      <p className="text-[0.7rem] text-gray-500">27.2K </p>

      <button className="bg-black text-white px-2 py-2 rounded-full font-semibold">
        Subscribe
      </button>
    </div>
  );
};

export default ReactConference;
