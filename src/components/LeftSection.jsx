import FavouriteGenres from "./FavouriteGenres"
import NewTrailers from "./NewTrailers"

export default function LeftSection ({upcoming}) {
  return (
    <div className="w-[25rem] hidden flex-col h-full border-r border-[#323232] 2xl:flex">
      <NewTrailers upcoming={upcoming} />
      <FavouriteGenres />
    </div>
  )
}