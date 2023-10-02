'use client'
import Image from "next/image"
import addGenres from '../assets/addGenres.svg'
import { useState } from "react"

export default function FavouriteGenres () {
  const [selectedGenres, setSelectedGenres] = useState([
    {name:"Action", color:'#8769FF'}, 
    {name:"Western", color:'#F36F45'}, 
    {name:"Adventures", color:'#8769FF'}, 
    {name:"Drama", color:'#F36F45'}, 
    {name:"Sci-Fie", color:'#61D1EA'}
  ])
  const [genres, setGenres] = useState([
    {name:"Crime", color:'#8769FF'},
    {name:"Comedy", color:'#F36F45'},
    {name:"Thriller", color:'#61D1EA'}
  ])
  const addGenre = (genre) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter(g => g.name !== genre.name))
  }
  const removeGenre = (genre) => {
    setGenres([...genres, genre])
    setSelectedGenres(selectedGenres.filter(g => g.name !== genre.name))
  }
  return (
    <div className="w-full h-full flex justify-center bg-[#1E1E21]">
      <div className="h-full py-10 px-14 flex flex-col gap-5">
        <p className="font-bold text-lg">Favourite genres</p>
        <div className="flex gap-5 flex-wrap">
          {selectedGenres.map((genre, index) => (
            <div key={index} onClick={()=>removeGenre(genre)} className='cursor-pointer w-max font-semibold p-2 px-3 rounded-[20px] text-[10px]' style={{backgroundColor: genre.color}}>
              {genre.name}
            </div>
          ))}
        </div>
        <div className="flex gap-3 font-semibold text-[11px]">
          <Image src={addGenres} alt="addGenres" />
          Add your favourite genres
        </div>
        <div className="flex gap-5 flex-wrap">
          {genres.map((genre, index) => (
            <div key={index} onClick={()=>addGenre(genre)} className='cursor-pointer w-max font-semibold p-2 px-3 rounded-[20px] text-[10px] bg-[#262629]'>
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}