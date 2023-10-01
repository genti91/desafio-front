import Image from 'next/image'
import sortArrows from '../assets/sortArrows.svg'
import ContentCard from './ContentCard'
import playArrow from '../assets/playArrow.svg'

export default function NewTrailers ({upcoming, setIsExpanded}) {
  return (
    <div className='flex justify-center'>
      <div className="sm:p-12 p-8 px-14 flex flex-col gap-7 relative w-[28rem]">
        <div className="flex justify-between">
          <p className="font-bold text-lg">New trailers</p>
          <div className="flex gap-3">
            <p className="text-[#606265]">Sort By</p>
            <p>Today</p>
            <Image src={sortArrows} className='mt-[5px]' alt="sortArrows" />
          </div>
        </div>
        <button onClick={() => {setIsExpanded(false); document.body.style.overflowY = "scroll"}} className='2xl:flex absolute sm:right-[-14px] right-[5px] top-28 hidden items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} className='rotate-180 ml-[-3px]' alt="playArrow" /></button>
        <button onClick={() => {setIsExpanded(true); document.body.style.overflowY = "scroll"}} className='2xl:hidden absolute sm:right-[-14px] right-[5px] top-28 flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} className='rotate-180 ml-[-3px]' alt="playArrow" /></button>
        <div className='w-full sm:h-[388px] h-[180px] overflow-y-scroll'>
          {upcoming.map((movie, i) => (
            <div key={i} className='w-full h-[180px] mb-7'>
              <ContentCard section='new-trailers' item={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}