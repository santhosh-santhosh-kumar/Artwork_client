import React from "react";
import NavGallery from "./NavGallery";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import { useState } from "react";
import alter from "../../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg"

function Figure() {
  const [portrait, setPortrait, color, setColor, figures, setFigures] =
    useContext(ContextProvide);
 const [condition,setCondition]=useState(-1)

  const handleCondition = (index)=>{
      figures.map((value)=>{
            console.log(index,value.id)
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
            <p className="font-bold text-xl">Figure Painting</p>
      </div>
      <div className="grid justify-items-auto grid-cols-5 gap-8 py-4 px-5  w-full">
            {figures.map((value,index)=>{
                  return <>
                        <img src={condition==index ? alter: value.img} alt="" className="border-4 border-black object-cover w-[270px] h-[350px]" onMouseEnter={()=>handleCondition(index)}/>
                  </>
            })}
      </div>

  </>;
}

export default Figure;