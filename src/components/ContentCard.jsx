import Image from 'next/image'
import playArrow from '../assets/playArrow.svg'
import viewsIcon from '../assets/viewsIcon.svg'
import star from '../assets/star.svg'
import fire from '../assets/fire.svg'

export default ({item, section}) => {
  let image = 'https://image.tmdb.org/t/p/original'+item.backdrop_path
  return (
    <div className="w-full bg-cover bg-center h-full rounded-[20px]" style={{backgroundImage: `url(${image})`}} >
      <div className='h-[64%] w-full px-6 py-3'>
        {section === 'continue' && <div className='flex font-semibold text-[10px] gap-1 bg-[#FFFFFF60] backdrop-blur-sm w-max px-[10px] py-[3px] rounded-[20px]'>#1 Trending <Image src={fire} alt="fire" /></div>}
        <div className='flex gap-2 ml-auto w-max font-semibold text-[10px]'>
          {section === 'new-trailers' && <>
          <Image src={viewsIcon} alt="viewsIcon" />
          {Math.floor(Math.random()*10)}.{Math.floor(Math.random()*10)} M
          </>}
        </div>
      </div>

      <div className='flex items-center px-7 justify-between h-[36%] w-full bg-[#FFFFFF26] rounded-t-[10px] rounded-b-[20px] backdrop-blur-sm'>
        <div className='flex gap-4 items-center'>
          <button className='flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} alt="playArrow" /></button>
          <div className=' text-[11px]'>
            <p className='font-bold max-w-[100px] truncate'>{item.original_title}</p>
            {section === 'new-trailers' && <><span className='mr-1 text-[#CACACA] font-medium'>Country:</span><span className='mr-1 text-[#CACACA]'>{item.production_countries[0].name === 'United States of America' ? 'USA' : item.production_countries[0].name}</span></>}
            {(section === 'new-trailers' || section === 'continue') && <p className='text-[#CACACA]'>{item.release_date}</p>}
            {section === 'popular' && <p className='text-[#CACACA]'>{item.genres[0].name} / {item.genres[1].name}</p>}
          </div>
        </div>
        <div className='flex h-full items-center'>
          <div className='mr-4 w-[2px] h-[24px]' style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.51) 48.96%, rgba(255, 255, 255, 0.00) 100%)'}}></div>
          {(section === 'new-trailers' || section === 'continue') && <div className='bg-white h-max rounded-[20px] px-[15px] py-[3px] text-black font-semibold text-[10px]'>{minutesToHoursAndMinutes(item.runtime)}</div>}
          {section === 'popular' && <div className='flex gap-1 font-semibold text-[10px]'><Image src={star} alt="star" /> {item.vote_average.toFixed(1)}</div>}
        </div>
      </div>

    </div>
  )
}

function minutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hoursStr = String(hours).padStart(2, '0');
  const minutesStr = String(remainingMinutes).padStart(2, '0');
  const timeString = `${hoursStr}:${minutesStr}`;
  return timeString;
}