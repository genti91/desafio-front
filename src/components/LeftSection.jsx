import FavouriteGenres from "./FavouriteGenres"
import NewTrailers from "./NewTrailers"

export default () => {
  return (
    <div className="w-[28vw] flex flex-col h-full border-r border-[#323232]">
      <NewTrailers />
      <FavouriteGenres />
    </div>
  )
}