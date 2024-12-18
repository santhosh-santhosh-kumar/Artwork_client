import React from "react";
import NavGallery from "./NavGallery";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import alter from "../../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg"
import { useState } from 'react';

function AbstractPainting() {
  const [
    portrait,
    setPortrait,
    color,
    setColor,
    figures,
    setFigures,
    abstracts,
    setAbstracts,
  ] = useContext(ContextProvide);
  const [condition,setCondition]=useState(-1)

  const handleCondition = (index)=>{
      abstracts.map((value)=>{
            
            if(index==value.id){
                  setCondition(value.id)
            }
      })
     
  }
  return <>
      <div className="border border-b-2 pb-4">
      <NavGallery />
      </div>
      <div className="px-10 pt-4">
            <p className="font-bold text-xl">Abstract Painting</p>
      </div>
      <div className="grid justify-items-auto grid-cols-5 gap-8 py-4 px-5  w-full">
            {abstracts.map((value,index)=>{
                  return <>
                  
                        <Link to={`/abstract/${value.id}`}><img src={condition==index ? alter: value.img} alt="" className="border-4 border-black object-cover w-[270px] h-[350px]" onMouseEnter={()=>handleCondition(index)}/></Link>
                  
                  </>
            })}
      </div>
</>;
}

export default AbstractPainting;
