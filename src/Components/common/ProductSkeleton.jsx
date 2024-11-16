import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="max-w-xs p-4 rounded-lg shadow-md animate-pulse bg-gray-100">
      <div className="h-40 rounded-lg bg-gray-300"></div>
      <div className="mt-4 h-4 w-2/3 rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/2 rounded-lg bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/4 rounded-lg bg-gray-200"></div>
    </div>
  );
};

export default ProductCardSkeleton;