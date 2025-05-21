import React from "react";
import { Button } from "../ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import image from "../../public/cta-image-desktop.webp";

const ChooseParlouriya = () => {
  return (
    <div className="flex justify-center items-center bg-white dark:bg-[#0E2148] my-20 mx-5 md:mx-8 lg:mx-12 px-4 lg:px-16 xl:px-0 2xl:px-0">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-white dark:bg-pink-50 p-6 md:p-3 lg:p-10 shadow-2xl gap-10 md:gap-8 .md:gap-14 .lg:gap-20 rounded-3xl w-full max-w-7xl">
        <div className="w-full md:w-[60%] mx-5">
          <h2 className="text-[#0E2148] text-2xl md:text-3xl lg:text-4xl font-bold md:pt-8 lg:">
            Find out if Mangomint <br /> is right for you
          </h2>

          <div className="flex .flex-col .sm:flex-row gap-4 sm:gap-5 my-5 mb-2 lg:my-8">
            <Button
              variant="outline"
              className="rounded-3xl text-md px-4 md:px-5 lg:px-8 py-3 md:py-5 lg:py-6 text-pink-700 border-2 border-pink-700 hover:text-pink-600 mb-4 sm:mb-0"
            >
              Book a live demo
            </Button>
            <Button className="rounded-3xl text-md px-5 md:px-5 lg:px-8 py-3 md:py-[22px] lg:py-6 text-white hover:text-white bg-pink-700 hover:bg-pink-800 border-pink-700">
              Try it now
            </Button>
          </div>

          <div className="mt-0 mb-0 lg:mb-6">
            <Button
              variant="outline"
              className="rounded-3xl text-gray-800 border-0 hover:bg-transparent hover:text-pink-800 px-10 py-6 w-full sm:w-auto"
            >
              <PlayCircle className="mr-2" /> WATCH A VIDEO TOUR
            </Button>
          </div>
        </div>

        <div className="w-full md:w-[40%]">
          <Image
            className="rounded-3xl w-full h-auto"
            src={image}
            alt="A person Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseParlouriya;
