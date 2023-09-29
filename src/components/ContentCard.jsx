
import Image from 'next/image'
import playArrow from '../assets/playArrow.svg'
import viewsIcon from '../assets/viewsIcon.svg'

export default ({image, item}) => {
  return (
    <div className="w-full bg-cover bg-center h-full rounded-[20px]" style={{backgroundImage: `url(${image})`}} >
      <div className='h-[64%] w-full px-7 py-5'>
        <div className='flex gap-2 ml-auto w-max font-semibold text-[10px]'>
          <Image src={viewsIcon} alt="viewsIcon" />
          2.3 M
        </div>
      </div>

      <div className='flex items-center px-7 justify-between h-[36%] w-full bg-[#FFFFFF26] rounded-t-[10px] rounded-b-[20px] backdrop-blur-sm'>
        <div className='flex gap-4 items-center'>
          <button className='flex items-center justify-center h-7 w-7 bg-[#C4C4C4] rounded-full'><Image src={playArrow} alt="playArrow" /></button>
          <div className=' text-[11px]'>
            <p className='font-bold'>Bheeshma Parvam</p>
            <span className='mr-1 text-[#CACACA] font-medium'>Country:</span><span className='mr-1 text-[#CACACA]'>India</span>
            <p className='text-[#CACACA]'>3h ago</p>
          </div>
        </div>
        <div className='flex h-full items-center'>
          <div className='mr-4 w-[2px] h-[24px]' style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.51) 48.96%, rgba(255, 255, 255, 0.00) 100%)'}}></div>
          <div className='bg-white h-max rounded-[20px] px-[15px] py-[3px] text-black font-semibold text-[10px]'>01:29</div>
        </div>
      </div>

    </div>
  )
}