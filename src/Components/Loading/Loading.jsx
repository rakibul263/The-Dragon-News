import React from "react";
import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="animate-spin text-blue-600">
        <Loader size={48} />
      </div>
    </div>
  );
};

export default Loading;
