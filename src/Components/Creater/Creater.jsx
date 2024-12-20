import React from 'react'
import NavGallery from '../Gallery/NavGallery'
import createrImg from '../../assets/images/Alter_Image/WhatsApp Image 2024-12-17 at 9.01.03 AM.jpeg';
import NavbarMobile from "../Mobile/NavbarMobile";
import Footer from '../Footer/Footer';
function Creater() {
  return (
    <>
    <div className="lg:hidden block">
        <NavbarMobile />
      </div>
    <div className="border border-b-2  hidden lg:block">
      <NavGallery />
      </div>
      <div className='lg:flex lg:flex-wrap items-center justify-evenly mt-20'>
            <div data-aos="zoom-in" data-aos-duration="1500" className=''>
                  <p>MEET THE CREATOR</p>
                  <p className='pt-5 text-2xl font-bold'>Augustine Samuel</p>
                  <p className='pt-5 lg:w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae ex dolorum dolore nulla officia vero voluptatem numquam doloribus dignissimos optio quisquam, doloremque, deserunt laudantium obcaecati! Quisquam, libero. Itaque, hic!</p>
                  <p className='pt-5 lg:w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio repudiandae ex dolorum dolore nulla officia vero voluptatem numquam doloribus dignissimos optio quisquam, doloremque, deserunt laudantium obcaecati! Quisquam, libero. Itaque, hic!</p>
            </div>
            <div className='lg:mt-0 mt-10'>
                  <img src={createrImg} alt="" data-aos="zoom-in" data-aos-duration="1500" className='border border-black object-cover w-[400px] h-[490px] overflow-hidden'/>
            </div>
      </div>
<Footer />
    </>
  )
}

export default Creater