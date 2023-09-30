'use client'
import Image from 'next/image';
import searchIcon from '../assets/searchIcon.svg';
import { useState } from 'react';
import './test.css'
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState('');
  const router = useRouter();

  const toggleExpanded = () => {
    if (value) return
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push(`/search?s=${value}`)
    }
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onMouseEnter={toggleExpanded}
        >
        <Image onClick={() => {if(value) router.push(`/search?s=${value}`)}} src={searchIcon} alt="searchIcon" />
      </div>
      {isExpanded && (
        <input
          onMouseLeave={toggleExpanded}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="absolute right-0 bottom-[-10px] mr-9 mt-5 w-40 p-2 bg-transparent text-white border-b-2 border-white focus:outline-none"
          placeholder="Search..."
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
}