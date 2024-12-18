import React from 'react'
import NavGallery from '../Gallery/NavGallery'
import createrImg from '../../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg';
function Creater() {
  return (
    <>
    <div className="border border-b-2 pb-4">
      <NavGallery />
      </div>
      <div className='flex flex-wrap px-5 '>
            <div className='w-8/12 mt-40'>
                  <p>MEET THE CREATOR</p>
                  <p className='pt-5 text-2xl font-bold'>Augustine Samuel</p>
                  <p className='pt-5 w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae ex dolorum dolore nulla officia vero voluptatem numquam doloribus dignissimos optio quisquam, doloremque, deserunt laudantium obcaecati! Quisquam, libero. Itaque, hic!</p>
                  <p className='pt-5 w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae ex dolorum dolore nulla officia vero voluptatem numquam doloribus dignissimos optio quisquam, doloremque, deserunt laudantium obcaecati! Quisquam, libero. Itaque, hic!</p>
            </div>
            <div className='w-4/12'>
                  <img src={createrImg} alt="" className='object-cover w-[500px] h-[590px] overflow-hidden'/>
            </div>
      </div>
      <div className='p-5 flex'>
          <p className='w-9/12'>augustine.samuel@gmail.com</p>
          <p className='w-3/12'>Copyright © All Rights Reserved
          </p>
      </div>
    </>
  )
}

export default Creater