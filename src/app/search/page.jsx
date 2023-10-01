export const dynamic = 'force-dynamic'
import ContentCard from '@/components/ContentCard'

export default async function Search({searchParams}) {
  let data = await getData(searchParams.s)
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

const getData = async (search) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL+'/api/search/?s='+search, {cache: "no-store"}).then(res => res.json())
    return res.movies
  } catch (err) {
    console.log(err)
    return []
  }
}