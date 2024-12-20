import React from "react";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";

function Jewellary() {
  const [portrait, setPortrait,color, setColor,figures, setFigures,abstracts, setAbstracts,jewellarys, setJewellarys,alter,setAlter,sculptures,setSculptures] = useContext(ContextProvide);
  return (
    <>
      <div
        className="py-3 px-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="300"
      >
        <div className="group relative grid grid-cols-5 border w-full pl-7 py-7 ">
          {jewellarys.map((value, index) => {
            if (index < 5) {
              return (
                <>
                  <div className="w-full">
                    <img
                      src={value.img}
                      alt=""
                      className={`${index < 5 ? "lg:block" : "hidden"} ${
                        index == 0 ? "sm:block" : "hidden"
                      } object-cover lg:w-[260px] w-full h-full lg:h-[370px] border-4 border-gray-400`}
                    />
                  </div>
                </>
              );
            }
          })}
          <div
            className={`bg-[rgba(0,0,0,0.6)] group-hover:bg-[rgba(0,0,0,0.9)] transition-color duration-1000 w-full h-full  border  absolute top-0`}
          > </div>
            <div className="absolute flex flex-wrap justify-center items-center w-full h-full">
              <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className=" top-0 text-center "
              >
                <p className="text-white text-xl  underline decoration-1 decoration-line underline-offset-[15px]">
                  #expression
                </p>

                <p className="text-white text-2xl mt-[15px]">
                Jewellery Painting
                </p>
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
}




export default Jewellary;
