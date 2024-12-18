import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvide } from '../../Store/Context';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
function FigureDetails() {
      let {id} = useParams();
      
      const [portrait, setPortrait,color, setColor,figures, setFigures,abstracts, setAbstracts,jewellarys, setJewellarys,alter,setAlter]=useContext(ContextProvide)
      const [image,setImage]=useState(false)
      const handleNext=()=>{
        setImage(true)
      }
      const handlePrevious = ()=>{
       setImage(false)
      }
  return (
    <>
    <div className='relative px-20'>
    <Link to={'/figure'}><HiXMark className='absolute right-20 top-10 text-2xl z-10'/></Link>

    {figures.map((value)=>{
      if(value.id==id){
            
            return <>
            <div className='px-32 flex flex-wrap w-full   h-screen '>
                  <div className='w-6/12 pt-40'>
                        <p className='pt-5 font-bold'>Title,Year</p>
                        <p className='pt-5'>model</p>
                        <p className='pt-'>size</p>
                        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima veniam optio perferendis, quae odit repudiandae consectetur corrupti expedita deserunt magni excepturi animi odio aliquam illum maiores amet beatae eos?</p>
                        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima veniam optio perferendis, quae odit repudiandae consectetur corrupti expedita deserunt magni excepturi animi odio aliquam illum maiores amet beatae eos?</p>
                  </div>
                  <div className='w-6/12  flex justify-center mt-28'>
                        <img src={`${image ? value.alter : value.img}`} alt="" className='w-[400px] h-[550px]'/>
                  </div>
            </div>
            </>
      }
    })}
<GrFormNext className={`absolute top-1/2 right-20 text-4xl ${image ? "text-slate-200":"text-black-300"}`} onClick={()=>handleNext()}/>
<GrFormPrevious className={`absolute top-1/2 left-20 text-4xl ${image ? "text-black-200":"text-slate-300"}`} onClick={()=>handlePrevious()}/>

    </div>
    </>
  )
}

export default FigureDetails
