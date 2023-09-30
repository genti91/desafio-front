import Image from 'next/image'
import playArrow from '../assets/playArrow.svg'
import friendsWatching from '../assets/friendsWatching.svg'

export default ({randomMovie}) => {
  const image = 'https://image.tmdb.org/t/p/original'+randomMovie.backdrop_path
  return (
    <div className="w-full flex flex-col justify-between p-4 pt-3 h-[134px] bg-black rounded-[20px] bg-cover bg-center" style={{backgroundImage: `url(${image})`}}>
      <div className='text-[10px] font-semibold flex gap-[10px] items-center'>
        <Image src={friendsWatching} alt="friendsWatching" />
        +2 friends are watching
      </div>
      <div className='flex justify-between'>
        <button className="w-max mt-auto h-min justify-center items-center flex gap-[5px] rounded-[5px] px-[10px] py-[5px] text-[10px] font-semibold bg-[#F36F45]">
          <div className='flex items-center justify-center h-5 w-5 bg-[#C4C4C480] rounded-full'><Image src={playArrow} alt="playArrow" /></div>
          Watch Now
        </button>
        <p className='font-black text-5xl font-sans mr-5 mb-3'>{randomMovie.original_title.toUpperCase()}</p>
      </div>
    </div>
  )
}