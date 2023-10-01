import Banner from "./Banner"
import ContinueWatching from "./ContinueWatching"
import PopularMovies from "./PopularMovies"

export default function RightSection ({popular, continueWatching}) {
  return (
    <div className="2xl:w-[72vw] w-full mx-auto flex flex-col py-10 2xl:px-auto xs:px-16 px-3 gap-[38px]">
      <Banner randomMovie={popular[Math.floor(Math.random()*popular.length)]} />
      <ContinueWatching continueWatching={continueWatching}/>
      <PopularMovies popular={popular} />
    </div>
  )
}