'use client'
import { useState } from "react"
import Banner from "./Banner"
import ContinueWatching from "./ContinueWatching"
import PopularMovies from "./PopularMovies"

export default function RightSection ({popular, continueWatching, randomMovie}) {
  const [isExpanded, setIsExpanded] = useState({})
  return (
    <div className="2xl:w-[72vw] w-full mx-auto flex flex-col py-10 2xl:px-auto xs:px-16 px-3 gap-[38px]">
      {!isExpanded.continue && !isExpanded.popular && <Banner randomMovie={randomMovie} />}
      {!isExpanded.popular && <ContinueWatching setIsExpanded={setIsExpanded} isExpanded={isExpanded} continueWatching={continueWatching}/>}
      {!isExpanded.continue && <PopularMovies setIsExpanded={setIsExpanded} isExpanded={isExpanded} popular={popular} />}
    </div>
  )
}