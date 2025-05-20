import React from "react";
import { Button } from "../ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import image from "../../public/cta-image-desktop.webp";

const ChooseParlouriya = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-white p-8 shadow-2xl gap-20 rounded-4xl">
        <div className="pt-20 mx-10">
          <h2 className="text-4xl font-bold">
            Find out if Mangomint <br /> is right for you
          </h2>
          <div className="flex justify-start items-center gap-5 my-10">
            <Button
              variant={"outline"}
              className="rounded-3xl text-md px-10 py-6 text-pink-700 border-2 border-pink-700 hover:text-pink-600"
            >
              Book a live demo
            </Button>
            <Button className="rounded-3xl text-md px-10 py-6 text-white hover:text-white bg-pink-700 hover:bg-pink-800 border-pink-700">
              Try it now
            </Button>
          </div>
          <div className="flex justify-start items-center my-10">
            <Button
              variant={"outline"}
              className="rounded-3xl text-gray-800 border-0 hover:bg-none hover:text-pink-800 px-12 py-8"
            >
              <PlayCircle /> WATCH A VIDEO TOUR
            </Button>
          </div>
        </div>
        <div>
          <Image className="rounded-4xl" src={image} alt="A person Image" />
        </div>
      </div>
    </div>
  );
};

export default ChooseParlouriya;
