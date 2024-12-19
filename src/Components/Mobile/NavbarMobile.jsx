import React from "react";
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function NavbarMobile() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="fixed top-[0px]  left-0 flex justify-center items-center w-full bg-white py-5 z-20">
        <div className="w-6/12">
          <HiOutlineMenuAlt4
            className={`${show == false ? "w-10" : "w-0"}  text-4xl font-bold`}
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="">Augustine Samuel</div>
      
      
        <div
          className={`transition-all duration-500 absolute  p-4 ${
            show ? "translate-x-0" : "-translate-x-[300px]"
          } transition-all duration-700 bg-white z-20 top-0 left-0` }
        >
          <RiCloseLargeLine
            className="absolute left-[90px] top-4 font-bold "
            onClick={() => setShow(!show)}
          />
          <ul className="pt-5 px-2 font-bold ">
            <Link to={"/"}>
              <li className="pt-5">Home</li>
            </Link>
            <Link to={"/creater"}>
              <li className="pt-5">Creator</li>
            </Link>
            <Link to={"/gallery"}>
              <li className="pt-5">Gallery</li>
            </Link>
            <a
              href="https://www.instagram.com/augustinesamuelgallery/profilecard/?igsh=MXhwb3RpZHc3cWd1Mg=="
              target="_blank"
            >
              <li className="pt-5">Instagram</li>
            </a>
          </ul>
        
      </div>
      </div>
    </>
  );
}

export default NavbarMobile;
