import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../../../Store/Context";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { HiXMark } from "react-icons/hi2";

function FigureMobileDetails() {
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

  const handleNext = () => setImage(true);
  const handlePrevious = () => setImage(false);

  return (
    <>
      
      <div className="relative w-full h-screen bg-white px-4 md:px-8">
        {figures.map((value) => {
          if (value.id == id) {
            return (
              <div key={value.id}>
               
                <div className="flex justify-between items-center py-4 border-b">
                  <Link to={"/figure"}>
                    <HiXMark className="text-2xl cursor-pointer" />
                  </Link>
                  <p className="text-lg font-semibold">Title, Year</p>
                </div>

               
                <div className="relative w-full mt-6">
                  <img
                    src={image ? value.alter : value.img}
                    alt=""
                    className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] mx-auto"
                  />
                  <GrFormNext
                    className={`absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 text-4xl cursor-pointer ${
                      image ? "text-gray-400" : "text-gray-700"
                    }`}
                    onClick={handleNext}
                  />
                  <GrFormPrevious
                    className={`absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 text-4xl cursor-pointer ${
                      image ? "text-gray-700" : "text-gray-400"
                    }`}
                    onClick={handlePrevious}
                  />
                </div>

                
                <div className="mt-6 space-y-4">
                  <p className="text-lg font-semibold">Watercolor on paper</p>
                  <p className="text-sm text-gray-700">22 x 30 in</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta nisi ipsum commodi laborum nemo alias libero unde
                    sequi repudiandae, veniam laudantium ad quas est
                    voluptatibus aperiam qui ex, quis ipsa.
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default FigureMobileDetails;
