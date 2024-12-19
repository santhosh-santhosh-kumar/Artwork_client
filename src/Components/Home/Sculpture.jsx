import React from "react";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";

function Sculpture() {
  const [portrait, setPortrait,color, setColor,figures, setFigures,abstracts, setAbstracts,jewellarys, setJewellarys,alter,setAlter,sculptures,setSculptures] = useContext(ContextProvide);
  
  return (
      <>
      <div className='p-5' data-aos="fade-right" data-aos-duration="1000"> 
        <div className='relative flex flex-wrap gap-5 justify-around border p-4 '>
              {sculptures.map((value,index)=>{
                  
                    if(index<4){
                          return <>
                          <div className=''>
                        <img src={value.img} alt="" className={`${index<4 ? "lg:block": "hidden"} ${index==0 ? "sm:block" : "hidden"} object-cover lg:w-[280px] w-w-[280px] h-[370px] lg:h-[370px] border-4 border-black`} />
                        </div>
                          </>
                    }
              })}
              <div className={`bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.8)] transition-color duration-1000 w-full h-full  border  absolute top-0`}>
              <div className='absolute lg:top-36 lg:left-1/2 top-1/2 left-20 text-center'>
              <p className='text-white text-xl'>#mass</p>
              <p className='bg-white w-10 h-[1.5px] ml-[78px]  mt-2'></p>
              <p className='text-white text-2xl mt-1'>Sculpture Painting</p>
        </div>
  </div>
  
        </div>
      </div>
      </>
    )
}




export default Sculpture;