import Image from 'next/image'
import sortArrows from '../assets/sortArrows.svg'
import ContentCard from './ContentCard'
import playArrow from '../assets/playArrow.svg'

export default () => {
  return (
    <div className="p-12 px-20 flex flex-col gap-7 relative">
      <div className="flex justify-between">
        <p className="font-bold text-lg">New trailers</p>
        <div className="flex gap-3">
          <p className="text-[#606265]">Sort By</p>
          <p>Today</p>
          <Image src={sortArrows} className='mt-[5px]' alt="sortArrows" />
        </div>
      </div>
      <div className='absolute right-[-14px] top-28 flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} className='rotate-180 ml-[-3px]' alt="playArrow" /></div>
      <div className='w-full h-[150px]'>
        <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157082720535588986/image.png?ex=651750c2&is=6515ff42&hm=0a24b87c27a2414095d2ccb9fe04653dc598d77ddf18f3cb6ba5b4d513fa74ae&' />
      </div>
      <div className='w-full h-[150px]'>
        <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157082582572339280/image.png?ex=651750a1&is=6515ff21&hm=a0cc74f31861a18dfbfdffd0eb3131ce0850f4fd52191414fe1003c09f6ade0d&' />
      </div>
    </div>
  )
}