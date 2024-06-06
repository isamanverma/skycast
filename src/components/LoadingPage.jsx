import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-custom-black">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-dashed border-blue-500"></div>
        <span className="text-xl text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
