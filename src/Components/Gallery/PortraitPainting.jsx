import React, { useState } from "react";
import NavGallery from "./NavGallery";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";

function PortraitPainting() {
  const [portrait, setPortrait,color, setColor,figures, setFigures,abstracts, setAbstracts,jewellarys, setJewellarys,alter,setAlter] = useContext(ContextProvide);
  const [condition,setCondition]=useState(-1)

  const handleCondition = (index)=>{
      portrait.map((value)=>{
            
            if(index==value.id){
                  setCondition(value.id)
            }
      })
     
  }
 
  return (
    <>
    <div className="border border-b-2 pb-4">
      <NavGallery />
      </div>
      <div className="px-10 pt-4">
            <p className="font-bold text-xl">Portrait Painting</p>
      </div>
      <div className="grid justify-items-auto grid-cols-5 gap-8 py-4 px-5  w-full">
            {portrait.map((value,index)=>{
                  return <>
                  
                        <img src={condition==index ? value.alter: value.img} alt="" className={`border-4 border-black object-cover w-[270px] h-[350px] `} onMouseEnter={()=>handleCondition(index)}/>
                  
                  </>
            })}
      </div>
    </>
  );
}

export default PortraitPainting;
