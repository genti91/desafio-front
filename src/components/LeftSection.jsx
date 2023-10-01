'use client'
import { useState } from "react"
import FavouriteGenres from "./FavouriteGenres"
import NewTrailers from "./NewTrailers"
import Image from 'next/image'
import playArrow from '../assets/playArrow.svg'

export default function LeftSection ({upcoming}) {
  const [isExpanded, setIsExpanded] = useState(true)
  return (
    <div>
      <div className={"w-[28rem] hidden flex-col h-full border-r border-[#323232] " + (isExpanded && '2xl:flex')}>
        <NewTrailers setIsExpanded={setIsExpanded} upcoming={upcoming} />
        <FavouriteGenres />
      </div>
      <div className={ !isExpanded ? 'z-30 fixed justify-center left-0 w-screen 2xl:hidden h-screen bg-[#17171B] ease-in-out duration-300' : 'z-40 h-screen lg:hidden fixed left-[-120%] w-screen p-10 ease-in-out duration-300'}>
        <div className={"w-full flex flex-col h-full mx-auto top"}>
          <NewTrailers setIsExpanded={setIsExpanded} upcoming={upcoming} />
          <FavouriteGenres />
        </div>
      </div>
      {!isExpanded && <button onClick={() => setIsExpanded(true)} className='absolute left-[-8px] top-52 2xl:flex hidden items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} alt="playArrow" /></button>}
      {isExpanded && <button onClick={() => {setIsExpanded(false); document.body.style.overflowY = "hidden"}} className='absolute left-[-8px] top-52 flex 2xl:hidden items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} alt="playArrow" /></button>}
    </div>
  )
}