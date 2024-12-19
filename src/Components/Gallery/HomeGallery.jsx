import React from "react";
import NavGallery from "./NavGallery";
import Portrait from "../Home/Portrait";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import FigurePainting from "../Home/FigurePainting";
import Abstract from "../Home/Abstract";
import Jewellary from "../Home/Jewellary";
import Sculpture from "../Home/Sculpture";
import NavbarMobile from "../Mobile/NavbarMobile";
import Footer from "../Footer/Footer";

function HomeGallery() {
      const [portrait, setPortrait,color,setColor]=useContext(ContextProvide)
  return (
    <>
    <div className="overflow-auto scrollbar-hide">
    <div className="block lg:hidden z-10">
        <NavbarMobile />
        </div>

    <div className="lg:block hidden z-10">
        <NavGallery />
        </div>
        <div className="pt-20">
        <Link to={'/portrait'} onClick={()=>window.scrollTo(0,0)}><Portrait /></Link>
        <Link to={'/figure'} onClick={()=>window.scrollTo(0,0)}><FigurePainting /></Link>
        <Link to={'/abstract'} onClick={()=>window.scrollTo(0,0)}><Abstract /></Link>
        <Link to={'/jewellary'} onClick={()=>window.scrollTo(0,0)}><Jewellary /></Link>
        <Link to={'/sculpture'} onClick={()=>window.scrollTo(0,0)}><Sculpture /></Link>
        </div>
        </div>
        <Footer />
    </>
  );
}

export default HomeGallery;
