import Image from "next/image"
import allMovies from "../assets/allMovies.svg"
import ContentCard from "./ContentCard"

export default ({continueWatching}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 h-max">
          <p className="font-bold text-lg">Continue Watching</p>
          <div className="w-[1px] rounded h-3 bg-[#454545]"/>
          <p className="text-[12px] text-[#606265]">{continueWatching.length} Movies</p>
        </div>
        <div className="flex gap-[10px] items-center">
          <p className="text-[12px] text-[#606265] font-medium">All movies</p>
          <Image src={allMovies} alt="All movies" />
        </div>
      </div>
      <div className="flex gap-8">
        {continueWatching.slice(2, 4).map((movie, i) => (
          <div key={i} className="h-[170px] w-full">
            <ContentCard section={i == 0 ? 'continue' : 'playing'} item={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}