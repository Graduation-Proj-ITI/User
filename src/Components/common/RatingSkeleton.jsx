import React from 'react';

const RatingSkeleton = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg w-[250px]">
      <div className="h-8 w-20 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
      <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
      <div className="h-4 w-1/3 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
      <div className="h-4 w-1/4 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
    </div>
  );
};

export default RatingSkeleton;
