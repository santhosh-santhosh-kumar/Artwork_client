import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import bannerImage1 from "../../assets/images/Abstract Painting/356230352_583415793873913_3526123968177403826_n.jpg";
import bannerImage2 from "../../assets/images/Figure Painting/356787171_1189094431785768_8950889178167972503_n.jpg";
import bannerImage3 from "../../assets/images/jewellary/271314876_1298930260605981_4599460024023545013_n.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { useRef } from "react";
import { GrNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import Portrait from "../Home/Portrait";
import { Link } from "react-router-dom";
import FigurePainting from "../Home/FigurePainting";
import Abstract from "../Home/Abstract";
import Jewellary from "../Home/Jewellary";
import Sculpture from "../Home/Sculpture";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import Footer from "../Footer/Footer";
import PortraitSam from "./PortraitSam";

function Sample() {
        const [
              portrait,
              setPortrait,
              color,
              setColor,
              figures,
              setFigures,
              abstracts,
              setAbstracts,
              jewellarys,
              setJewellarys,
              alter,
              setAlter,
              sculptures,
              setSculptures,
              show, setShow,
            ] =useContext(ContextProvide)
  
  const slide = [bannerImage1, bannerImage2, bannerImage3];
  const swiperRef = useRef(null);
  const handleClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div  className="lg:flex w-full h-screen lg:p-5 p-2 py-5 ">
        <NavBar />
        <div  data-aos="fade-left" data-aos-duration="1500" className="relative lg:w-11/12 w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            onClick={handleClick}
            className="relative border-1 border-collapse  w-full h-full"
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".nextArrow",
              prevEl: ".prevArrow",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
          >
            {slide.map((value) => {
              return (
                <SwiperSlide className="">
                  <div className="relative w-full lg:h-full h-[550px] overflow-hidden">
                    <img
                      src={value}
                      alt=""
                      style={{ boxShadow: 'inset 0 0 40px black' }}
                      className="w-full lg:h-full h-[550px] object-cover "
                    />
                    <div className="absolute top-0 w-full h-full border-2 px-10  shadow-inner "></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className={`${
              show ? "hidden" : "bolock"
            } nextArrow absolute left-1 top-1/2 z-10  text-slate-200 text-sm`}
          >
            <GrFormPrevious size={50} />
          </button>
          <button className="prevArrow absolute right-1 top-1/2 z-20 text-slate-200 text-sm">
            <GrFormNext size={50} />
          </button>
          <div data-aos="fade-up" data-aos-duration="1000" className="text-right absolute bottom-5 lg:right-10  right-2 z-20 text-slate-200">
            <div className="flex-col ">
              <p className="uppercase pb-2 underline decoration-1 underline-offset-4">
                augustinesamuelgallery
              </p>
            </div>
            <p className="lg:text-2xl text-lg lg:w-[550px]">
              My artistic journey blending spontaneity,imagination and
              craftsmanship
            </p>
          </div>
        </div>
        
      </div>
      
      <HiOutlineMenuAlt4
        className={`${
          show == false ? "w-10" : "w-0"
        } fixed top-[15px] lg:left-[50px] left-4 text-4xl font-bold`}
        onClick={() => setShow(!show)}
      />
      <div className="pl-36">
      <Link to={"/portrait"} onClick={() => window.scrollTo(0, 0)}>
        <PortraitSam  />
      </Link>
      </div>
      <Footer />
    </>
  );
}



export default Sample;