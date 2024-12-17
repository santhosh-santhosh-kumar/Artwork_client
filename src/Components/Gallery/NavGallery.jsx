import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";

function NavGallery() {
  const [show,setShow]=useState(false)
  return (
    <>
    <div className='  flex flex-wrap items-center w-full px-5 pt-4'>
      <div className=' w-4/12'>
      <HiOutlineMenuAlt4 className='text-4xl' onClick={()=>setShow(true)}/>
      </div>
      <div className='w-2/12'>
            <p>augustine samuel</p>
      </div>
      <div className='w-6/12'>
            <ul className='flex flex-wrap items-center justify-end w-full'>
            <Link to={'/'}><li className="px-8">Home</li></Link>
              <li className="px-8">Creator</li>
              <Link to={'/gallery'}><li className="px-8">Gallery</li></Link>
              <li className="pl-8">Instagram</li>

            </ul>
      </div>
      <div className={`absolute top-16 left-5 z-10  bg-white h-screen w-[120px] ${show ? "translate-x-0" : "-translate-x-[200px]"} transition-all duration-700 ease-linear" }`}>
        <RiCloseLargeLine
                      className="absolute left-[80px] top-2 font-bold"
                      onClick={() => setShow(!show)}
                    />
        <ul className="pt-5 font-bold">
                      <Link to={'/'}><li className="pt-5">Home</li></Link>
                      <li className="pt-5">Creator</li>
                      <Link to={'/gallery'}><li className="pt-5">Gallery</li></Link>
                      <li className="pt-5">Instagram</li>
                    </ul>
      </div>
    </div>
    </>
  )
}

export default NavGallery