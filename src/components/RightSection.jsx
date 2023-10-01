import Banner from "./Banner"
import ContinueWatching from "./ContinueWatching"
import PopularMovies from "./PopularMovies"

export default function RightSection ({popular, continueWatching}) {
  return (
    <div className="2xl:w-[72vw] w-full flex flex-col py-10 2xl:pr-16 2xl:pl-24 xs:px-16 px-3 gap-[38px]">
      <Banner randomMovie={popular[Math.floor(Math.random()*popular.length)]} />
      <ContinueWatching continueWatching={continueWatching}/>
      <PopularMovies popular={popular} />
    </div>
  )
}