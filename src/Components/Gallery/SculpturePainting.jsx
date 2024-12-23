import React from "react";
import NavGallery from "./NavGallery";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import { useState } from "react";
import alter from "../../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg"
import SculptureMobile from "../Mobile/SculptureMobile";
import NavbarMobile from "../Mobile/NavbarMobile";
import Footer from "../Footer/Footer"

function SculpturePainting() {
  const [portrait, setPortrait,color, setColor,figures, setFigures,abstracts, setAbstracts,jewellarys, setJewellarys,alter,setAlter,sculptures,setSculptures] =
    useContext(ContextProvide);
 const [condition,setCondition]=useState(-1)

  const handleCondition = (index)=>{
      sculptures.map((value)=>{
            console.log(index,value.id)
            if(index==value.id){
                  setCondition(value.id)
            }
      })
  }
  return <>
  <div>
  <div className="lg:hidden block">
        <NavbarMobile />
        <SculptureMobile />
      </div>
      <div className="lg:block hidden">
      <div className="  pb-16 ">
      <NavGallery />
      </div>
      <div className="px-10 pt-4">
            <p className="font-bold text-xl">Sculpture Painting</p>
      </div>
      <div className="grid justify-items-auto grid-cols-5 gap-8 py-4 px-5  w-full">
            {sculptures.map((value,index)=>{
                  return <>
                  <Link to={`/sculpture/${value.id}`} data-aos="fade-up" >
                        <img key={index} src={condition==index ? alter: value.img} alt="" className={`p-3 border border-gray-400 object-cover w-[270px] h-[350px] ${condition==index ? "transform transition duration-1000 scale-y-105": "scale-100"}`} onMouseEnter={()=>handleCondition(index)}/>
                        </Link>
                        </>
            })}
            </div>
      </div>
      </div>
      <Footer />
  </>;
}


export default SculpturePainting;