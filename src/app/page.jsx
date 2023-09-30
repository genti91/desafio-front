import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default async function Home() {
  let data = await getData()
  return (
    <div className="h-[90%] flex">
        <LeftSection upcoming={data.upcoming} />
        <RightSection popular={data.popular} continueWatching={data.continueWatching} />
    </div>
  )
}

const getData = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/movies', {cache: "no-store"})
    return res.json()
  } catch (err) {
    console.log(err)
    return {popular:[], upcoming:[], continueWatching:[], genres:[]}
  }
}