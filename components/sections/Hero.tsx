// components/sections/Hero.tsx
import { PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-center px-4 py-20 bg-gradient-to-br from-[#f5f796] via-[#f3a7d1] to-[#7963f7] dark:bg-[#0E2148] dark:bg-none">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl mx-auto">
        Everything you need to <br />
        power your salon and spa
      </h1>
      <p className="mt-8 text-purple-950 dark:text-gray-300 text-lg max-w-xl mx-auto">
        Booking, payments, automations, and more. Enjoy a complete platform that
        is fast, beautiful, intuitive, and works on any device.
      </p>
      <button className="mt-8 flex items-center gap-2 mx-auto text-pink-600 hover:text-purple-600 hover:scale-105 duration-300 font-semibold">
        <PlayCircle size={22} />
        WATCH A VIDEO TOUR
      </button>
    </section>
  );
};

export default Hero;
