import CustomerExp from '@/components/pricingComponent/customer experience/CustomerExp';
import FAQ from '@/components/pricingComponent/FAQ/FAQ';
import PricingAds from '@/components/pricingComponent/PricingAds/PricingAds';
import PricingPlans from '@/components/pricingComponent/pricingPlans/PricingPlans';
import PricingTable from '@/components/pricingComponent/pricingTable/pricingTable';
import SectionHeader from '@/components/SharedComponent/SectionHeader/SectionHeader';
import { Button } from '@/components/ui/button';
import {MoveDown } from 'lucide-react';

const Pricing = () => {

    const sectionHeaderData = {
        sectionHeader: "No header",
        sectionTitle: "Fair pricing—no surprises",
        sectionDescription: "Free data import & 1:1 onboarding assistance. Cancel anytime.",
        isCentered: true,
    }

  return (
  <div className='h-auto bg-white dark:bg-[#0E2148] pt-4'>
    <div>
      <SectionHeader sectionHeaderData={sectionHeaderData} />
    </div>

    <PricingPlans />

    <div className="flex flex-col justify-center items-center gap-4 text-center mt-20">
      <h1 className="font-bold text-black text-3xl leading-[132%]">Ready to take the next step?</h1>
      <p className='font-normal text-black text-md leading-[164%] max-w-[34rem] mt-8'>We&apos;d love to give you a personalized tour and answer all your questions. If you&apos;d rather explore for yourself, start a free trial to see it in action.</p>
    </div>
    <div className='mb-20'>
    <div className='flex items-center justify-center gap-4 mt-8'>
      <Button variant={"outline"} className='rounded-full text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white px-9 py-7'>Book a demo</Button>
      <Button className='rounded-full text-white bg-pink-700 hover:bg-pink-800 px-9 py-7'>Start a free trial</Button>
    </div>
    <div className='flex flex-row justify-center items-center text-pink-800 hover:text-purple-800 space-x-1 mt-8 group'>
      <p className=''>Course plan</p>
      <MoveDown className='mt-1 duration-400 transition-transform group-hover:translate-y-1 h-5' />
    </div>
    </div>
    <PricingAds />
    <PricingTable />
    <CustomerExp />
    <FAQ />
  </div>

  )
}

export default Pricing;
