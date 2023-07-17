import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
    <div className="mt-40 grid grid-cols-4 gap-4">
    <div className="col-span-1 grid grid-cols-1 gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="h-32 bg-gray-300 animate-pulse rounded-lg"></div>
      ))}
    </div>
    <div className="col-span-2 h-100 bg-gray-300 animate-pulse rounded-lg"></div>
    <div className="col-span-1 h-96 animate-pulse rounded-lg">
    <div className="mt-4 h-4 w-2/3 rounded-lg bg-gray-200"></div>
    <div className="mt-4 h-4 w-2/3 rounded-lg bg-gray-200"></div>
    <div className="mt-4 h-4 w-2/3 rounded-lg bg-gray-200"></div>

      <div className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/4 rounded-lg bg-gray-200"></div>
    </div>

  </div>
  );
};

export default ProductDetailsSkeleton;
