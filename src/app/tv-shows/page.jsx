import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default async function TVShows() {
  let data = await getData()
  return (
    <div className="lm:h-[90%] flex">
        <LeftSection upcoming={data.upcoming} />
        <RightSection popular={data.popular} continueWatching={data.continueWatching} randomMovie={data.popular[Math.floor(Math.random()*data.popular.length)]} />
    </div>
  )
}

const getData = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/movies', {cache: "no-store"})
    return res.json()
  } catch (err) {
    console.log(err)
    return {popular:[], upcoming:[], continueWatching:[], genres:[]}
  }
}