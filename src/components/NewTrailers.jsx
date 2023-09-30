import Image from 'next/image'
import sortArrows from '../assets/sortArrows.svg'
import ContentCard from './ContentCard'
import playArrow from '../assets/playArrow.svg'

export default ({upcoming}) => {
  return (
    <div className="p-12 px-14 flex flex-col gap-7 relative">
      <div className="flex justify-between">
        <p className="font-bold text-lg">New trailers</p>
        <div className="flex gap-3">
          <p className="text-[#606265]">Sort By</p>
          <p>Today</p>
          <Image src={sortArrows} className='mt-[5px]' alt="sortArrows" />
        </div>
      </div>
      <div className='absolute right-[-14px] top-28 flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} className='rotate-180 ml-[-3px]' alt="playArrow" /></div>
      
      <div className='w-full h-[328px] overflow-y-scroll'>
        {upcoming.map((movie, i) => (
          <div key={i} className='w-full h-[150px] mb-7'>
            <ContentCard section='new-trailers' item={movie} />
          </div>
        ))}

      </div>


    </div>
  )
}