import Banner from "./Banner"
import ContinueWatching from "./ContinueWatching"
import PopularMovies from "./PopularMovies"

export default ({popular, continueWatching}) => {
  return (
    <div className="2xl:w-[72vw] w-full flex flex-col h-full py-12 pr-16 pl-24 gap-[38px]">
      <Banner randomMovie={popular[Math.floor(Math.random()*popular.length)]} />
      <ContinueWatching continueWatching={continueWatching}/>
      <PopularMovies popular={popular} />
    </div>
  )
}