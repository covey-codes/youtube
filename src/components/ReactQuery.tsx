import React from "react";
import { ShoppingBag } from "lucide-react";

const ReactQuery = () => {
  return (
    <div className="">
      <h1 className="text-[1.2rem] font-semibold m-2 pt-4">
        React Query Exposed by its Maintainer
      </h1>
      <div className="flex items-center text-gray-600 text-sm m-2">
        <span>31K views • 2 weeks ago</span>
        <span className="flex items-center ml-4 cursor-pointer hover:text-gray-800">
          <ShoppingBag size={16} className="mr-1" />
          Shop
        </span>
        <span className="ml-4 cursor-pointer hover:text-gray-800 font-bold">
          ...more
        </span>
      </div>
    </div>
  );
};

export default ReactQuery;
