import { Button } from "../ui/button";
import SectionHeader from "../SharedComponent/SectionHeader/SectionHeader";

const Unique = () => {

  const sectionHeaderData = {
    sectionHeader: "WHY WE’RE DIFFERENT",
    sectionTitle: "Salon and spa software, finally done right",
    sectionDescription: `Let’s be real, most salon and spa software isn’t very good. Ugly design,
                          slow speeds, interfaces that get in the way. We’re taking a new approach
                          and bringing modern tools to salons and spas.`,
    isCentered: true,
  }

  return (
    <section className="text-center px-4 py-20 bg-gradient-to-br from-[#fff0f6] via-[#f9f2ff] to-[#f0f7ff] dark:bg-[#0E2148] dark:bg-none">
      <div className="pb-20">
        <SectionHeader sectionHeaderData={sectionHeaderData} />
      </div>
      <Button className="mt-8 py-6 px-10 flex items-center gap-2 mx-auto text-white dark:text-purple-950 bg-purple-800 dark:bg-purple-200 hover:bg-purple-900 rounded-3xl hover:scale-105 duration-300 font-semibold">
        Learn Why we&#39;re different
      </Button>
    </section>
  );
};

export default Unique;
