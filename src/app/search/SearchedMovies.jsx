'use client'
import ContentCard from '@/components/ContentCard'
import { useEffect, useState } from 'react'

export default function SearchedMovies({searchParams}) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL+'/api/search/?s='+searchParams.s, {cache: "no-store"}).then(res => res.json()).then(res => setData(res.movies))
  }, [searchParams])
  return (
    <div className="h-[90%] flex justify-center py-10">
      {data.length === 0 ? <div className='text-3xl'>No movies found</div>
      :
      <div className='flex flex-wrap gap-10 w-[80%] justify-center'>
        {data.map((movie, index) => {
          return (
            <div key={index} className='h-[150px] w-80'>
              <ContentCard section='search' item={movie} key={index} />
            </div>
          )
        })}
      </div>
      }
    </div>
  )
}