import React from 'react';

const HomeGridSkeleton = () => {
  return (  <div className="grid grid-flow-row lg:gap-4 max-sm:gap-0 max-sm:space-y-3 sm:gap-2 md:gap-2 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 w-full h-[600px]">
  
  <div className=" col-span-1  md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 bg-gray-300 animate-pulse rounded-lg row-span-1"></div>
  <div className=" col-span-1 max-sm:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:col-span-1 animate-pulse rounded-lg row-span-1 bg-gray-300"></div>
  <div className=" col-span-1 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2 2xl:col-span-1 2xl:row-span-2 animate-pulse rounded-lg bg-gray-300"></div>
  <div className=" col-span-2 row-span-2 sm:col-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2 2xl:col-span-2 2xl:row-span-2 animate-pulse rounded-lg bg-gray-300"></div>
  <div className=" col-span-1 2xl:col-span-1 animate-pulse rounded-lg row-span-1 bg-gray-300"></div>
    
    </div>
  );
};

export default HomeGridSkeleton;
