import React, { useState } from "react";
import NavGallery from "./NavGallery";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import PortraitMobile from "../Mobile/PortraitMobile";
import NavbarMobile from "../Mobile/NavbarMobile";
import Footer from "../Footer/Footer"
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
    <div>
      <div className="lg:hidden block">
        <NavbarMobile />
        <PortraitMobile />
      </div>
    <div className="lg:block hidden">    <div className="border border-b-2 pb-16 bg-white">
      <NavGallery />
      </div>
      <div className="px-10 pt-4 ">
            <p className="font-bold text-xl">Portrait Painting</p>
      </div>
      <div className="grid justify-items-auto grid-cols-5 gap-8 py-4 px-5  w-full ">
            {portrait.map((value,index)=>{
                  return <>
    <div
        class="w-[270px] h-[350px] bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full p-3 border-gray-200">
          <Link to={`/portrait/${value.id}`}>
            <img src={value.img} class="w-full h-full  " />
            </Link>
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            {/* <div
              class="border-4 border-gray-600 text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
                  <Link data-aos="fade-up" to={`/portrait/${value.id}`}>
              <img src={value.alter} alt="" className="w-full h-full "/>
              </Link>
            </div> */}
          </div>
        </div>
      </div>


                  {/* <div className="relative w-[270px] h-[350px] perspective-1000">
                        <Link to={`/portrait/${value.id}`}>
                        <div className={`relative w-full h-full transform transition-transform duration-700 ${
              condition === index ? "animate-flip" : "rotate-y-0"
            }`}
            onMouseEnter={() => handleCondition(index)}
            onMouseLeave={() => handleCondition(-1)}>
                        <img src={value.img} alt="" className={`absolute border-4 border-black object-cover w-full h-full backface-hidden `} />
                        <img src={value.alter} alt="" className={`absolute border-4 border-black object-cover w-full h-full transform rotate-y-180 backface-hidden`} />
                        </div>
                        </Link>
                        </div> */}
                  </>
            })}
      </div>
      </div>
      </div>
<Footer />
    </>
  );
}

export default PortraitPainting;
