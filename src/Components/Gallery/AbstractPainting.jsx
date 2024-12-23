import React from "react";
import NavGallery from "./NavGallery";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import alter from "../../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg"
import { useState } from 'react';
import NavbarMobile from "../Mobile/NavbarMobile";
import AbstractMobile from "../Mobile/AbstractMobile";
import Footer from "../Footer/Footer";

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
  <div>
  <div className="lg:hidden block">
        <NavbarMobile />
        <AbstractMobile />
      </div>
<div className="lg:block hidden">
      <div className="border border-b-2  pb-16">
      <NavGallery />
      </div>
      <div className="px-10 pt-4 lg:block hidden" data-aos="fade-up" data-aos-duration="1000">
            <p className="font-bold text-xl">Abstract Painting</p>
      </div>
      <div  className="grid justify-items-auto grid-cols-5 gap-8 py-4 px-5  w-full">
            {abstracts.map((value,index)=>{
                  return <>
                        <Link data-aos="fade-up" to={`/abstract/${value.id}`}><img src={condition==index ? value.alter: value.img} alt=""  className={`p-3 border border-gray-400 object-cover w-[270px] h-[350px] ${condition==index ? "transform transition duration-1000 scale-y-105": "scale-100"}`} onMouseEnter={()=>handleCondition(index)}/></Link>
                  </>
            })}
      </div>
      </div>
      </div>
      <Footer />
</>;
}

export default AbstractPainting;
