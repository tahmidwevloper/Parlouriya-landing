import { PlayCircle } from "lucide-react";
import SectionHeader from "../SharedComponent/SectionHeader/SectionHeader";

const Hero = () => {

  const sectionHeaderData = {
    sectionHeader : "No header",
    sectionTitle : "Everything you need to power your salon and spa",
    sectionDescription : "Booking, payments, automations, and more. Enjoy a complete platform that is fast, beautiful, intuitive, and works on any device.",
    isCentered : true,
   }

  return (
    <section className="text-center px-4 py-20 bg-gradient-to-br from-[#f5f796] via-[#f3a7d1] to-[#7963f7] dark:bg-[#0E2148] dark:bg-none">
      <div className="pb-6">
        <SectionHeader sectionHeaderData={sectionHeaderData}/>
      </div>
      
      <button className="mt-8 flex items-center gap-2 mx-auto text-pink-600 hover:text-purple-600 hover:scale-105 duration-300 font-semibold">
        <PlayCircle size={22} />
        WATCH A VIDEO TOUR
      </button>
    </section>
  );
};

export default Hero;
