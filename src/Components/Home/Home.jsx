import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import bannerImage1 from "../../assets/images/Abstract Painting/356230352_583415793873913_3526123968177403826_n.jpg";
import bannerImage2 from "../../assets/images/Figure Painting/356787171_1189094431785768_8950889178167972503_n.jpg";
import bannerImage3 from "../../assets/images/jewellary/271314876_1298930260605981_4599460024023545013_n.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { GrNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Portrait from "./Portrait";
import { Link } from "react-router-dom";
import FigurePainting from "./FigurePainting";
import Abstract from "./Abstract";
import Jewellary from "./Jewellary";

function Home() {
  const [show, setShow] = useState(false);
  const slide=[bannerImage1,bannerImage2,bannerImage3]
  const swiperRef = useRef(null);
      const handleClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      };
  return (
    <>
      <div className="flex w-full h-screen p-5">
        <div
          className={`relative grid grid-cols-1 w-1/12 h-full  transition-all duration-500`}
        >
          <div className={`absolute ${show ? "translate-x-0" : "-translate-x-[200px]"} transition-all duration-700`}>
            <RiCloseLargeLine
              className="absolute left-[80px] top-2 font-bold"
              onClick={() => setShow(!show)}
            />
            <ul className="pt-5 font-bold">
              <Link to={'/'}><li className="pt-5">Home</li></Link>
              <li className="pt-5">Creator</li>
              <Link to={'/gallery'}><li className="pt-5">Gallery</li></Link>
              <li className="pt-5">Instagram</li>
            </ul>
          </div>
        </div>

        <div className="relative w-11/12">
        <Swiper
          ref={swiperRef}
          onClick={handleClick}
          className='relative border-1 border-collapse  w-full h-full'
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          navigation={
           {
            nextEl:".nextArrow",
            prevEl:".prevArrow",
           }
          }
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
            pauseOnMouseEnter:true
          }}
           >
            {slide.map((value)=>{
             return <SwiperSlide>
              <img
            src={value}
            alt=""
            className="w-full h-full object-cover "
          />
          </SwiperSlide>
            })}
           </Swiper>
           <button className="nextArrow absolute left-1 top-1/2 z-20  text-slate-200 text-sm"><GrFormPrevious size={50}/></button>
           <button className="prevArrow absolute right-1 top-1/2 z-20 text-slate-200 text-sm"><GrFormNext size={50}/></button>
           <div className="text-right absolute bottom-5 right-10 z-20 text-slate-200">
            <div className="flex-col ">
            <p className="uppercase pb-2 underline decoration-1 underline-offset-4">augustinesamuelgallery</p>
            </div>
            <p className="text-2xl">My artistic journey blending spontaneity,</p>
            <p className="text-2xl"> imagination and craftsmanship
            </p>
           </div>
        </div>
      </div>
      <HiOutlineMenuAlt4
        className={`${
          show == false ? "w-10" : "w-0"
        } fixed top-[15px] left-[50px] text-4xl font-bold`}
        onClick={() => setShow(!show)}
      />
        <Link to={'/portrait'} onClick={()=>window.scrollTo(0,0)}><Portrait /></Link>
        <Link to={'/figure'} onClick={()=>window.scrollTo(0,0)}><FigurePainting /></Link>
        <Link to={'/abstract'} onClick={()=>window.scrollTo(0,0)}><Abstract /></Link>
        <Link to={'/jewellary'} onClick={()=>window.scrollTo(0,0)}><Jewellary /></Link>
    </>
  );
}

export default Home;
