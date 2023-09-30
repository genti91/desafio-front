import Image from "next/image"
import addGenres from '../assets/addGenres.svg'

export default () => {
  return (
    <div className=" bg-[#1E1E21] w-full h-full pt-12 px-14 flex flex-col gap-5">
      <p className="font-bold text-lg">Favourite genres</p>
      <div className="flex gap-5 flex-wrap">
        {[{name:"Action", color:'#8769FF'}, {name:"Western", color:'#F36F45'}, {name:"Adventures", color:'#8769FF'}, {name:"Drama", color:'#F36F45'}, {name:"Sci-Fie", color:'#61D1EA'}].map((genre, index) => (
          <div key={index} className='w-max font-semibold p-2 px-3 rounded-[20px] text-[10px]' style={{backgroundColor: genre.color}}>
            {genre.name}
          </div>
        ))}
      </div>
      <div className="flex gap-3 font-semibold text-[11px]">
        <Image src={addGenres} alt="addGenres" />
        Add your favourite genres
      </div>
      <div className="flex gap-5 flex-wrap">
        {['Crime', 'Comedy', 'Thriller'].map((genre, index) => (
          <div key={index} className='w-max font-semibold p-2 px-3 rounded-[20px] text-[10px] bg-[#262629]'>
            {genre}
          </div>
        ))}
      </div>
    </div>
  )
}