'use client'
import logo from '../assets/logo.svg';
import notificationIcon from '../assets/notificationIcon.svg';
import dotsIcon from '../assets/dotsIcon.svg';
import profileArrow from '../assets/profileArrow.svg';
import profilePic from '../assets/profilePic.svg';
import navIndicator from '../assets/navIndicator.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';
import hamburger from '../assets/hamburger.svg';
import { useState } from 'react';
import cross from '../assets/cross.svg';

export default function NavBar () {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { label: 'Movies', path: '/' },
    { label: 'TV shows', path: '/tv-shows' },
    { label: 'Animations', path: '/animations' },
    { label: 'Plans', path: '/plans' },
  ];
  return (
    <nav className="flex justify-between items-center h-[10%]  sm:px-12 px-5 text-black relative" style={{borderBottom: '3px solid', borderImage: 'linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(50, 50, 50, 0.51) 47.4%, rgba(255, 255, 255, 0.00) 100%) 1', borderImageSlice: '1',}} role="navigation">
      <div className='flex gap-36 items-center'>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="lg:flex md:gap-9 hidden">
          {navItems.map((item) => 
            currentPath === item.path || (item.path === '/' && currentPath.includes('search'))  ? 
            <Link key={item.label} href={item.path} className='text-white cursor-pointer flex justify-center'>
              {item.label}
              <Image className='absolute bottom-0' src={navIndicator} alt="navIndicator" />
            </Link>
            :
            <Link key={item.label} href={item.path} className='text-[#606265] hover:text-white cursor-pointer'>
              {item.label}
            </Link>
          )}
        </div>
      </div>
      <div className=' flex gap-4 items-center'>
        <SearchBar />
        <button className='lg:hidden block' onClick={() => { setMenuOpen(true); document.body.style.overflowY = "hidden" }}>
          <Image src={hamburger} alt="=" />
        </button>
        <div className='lg:flex hidden gap-7'>
          <Image src={notificationIcon} alt="notificationIcon" />
          <Image src={dotsIcon} alt="dotsIcon" />
          <div className=' flex gap-2'>
            <Image src={profilePic} alt="profileArrow" />
            <Image src={profileArrow} alt="profileArrow" />
          </div>
        </div>
      </div>
      <PhoneMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} navItems={navItems} currentPath={currentPath}/>
    </nav>
  )
}

const PhoneMenu = ({ menuOpen, setMenuOpen, navItems, currentPath}) => {
  const closeMenu = () => { setMenuOpen(false); document.body.style.overflowY = "scroll" }
  return (
    <div className={menuOpen ? 'z-40 fixed top-0 right-0 w-screen lg:hidden h-screen bg-[#17171B] ease-in-out duration-300' : 'z-40 h-screen lg:hidden fixed right-[-120%] top-0 w-screen p-10 ease-in-out duration-300'}>
      <div className=' flex px-4 py-4 w-full justify-end border-[#323232] border-b'>
        <div className='mr-auto flex items-center mt-1 px-4 py-2'>
          <Image src={logo} alt="logo" />
        </div>
        <button onClick={closeMenu} data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-gray-200' aria-controls='navbar-default' aria-expanded='false' >
          <Image src={cross} alt="cross" />
        </button>
      </div>
      <div className='flex flex-col px-2'>
        <div className='flex gap-7 w-full justify-center p-4 border-[#323232] border-b'>
          <Image src={notificationIcon} alt="notificationIcon" />
          <Image src={dotsIcon} alt="dotsIcon" />
          <div className=' flex gap-2'>
            <Image src={profilePic} alt="profileArrow" />
            <Image src={profileArrow} alt="profileArrow" />
          </div>
        </div>
        {navItems.map((item) => 
            <Link key={item.label} href={item.path} onClick={closeMenu} className={'py-[15px] pr-4 pl-3 text-base border-[#323232] border-b ' + (currentPath === item.path || (item.path === '/' && currentPath.includes('search'))  ? 'text-white' : 'text-[#606265] hover:text-white')}>
              {item.label}
            </Link>
          )}
      </div>
    </div>
  )
}