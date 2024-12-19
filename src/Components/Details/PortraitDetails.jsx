import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvide } from '../../Store/Context';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";

function PortraitDetails() {
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
    <div>
    <div className='relative px-2 lg:px-20 lg:block hidden'>
    <Link to={'/portrait'}><HiXMark className='absolute lg:right-20 lg:top-10 right-5 top-20 text-2xl z-10'/></Link>

    {portrait.map((value)=>{
      if(value.id==id){
            
            return <>
            <div className='lg:px-32 lg:flex lg:flex-wrap w-full h-screen overflow-hidden'>
                  <div data-aos="fade-right"  data-aos-duration="1000" className='w-6/12 pt-40 '>
                        <p className='pt-5 font-bold'>Title,Year</p>
                        <p className='pt-5'>model</p>
                        <p className='pt-'>size</p>
                        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima veniam optio perferendis, quae odit repudiandae consectetur corrupti expedita deserunt magni excepturi animi odio aliquam illum maiores amet beatae eos?</p>
                        <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minima veniam optio perferendis, quae odit repudiandae consectetur corrupti expedita deserunt magni excepturi animi odio aliquam illum maiores amet beatae eos?</p>
                  </div>
                  <div data-aos="fade-left" data-aos-duration="1000" className=' border-black lg:w-6/12 lg:h-auto lg:flex lg:justify-center lg:mt-28 w-full h-[400px] mt-32'>
                        <img src={`${image ? value.alter : value.img}`} alt=""  className='lg:w-[400px] w-auto h-auto lg:h-[550px]'/>
                  </div>
            </div>
            </>
      }
    })}
<GrFormNext className={`absolute top-1/2 lg:right-20 right-10 text-4xl ${image ? "lg:text-slate-200 text-slate-600":"text-black-300"}`} onClick={()=>handleNext()}/>
<GrFormPrevious className={`absolute top-1/2 lg:left-20 left-10 text-4xl ${image ? "text-black-200":"lg:text-slate-300 text-slate-600"}`} onClick={()=>handlePrevious()}/>

    </div>
          <div className="lg:hidden block">
            {portrait.map((value) => {
              if (value.id == id) {
                return (
                  <>
                    <div className="w-full h-screen  px-2">
                      <div className="flex justify-between px-5 py-2">
                        <Link to={"/portrait"}>
                          <HiXMark className="text-2xl" />
                        </Link>
                        <p>Tittle, Year</p>
                      </div>
                      <div className="w-fullborder relative ">
                        <img
                          src={`${image ? value.alter : value.img}`}
                          alt=""
                          className="w-auto h-auto"
                        />
                        <GrFormNext
              className={`absolute top-1/2  right-0 text-4xl ${
                image ? "lg:text-slate-200 text-slate-600" : "text-black-300"
              }`}
              onClick={() => handleNext()}
            />
            <GrFormPrevious
              className={`absolute top-1/2 left-0 text-4xl ${
                image ? "text-black-200" : "lg:text-slate-300 text-slate-600"
              }`}
              onClick={() => handlePrevious()}
            />
                      </div>
                      <div>
                            <p className="mt-2 font-semibold">Watercolor on paper</p>
                            <p className="mt-2 text-sm">22 x 30 in</p>
                            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi ipsum commodi laborum nemo alias libero unde sequi repudiandae, veniam laudantium ad quas est voluptatibus aperiam qui ex, quis ipsa.</p>
                      </div>
                    </div>
                  </>
                );
              }
            })}
            
          </div>
          </div>
    </>
  )
}

export default PortraitDetails