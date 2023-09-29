import Banner from "./Banner"
import ContinueWatching from "./ContinueWatching"
import PopularMovies from "./PopularMovies"

export default () => {
  return (
    <div className="w-[72vw] flex flex-col h-full py-12 pr-16 pl-24 gap-[38px]">
      <Banner />
      <ContinueWatching />
      <PopularMovies />
    </div>
  )
}