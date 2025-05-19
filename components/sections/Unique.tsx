import React from "react";
import { Button } from "../ui/button";

const Unique = () => {
  return (
    <section className="text-center px-4 py-20 bg-gradient-to-br from-[#fff0f6] via-[#f9f2ff] to-[#f0f7ff]">
      <p className="text-gray-700 my-10">WHY WE’RE DIFFERENT</p>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
        Salon and spa software,
        <br /> finally done right
      </h1>
      <p className="mt-8 text-purple-950 text-lg max-w-xl mx-auto">
        Let’s be real, most salon and spa software isn’t very good. Ugly design,
        slow speeds, interfaces that get in the way. We’re taking a new approach
        and bringing modern tools to salons and spas.
      </p>
      <Button className="mt-8 py-6 px-10 flex items-center gap-2 mx-auto text-white bg-purple-800 hover:bg-purple-900 rounded-3xl hover:scale-105 duration-600 font-semibold">
        Learn Why we&#39;re different
      </Button>
    </section>
  );
};

export default Unique;
