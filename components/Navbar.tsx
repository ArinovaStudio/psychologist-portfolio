"use client";
import React, { useState } from 'react'

function Navbar() {
  const [active,setActive] = useState("home");
  const showActive = (link: string) => {
    return `text-gray-400 text-center max-w-30 text-lg whitespace-nowrap py-3 px-3 ${link===active && "bg-primary py-3 px-3 rounded-full text-white"}`
  };
  return (
    <div className='w-full flex'>
      <div className='w-full flex my-5 px-2 py-2 rounded-full mx-20 bg-foreground'>
        <ul className='grid grid-cols-7 w-full items-center'>
        <li className={`${showActive("home")}`}>Home</li>
        <li className={`${showActive("about")}`}>About</li>
        <li className={`${showActive("service")}`}>Service</li>
        <li className='text-xl rounded-full uppercase text-gray-200'>shruti sharma</li>
        <li className={`${showActive("case-studies")}`}>Case Studies</li>
        <li className={`${showActive("blogs")}`}>Blogs</li>
        <li className={`${showActive("contact")}`}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar