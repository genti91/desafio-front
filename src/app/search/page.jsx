'use client'
import ContentCard from '@/components/ContentCard'
import { useSearchParams } from 'next/navigation' 

export default async function Home() {
  let data = await getData()
  return (
    <div className="h-[90%] flex justify-center py-10">
      {data.length === 0 ? <div className='text-3xl'>No movies found</div>
      :
      <div className='flex flex-wrap gap-10 w-[80%] justify-center'>
        {data.map((movie, index) => {
          return (
            <div className='h-[150px] w-80'>
              {console.log(movie.backdrop_path)}
              <ContentCard section='search' item={movie} key={index} />
            </div>
          )
        })}
      </div>
      }
    </div>
  )
}

const getData = async () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('s')
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/search/?s='+search, {cache: "no-store"})
    return res.json()
  } catch (err) {
    console.log(err)
    return []
  }
}