import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";

function JewellaryDetails() {
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
      <div>
        <div className="relative  px-20 lg:block hidden">
          <Link to={"/jewellary"}>
            <HiXMark className="absolute right-20 top-10 text-2xl z-10" />
          </Link>

          {jewellarys.map((value) => {
            if (value.id == id) {
              return (
                <>
                  <div className="px-32 flex flex-wrap w-full   h-screen ">
                    <div data-aos="fade-right" data-aos-duration="1000" className="w-6/12 pt-40">
                      <p className="pt-5 font-bold">Title,Year</p>
                      <p className="pt-5">model</p>
                      <p className="pt-">size</p>
                      <p className="pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta minima veniam optio perferendis, quae odit
                        repudiandae consectetur corrupti expedita deserunt magni
                        excepturi animi odio aliquam illum maiores amet beatae
                        eos?
                      </p>
                      <p className="pt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta minima veniam optio perferendis, quae odit
                        repudiandae consectetur corrupti expedita deserunt magni
                        excepturi animi odio aliquam illum maiores amet beatae
                        eos?
                      </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="w-6/12  flex justify-center mt-28">
                      <img
                        src={`${image ? value.alter : value.img}`}
                        alt=""
                        className="w-[400px] h-[550px]"
                      />
                    </div>
                  </div>
                </>
              );
            }
          })}
          <GrFormNext
            className={`absolute top-1/2 right-20 text-4xl ${
              image ? "text-slate-200" : "text-black-300"
            }`}
            onClick={() => handleNext()}
          />
          <GrFormPrevious
            className={`absolute top-1/2 left-20 text-4xl ${
              image ? "text-black-200" : "text-slate-300"
            }`}
            onClick={() => handlePrevious()}
          />
        </div>
        <div className="lg:hidden block">
                    {jewellarys.map((value) => {
                      if (value.id == id) {
                        return (
                          <>
                            <div className="w-full h-screen  px-2">
                              <div  data-aos="fade-right" className="flex justify-between px-5 py-2">
                                <Link to={"/jewellary"}>
                                  <HiXMark className="text-2xl" />
                                </Link>
                                <p>Tittle, Year</p>
                              </div>
                              <div data-aos="fade-left" className="w-fullborder relative ">
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
      </div>
    </>
  );
}

export default JewellaryDetails;
