import ContentCard from '@/components/ContentCard'
import Image from "next/image"
import allMovies from "../../assets/allMovies.svg"
import Link from 'next/link'

export default async function Search({searchParams}) {
  let data = await getData(searchParams.s)
  return (
    <div className="flex flex-col gap-5 h-[90%] 2xl:w-[72vw] w-full mx-auto py-10 2xl:px-auto xs:px-16 px-3">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Search results for "{searchParams.s}"</p>
        <Link href='/'>
          <div className="flex gap-[10px] items-center cursor-pointer">
            <p className="text-[12px] text-[#606265] font-medium">Go Back</p>
            <Image src={allMovies} alt="All movies" />
          </div>
        </Link>
      </div>
      <div className="flex gap-8 flex-wrap overflow-y-scroll h-full justify-center">
        {data.map((movie, i) => (
          <div key={i} className={i === 2 ? "h-[190px] lg:block hidden w-96" : "h-[190px] w-96"}>
            <ContentCard section='search' item={movie} />
          </div>
        ))}
        {data.length === 0 && <div className='text-3xl'>No movies found</div>}
      </div>
    </div>
  )
}

const getData = async (search) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/search/?s='+search, {cache: "no-store"}).then(res => res.json())
    return res.movies
  } catch (err) {
    console.log(err)
    return []
  }
}