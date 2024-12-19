import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../../../Store/Context";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";

function PortraitMobileDetail() {
  let { id } = useParams();
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
  ] = useContext(ContextProvide);
  const [image, setImage] = useState(false);
  const handleNext = () => {
    setImage(true);
  };
  const handlePrevious = () => {
    setImage(false);
  };
  return (
    <>
      <div className="lg:hidden block">
        {portrait.map((value) => {
          if (value.id == id) {
            return (
              <>
                <div className="w-full h-screen  px-2">
                  <div className="flex justify-between px-5 py-2">
                    <Link to={"/portrait"}>
                      <HiXMark className="text-2xl" />
                    </Link>
                    <p>Tittle, Year</p>
                  </div>
                  <div className="w-fullborder relative ">
                    <img
                      src={`${image ? value.alter : value.img}`}
                      alt=""
                      className="w-auto h-auto"
                    />
                    <GrFormNext
          className={`absolute top-1/2  right-0 text-4xl ${
            image ? "lg:text-slate-200 text-slate-600" : "text-black-300"
          }`}
          onClick={() => handleNext()}
        />
        <GrFormPrevious
          className={`absolute top-1/2 left-0 text-4xl ${
            image ? "text-black-200" : "lg:text-slate-300 text-slate-600"
          }`}
          onClick={() => handlePrevious()}
        />
                  </div>
                  <div>
                        <p className="mt-2 font-semibold">Watercolor on paper</p>
                        <p className="mt-2 text-sm">22 x 30 in</p>
                        <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi ipsum commodi laborum nemo alias libero unde sequi repudiandae, veniam laudantium ad quas est voluptatibus aperiam qui ex, quis ipsa.</p>
                  </div>
                </div>
              </>
            );
          }
        })}
        
      </div>
    </>
  );
}

export default PortraitMobileDetail;
