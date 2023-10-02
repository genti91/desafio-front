import Image from "next/image"
import allMovies from "../assets/allMovies.svg"
import ContentCard from "./ContentCard"

export default function PopularMovies ({popular, setIsExpanded, isExpanded}) {
  
  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Popular movies 2021</p>
        <div onClick={() => setIsExpanded((isExpanded.popular ? {} : {popular:true}))} className="flex gap-[10px] items-center cursor-pointer">
          <p className="text-[12px] text-[#606265] font-medium">{isExpanded.popular ? 'Go Back' : 'All movies'}</p>
          <Image src={allMovies} alt="All movies" />
        </div>
      </div>
      {!isExpanded.popular ?
      <div className="flex gap-8 md:flex-nowrap flex-wrap">
        {popular.slice(0, 3).map((movie, i) => (
          <div key={i} className={i === 2 ? "h-[190px] lg:block hidden w-full" : "h-[190px] w-full"}>
            <ContentCard section='popular' item={movie} />
          </div>
        ))}
      </div>
      :
      <div className="flex gap-8 flex-wrap overflow-y-scroll h-full justify-center">
        {popular.map((movie, i) => (
          <div key={i} className={"h-[190px] w-96"}>
            <ContentCard section='popular' item={movie} />
          </div>
        ))}
      </div>
      }
    </div>
  )
}