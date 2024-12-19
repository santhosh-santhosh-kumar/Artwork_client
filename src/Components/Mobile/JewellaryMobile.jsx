import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextProvide } from "../../Store/Context";

function JewellaryMobile() {
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

  const [condition, setCondition] = useState(-1);

  return (
    <>
     
      <div className="relative px-2 md:px-4">
             
              <div className="mt-10">
                {jewellarys.map((value, index) => {
                  if (index === 0) {
                    return (
                      <div key={value.id} className="relative w-full h-[300px]">
                        <img
                          src={value.img}
                          alt=""
                          className="w-full h-full object-cover overflow-hidden"
                        />
                        <div className="bg-gradient-to-t from-black to-transparent absolute inset-0"></div>
                      </div>
                    );
                  }
                  return null; 
                })}
              </div>
      
             
              <div className="absolute top-[220px] md:top-[300px] px-2 ">
                <div className="mb-4">
                  <p className="text-white text-2xl md:text-3xl font-bold">Abstracts</p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-3 pr-2 md:pr-6">
                  {jewellarys.map((value) => (
                    <div key={value.id} className="w-full h-[100px] md:h-[150px]">
                      <Link to={`/jewellary/${value.id}`}>
                        <img
                          src={value.img}
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    </>
  );
}



export default JewellaryMobile;