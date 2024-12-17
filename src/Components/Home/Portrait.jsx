import React from 'react'
import { useContext } from 'react';
import { ContextProvide } from '../../Store/Context';

function Portrait() {
      const [portrait, setPortrait,color,setColor] = useContext(ContextProvide)
  return (
    <>
    <div className='p-5'>
      <div className='relative flex flex-wrap gap-5 justify-around border p-4 '>
            {portrait.map((value,index)=>{
                  if(index<4){
                        return <>
                        <div className='border-4 border-black'>
                        <img src={value.img} alt="" className='object-cover w-[280px] h-[370px]'/>
                        </div>
                        </>
                  }
            })}
            <div className={`bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.8)] w-full h-full  border  absolute top-0`}>
      <div className='absolute top-36 left-1/2 text-center'>
            <p className='text-white text-xl'>#expression</p>
            <p className='bg-white w-20 h-[1.5px] ml-[50px]  mt-2'></p>
            <p className='text-white text-2xl mt-1'>Portrait Painting</p>
      </div>
</div>

      </div>
    </div>
    </>
  )
}

export default Portrait