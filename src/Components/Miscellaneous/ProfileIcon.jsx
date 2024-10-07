import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useSelector } from 'react-redux';

const ProfileIcon = () => {
    const [tooltipVisibility,setTooltipVisibility]=useState(true);
    const user=useSelector(state=>state.user);
    // console.log(user)
    useEffect(()=>{
        setTimeout(()=>{
            setTooltipVisibility(false);
        },4000)
    },[])
  return (
    <div className='relative group'>
    <svg width="0" height="0">
      <defs>
        <linearGradient id="icon-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#803BEA" offset="0%" />
          <stop stopColor="#ec4899" offset="50%" />
          <stop stopColor="#f43f5e" offset="100%" />
        </linearGradient>
      </defs>
    </svg>
    <FaRegCircleUser size={20} style={{ fill: 'url(#icon-gradient)'}} />
    <div  className={`absolute translate-x-[20%] group-hover:block translate-y-2 top-full right-0 ${!tooltipVisibility&&'hidden'}`}>
    <div class="text-sm font-bold p-2 shadow-md border text-nowrap w-full bg-slate-200 text-slate-950 rounded-lg relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-slate-200 before:rotate-45 before: before:left-[70%]  before:-top-1">Welcome ! {user?.profile?.first_name}</div>
    </div>
  </div>
  )
}

export default ProfileIcon