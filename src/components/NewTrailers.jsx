import Image from 'next/image'
import sortArrows from '../assets/sortArrows.svg'
import ContentCard from './ContentCard'
import playArrow from '../assets/playArrow.svg'
import { useEffect, useState } from 'react'

export default function NewTrailers ({upcoming, setIsExpanded}) {
  const [sort , setSort] = useState('Today')
  const sortOptions = ['Today', 'New', 'Old']
  const [movies, setMovies] = useState(upcoming)
  const [showOptions, setShowOptions] = useState(false)
  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }
  useEffect(() => {
    if (sort === 'Today') {
      setMovies(upcoming)
    } else if (sort === 'New') {
      setMovies([...upcoming].sort((a, b) => new Date(b.release_date) - new Date(a.release_date)))
    } else if (sort === 'Old') {
      setMovies([...upcoming].sort((a, b) => new Date(a.release_date) - new Date(b.release_date)))
    }
  }, [sort])
  return (
    <div className='flex justify-center'>
      <div className="sm:p-12 p-8 px-14 flex flex-col gap-7 relative w-[28rem]">
        <div className="flex justify-between">
          <p className="font-bold text-lg">New trailers</p>
          <div className="flex gap-3 relative">
            <p className="text-[#606265]">Sort By</p>
            <div onClick={toggleOptions} className="flex gap-3 relative cursor-pointer">
              <p>{sort}</p>
              <Image src={sortArrows} className='mt-[5px]' alt="sortArrows" />
              {showOptions && <ul className='bg-[#1E1E21] border border-gray-900 rounded-md shadow-md absolute top-6 p-3 flex flex-col gap-3'>
                {sortOptions.map((option, i) => (
                  <li key={i}  onClick={() => {setSort(option);toggleOptions()}} className='hover:bg-[#111112bf] rounded cursor-pointer px-1'>{option}</li>
                ))}
              </ul>}
            </div>
          </div>
        </div>
        <button onClick={() => {setIsExpanded(false); document.body.style.overflowY = "scroll"}} className='2xl:flex absolute sm:right-[-14px] right-[5px] top-28 hidden items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} className='rotate-180 ml-[-3px]' alt="playArrow" /></button>
        <button onClick={() => {setIsExpanded(true); document.body.style.overflowY = "scroll"}} className='2xl:hidden absolute sm:right-[-14px] right-[5px] top-28 flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} className='rotate-180 ml-[-3px]' alt="playArrow" /></button>
        <div className='w-full sm:h-[388px] h-[180px] pr-2 overflow-y-scroll'>
          {movies.map((movie, i) => (
            <div key={i} className='w-full h-[180px] mb-7'>
              <ContentCard section='new-trailers' item={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}