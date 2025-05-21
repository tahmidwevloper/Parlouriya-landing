import ChooseParlouriya from "@/components/sections/ChooseParlouriya";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import QuickOverview from "@/components/sections/QuickOverview";
import Ratings from "@/components/sections/Ratings";
import Unique from "@/components/sections/Unique";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#0E2148]">
      <Hero />
      <QuickOverview />
      <Ratings /> {/**Problem for responsiveness */}
      <Unique />
      <Features />
      <ChooseParlouriya />
    </div>
  );
}
