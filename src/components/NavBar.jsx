'use client'
import logo from '../assets/logo.svg';
import searchIcon from '../assets/searchIcon.svg';
import notificationIcon from '../assets/notificationIcon.svg';
import dotsIcon from '../assets/dotsIcon.svg';
import profileArrow from '../assets/profileArrow.svg';
import profilePic from '../assets/profilePic.svg';
import navIndicator from '../assets/navIndicator.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default () => {
  const currentPath = usePathname();
  const navItems = [
    { label: 'Movies', path: '/' },
    { label: 'TV shows', path: '/tv-shows' },
    { label: 'Animations', path: '/animations' },
    { label: 'Plans', path: '/plans' },
  ];
  return (
    <nav style={{borderBottom: '3px solid', borderImage: 'linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(50, 50, 50, 0.51) 47.4%, rgba(255, 255, 255, 0.00) 100%) 1', borderImageSlice: '1',}} className="flex justify-between items-center h-[10%]  px-12 text-black relative" role="navigation">
      <div className='flex gap-36 items-center'>
        <a to="/" className="">
          <Image src={logo} alt="logo" />
        </a>
        <div className="md:flex md:gap-9 hidden">
          {navItems.map((item) => 
            currentPath === item.path ? 
            <Link key={item.label} href={item.path} className='text-white cursor-pointer flex justify-center'>
              {item.label}
              <Image className='absolute bottom-0' src={navIndicator} alt="navIndicator" />
            </Link>
            :
            <Link key={item.label} href={item.path} className='text-[#606265] cursor-pointer'>
              {item.label}
            </Link>
          )}
        </div>
      </div>
      <div className=' flex gap-7'>
        <Image src={searchIcon} alt="searchIcon" />
        <Image src={notificationIcon} alt="notificationIcon" />
        <Image src={dotsIcon} alt="dotsIcon" />
        <a className=' flex gap-2'>
          <Image src={profilePic} alt="profileArrow" />
          <Image src={profileArrow} alt="profileArrow" />
        </a>
      </div>
    </nav>
  )
}