import React from "react";

const Ratings = () => {
  return (
    <div className="bg-white dark:bg-[#0E2148] py-12 px-4 sm:px-6 lg:px-8">
      {/* First Row */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="relative w-full lg:w-1/2 bg-white/5 p-8 sm:p-10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 dark:text-white z-10">
            #1 highest-rated by <br /> thousands of beauty & <br /> wellness
            professionals
          </h2>
          <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
            <div className="h-full w-full bg-white/0 backdrop-blur-xs rounded-l-full mask-fade-left" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 overflow-hidden py-4">
          <div className="whitespace-nowrap flex gap-6 sm:gap-10 scroll-animation-left">
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="mt-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="relative w-full lg:w-1/2 bg-white/5 p-8 sm:p-10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-950 dark:text-white z-10">
            #1 highest-rated by <br /> thousands of beauty & <br /> wellness
            professionals
          </h2>
          <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none">
            <div className="h-full w-full bg-white/0 backdrop-blur-xs rounded-l-full mask-fade-left" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 overflow-hidden py-4">
          <div className="whitespace-nowrap flex gap-6 sm:gap-10 scroll-animation-right">
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-white">
              Brand logo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
