import React from "react";
import NavGallery from "./NavGallery";
import Portrait from "../Home/Portrait";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { Link } from "react-router-dom";
import FigurePainting from "../Home/FigurePainting";
import Abstract from "../Home/Abstract";
import Jewellary from "../Home/Jewellary";

function HomeGallery() {
      const [portrait, setPortrait,color,setColor]=useContext(ContextProvide)
  return (
    <>
        <NavGallery />
        <Link to={'/portrait'} onClick={()=>window.scrollTo(0,0)}><Portrait /></Link>
        <Link to={'/figure'} onClick={()=>window.scrollTo(0,0)}><FigurePainting /></Link>
        <Link to={'/abstract'} onClick={()=>window.scrollTo(0,0)}><Abstract /></Link>
        <Link to={'/jewellary'} onClick={()=>window.scrollTo(0,0)}><Jewellary /></Link>

    </>
  );
}

export default HomeGallery;
