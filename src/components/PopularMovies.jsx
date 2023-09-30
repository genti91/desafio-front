import Image from "next/image"
import allMovies from "../assets/allMovies.svg"
import ContentCard from "./ContentCard"

export default ({popular}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Popular movies 2021</p>
        <div className="flex gap-[10px] items-center">
          <p className="text-[12px] text-[#606265] font-medium">All movies</p>
          <Image src={allMovies} alt="All movies" />
        </div>
      </div>
      <div className="flex gap-8">
        {popular.slice(0, 3).map((movie, i) => (
          <div key={i} className={i === 2 ? "h-[170px] lg:block hidden w-full" : "h-[170px] w-full"}>
            <ContentCard section='popular' item={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}