import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import NavBar from '../NavBar/NavBar';
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";

function NavGallery() {
  const [
                portrait,
                setPortrait,
                color,
                setColor,
                figures,
                setFigures,
                abstracts,
                setAbstracts,
                jewellarys,
                setJewellarys,
                alter,
                setAlter,
                sculptures,
                setSculptures,
                show, setShow,
              ] =useContext(ContextProvide)
              useEffect(()=>{
                setShow(false)
              },[])
  return (
    <>
    <div className='fixed top-0 flex flex-wrap items-center w-full px-5 pt-4 pb-4 bg-white border border-b-2 z-10'>
      <div data-aos="fade-right" data-aos-duration="1000" className=' w-4/12'>
      <HiOutlineMenuAlt4 className='text-4xl' onClick={()=>setShow(true)}/>
      </div>
      <div className='w-2/12'>
            <p>augustine samuel</p>
      </div>
      <div  className='w-6/12'>
            <ul  data-aos="fade-left" data-aos-duration="1000" className='flex flex-wrap items-center justify-end w-full'>
            <Link to={'/'} onClick={()=>window.scrollTo(0,0)}><li className="px-8">Home</li></Link>
            <Link to={'/creater'} onClick={()=>window.scrollTo(0,0)}><li className="px-8">Creator</li></Link>
              <Link to={'/gallery'} onClick={()=>window.scrollTo(0,0)}><li className="px-8">Gallery</li></Link>
              <a href="https://www.instagram.com/augustinesamuelgallery/" target='_blank'><li className="pl-8">Instagram</li></a>

            </ul>
      </div>
      {/* <div className={`absolute top-0 left-0 px-4 py-6 z-20  bg-white h-screen overflow-hidden w-[100px] ${show ? "translate-x-0" : "-translate-x-[100px]"} transition-all duration-700 ease-linear" }`}>
        
      </div> */}
      
    </div>
    <NavBar />
    </>
  )
}

export default NavGallery