import Image from "next/image"
import allMovies from "../assets/allMovies.svg"
import ContentCard from "./ContentCard"

export default () => {
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
        <div className="h-[170px] w-full">
          <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157176408011980800/image.png?ex=6517a802&is=65165682&hm=0d77918170fdc466695359eb391f506b6d61663ab4ae2a4912e6cd32bd84b6c8&' />
        </div>
        <div className="h-[170px] w-full">
          <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157176433643360307/image.png?ex=6517a809&is=65165689&hm=23002beae42af76bb1f21417da114539c315dedbb2e88d2aae1734d130abd75d&' />
        </div>
        <div className="h-[170px] w-full">
          <ContentCard image='https://cdn.discordapp.com/attachments/760297004521488416/1157176464773484595/image.png?ex=6517a810&is=65165690&hm=460338e1206212d18d20d8ce4a812d747a86e50b419c73db41d17b25053c4273&' />
        </div>
      </div>
    </div>
  )
}