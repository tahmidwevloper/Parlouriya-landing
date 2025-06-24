import { TSectionHeaderData } from "./SectionHeaderType"

const SectionHeader = ({sectionHeaderData} : TSectionHeaderData) => {

  return (
    <div className={`mt-[140px] mb-9 ${sectionHeaderData?.isCentered ? 'flex justify-center' : ''}`}>
      <div className={`flex flex-col items-center gap-4 max-w-[641px] max-h-[126px] text-center `}>
        <h5>{sectionHeaderData?.sectionHeader == "No header" ? "" : sectionHeaderData?.sectionHeader}</h5>
        <h1 className="font-bold text-black text-5xl leading-[132%]">{sectionHeaderData?.sectionTitle == "No title" ? "" : sectionHeaderData?.sectionTitle}</h1>
        {/* <h2 className='font-bold text-green-600 text-5xl leading-[132%]'>{sectionHeaderData?.sectionDescription}</h2> */}
        {sectionHeaderData?.sectionDescription === "No description" ? "" : <p className='font-normal text-black text-md leading-[164%]'>{sectionHeaderData?.sectionDescription}</p>}
      </div>
    </div>
  )
}

export default SectionHeader;
