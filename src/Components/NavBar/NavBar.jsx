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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { useEffect } from "react";
function NavBar() {
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
              useEffect(()=>{
                setShow(false)
              },[])

        const swiperRef = useRef(null);
        const handleClick = () => {
          if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
          }
        };
       
  return (
    <>
            <div
          className={`relative  grid grid-cols-1 w-1/12 lg:h-full h-10  transition-all duration-500`}
        >
          <div
            className={`fixed top-0 ${
              show
                ? "translate-x-0 h-screen overflow-hidden"
                : "-translate-x-[300px] "
            } transition-all duration-700 z-20 bg-white pl-10 py-4 h-screen overflow-hidden `}
          >
            <div className="flex items-center justify-between  mt-10 pr-4">
              <div className={`text-slate-800 uppercase text-sm font-semibold transition-all duration-1000 ${show ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[300px]" }`}>augustine samuel</div>
              <div>
                <RiCloseLargeLine
                // data-aos="fade-right"
                // data-aos-duration="2000"
                  className="font-bold text-3xl text-slate-800 "
                  onClick={() => setShow(!show)}
                />
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-2 gap-x-20 lg:mt-10">
              <div>
                <ul className={`text-slate-700  font-bold text-lg transition-all duration-1000 ${show ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[300px]" }`}>
                  <Link to={"/"}>
                    <li className=" hover:text-[#c9a25d]">Home</li>
                  </Link>
                  <Link to={"/creater"}>
                    <li className="pt-5 hover:text-[#c9a25d]">Creator</li>
                  </Link>
                  <Link to={"/gallery"}>
                    <li className="pt-5 hover:text-[#c9a25d]">Gallery</li>
                  </Link>
                  <a
                    href="https://www.instagram.com/augustinesamuelgallery/"
                    target="_blank"
                  >
                    <li className="pt-5 hover:text-[#c9a25d]">Instagram</li>
                  </a>
                </ul>
              </div>
              <div className={`w-[1px] h-40 bg-[#c9a25d] transition-all duration-700 ${show ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[300px]" }`}></div>
            </div>
            <div className={`transition-all duration-1000 ${show ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[400px]" }`}>
            <a href="mailto:example@example.com" class="email-link">
              <p className="pt-10 text-slate-500">augustine.samuel</p>
              <p className="text-slate-500">@gmail.com</p></a>
              <p className="pt-5 text-slate-500">©augustinesamuel</p>
              <p className="pt text-slate-500">All Rights Reserved</p>
            </div>
          </div>
        </div>

    </>
  )
}

export default NavBar