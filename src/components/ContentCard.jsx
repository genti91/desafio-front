'use client'
import Image from 'next/image'
import playArrow from '../assets/playArrow.svg'
import viewsIcon from '../assets/viewsIcon.svg'
import star from '../assets/star.svg'
import fire from '../assets/fire.svg'
import brightnessBar from '../assets/brightnessBar.svg'
import brightnessIcon from '../assets/brightnessIcon.svg'
import fullScreen from '../assets/fullScreen.svg'
import pause from '../assets/pause.svg'
import progressBar from '../assets/progressBar.svg'
import settings from '../assets/settings.svg'
import volume from '../assets/volume.svg'
import friendsWatching from '../assets/friendsWatching.svg'
import { useState } from 'react'

export default function ContentCard ({item, section}) {
  let image = 'https://image.tmdb.org/t/p/original'+item.backdrop_path
  const [hover, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hover)
  }
  return (
    <div className="w-full bg-cover bg-center h-full rounded-[20px] bg-gray-800" style={{backgroundImage: `url(${image})`}} >
      <div className={'cursor-pointer w-full h-full px-[27px] py-[21px] bg-[#333333E5] rounded-[20px] ' + (!hover && 'hidden')} onMouseLeave={() => setHover(false)} onClick={toggleHover}>
        <p className='font-bold max-w-[220px] truncate text-[14px]'>{item.original_title}</p>
        {section !== 'search' ? <><span className='mr-1 text-[#CACACA] text-[10px] font-medium'>Country:</span><span className='mr-1 text-[10px] text-[#CACACA]'>{item.production_countries[0].name === 'United States of America' ? 'United States' : item.production_countries[0].name}</span></>
        :
        <p className='text-[10px] text-[#ADADAD]'>{item.release_date}</p>
        }
        <p className={'text-xs mt-1 overflow-ellipsis overflow-hidden ' + (section === 'search'?'h-16':'h-20')}>{item.overview}</p>
      </div>
      <div className={'w-full h-full ' + (hover && 'hidden')} >
      {section !== 'playing' ?
      <div className='h-[64%] w-full px-6 py-3' onMouseEnter={toggleHover}>
        {section === 'continue' && <div className='flex font-semibold text-[10px] gap-1 bg-[#FFFFFF60] backdrop-blur-sm w-max px-[10px] py-[3px] rounded-[20px]'>#1 Trending <Image src={fire} alt="fire" /></div>}
        <div className='flex gap-2 ml-auto w-max font-semibold text-[10px]'>
          {section === 'new-trailers' && <>
          <Image src={viewsIcon} alt="viewsIcon" />
          {item.id.toString().slice(0, 2).split('').join('.')} M
          </>}
        </div>
        {!item.backdrop_path && 
          <div className='flex items-center justify-center h-full w-full bg-[#00000026] rounded-[20px]'>
            <p className='text-white font-bold text-[20px]'>No image</p>
          </div>
        }
      </div>
      :
      <div className='flex justify-between h-[64%] w-full px-6 py-3'>
        <div className='flex flex-col justify-between'>
          <div className='flex text-[10px] w-max gap-1 items-center font-semibold'><Image src={friendsWatching} alt="friendsWatching" /> 2 viewers</div>
          <div>
            <p className='text-[11px] font-bold'>{item.original_title}</p>
            <p className='text-[10px] text-[#ADADAD]'>{item.release_date}</p>
          </div>
        </div>
        <div className='flex flex-col gap-1 justify-center items-center'>
          <Image src={brightnessIcon} alt="brightnessIcon" />
          <Image src={brightnessBar} alt="brightnessBar" />
        </div>
      </div>
      }

      <div className='flex items-center px-7 justify-between h-[36%] w-full bg-[#FFFFFF26] rounded-t-[10px] rounded-b-[20px] backdrop-blur-sm'>
        <div className='flex gap-4 items-center'>
          <button className='flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={section === 'playing' ? pause : playArrow} alt="playArrow" /></button>
          {section === 'playing' && 
          <>
            <p className='text-[10px] xxs:mx-0 mr-[-8px] text-[#ADADAD]'>32:47</p>
            <Image src={progressBar} alt="progressBar" />
            <p className='text-[10px] xxs:ml-0 ml-[-8px] text-[#ADADAD]'>2:34:28</p>
          </>
          }
          <div className=' text-[11px]'>
            {section !== 'playing' && <p className='font-bold max-w-[100px] truncate'>{item.original_title}</p>}
            {section === 'new-trailers' && <><span className='mr-1 text-[#CACACA] font-medium'>Country:</span><span className='mr-1 text-[#CACACA]'>{item.production_countries[0].name === 'United States of America' ? 'USA' : item.production_countries[0].name}</span></>}
            {(section === 'new-trailers' || section === 'continue' || section === 'search') && <p className='text-[#CACACA]'>{item.release_date}</p>}
            {section === 'popular' && <p className='text-[#CACACA]'>{item.genres[0].name} / {item.genres[1].name}</p>}
          </div>
        </div>

        <div className='flex h-full items-center'>
          <div className='mr-4 w-[2px] h-[24px]' style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.51) 48.96%, rgba(255, 255, 255, 0.00) 100%)'}}></div>
          {(section === 'new-trailers' || section === 'continue') && <div className='bg-white h-max rounded-[20px] px-[15px] py-[3px] text-black font-semibold text-[10px]'>{minutesToHoursAndMinutes(item.runtime)}</div>}
          {(section === 'popular' || section === 'search') && <div className='flex gap-1 font-semibold text-[10px]'><Image src={star} alt="star" /> {item.vote_average.toFixed(1)}</div>}
          {section === 'playing' &&
            <div className='flex gap-[10px]'>
              <Image src={settings} alt="settings" />
              <Image src={volume} alt="volume" />
              <Image src={fullScreen} alt="fullScreen" />
            </div>
          }
        </div>
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