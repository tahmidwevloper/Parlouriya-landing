import React from "react";

const Ratings = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-8">
        <div className="relative flex items-center justify-between bg-white/5 p-10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md">
          {/* Text content */}
          <h2 className="text-2xl text-purple-950 md:text-4xl font-bold .text-white z-10">
            #1 highest-rated by <br /> thousands of beauty & <br /> wellness
            professionals
          </h2>{" "}
          {/**{/** Go to up when its medium device, text no.1 */}
          <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
            <div className="h-full w-full bg-white/0 backdrop-blur-xs rounded-l-full mask-fade-left" />
          </div>
        </div>

        <div className="overflow-hidden bg-none py-8">
          <div className="whitespace-nowrap flex gap-10 scroll-animation-left">
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="relative flex items-center justify-between bg-white/5 p-10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md">
          {/* Text content */}
          <h2 className="text-2xl text-purple-950 md:text-4xl font-bold .text-white z-10">
            #1 highest-rated by <br /> thousands of beauty & <br /> wellness
            professionals
          </h2>{" "}
          {/** Go to up when its medium device, text no.2 */}
          <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
            <div className="h-full w-full bg-white/0 backdrop-blur-xs rounded-l-full mask-fade-left" />
          </div>
        </div>

        <div className="overflow-hidden bg-none py-8">
          <div className="whitespace-nowrap flex gap-10 scroll-animation-right">
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
            <p className="font-medium text-gray-700">Brand logo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
