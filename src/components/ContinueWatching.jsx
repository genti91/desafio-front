import Image from "next/image"
import allMovies from "../assets/allMovies.svg"
import ContentCard from "./ContentCard"

export default () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-4 h-max">
          <p className="font-bold text-lg">Continue Watching</p>
          <div className="w-[1px] rounded h-3 bg-[#454545]"/>
          <p className="text-[12px] text-[#606265]">4 Movies</p>
        </div>
        <div className="flex gap-[10px] items-center">
          <p className="text-[12px] text-[#606265] font-medium">All movies</p>
          <Image src={allMovies} alt="All movies" />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="h-[170px] w-full">
          <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157173444396458085/image.png?ex=6517a540&is=651653c0&hm=097c997a6f1f9293445498759d5ce9f318af0836598a21785911a144a88b3e7e&' />
        </div>
        <div className="h-[170px] w-full">
          <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157173950296629278/image.png?ex=6517a5b9&is=65165439&hm=b5ed272ecc00721658d0446f0d59c15fa4afd4c89afd3d671b1b344c7e624e85&' />
        </div>
      </div>
    </div>
  )
}