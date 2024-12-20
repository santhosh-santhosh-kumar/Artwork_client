import React from "react";
import { useContext } from "react";
import { ContextProvide } from "../../Store/Context";

function PortraitSam() {
  const [portrait, setPortrait, color, setColor, figures, setFigures] =
    useContext(ContextProvide);
    const array = [{title:"Porttrait Painting"},{title:"Figure Painting"},{title:"Abstract Painting"},{title:"jewellarys Painting"}]
  return (
    <>
    {array.map(()=>{
      return <>
      <div className="">
        <div className="flex justify-between items-center pt-10 pb-2">
          <p className=" text-2xl ">Portrait Painting</p>
          <p className="pr-6 mt-[10px]">View all</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" lg:grid grid-cols-5  justify-around "
        >
          {figures.map((value, index) => {
            if (index < 5) {
              return (
                <>
                  <div className="relative overflow-hidden group">
                    <img
                      src={value.img}
                      alt=""
                      className={`relative ${
                        index < 5 ? "lg:block" : "hidden"
                      } ${
                        index == 0 ? "sm:block" : "hidden"
                      } object-cover lg:w-[250px] w-full h-full lg:h-[300px] border-4 border-black `}
                    />
                    {/* <div className="absolute inset-0 transition-all duration-1000 translate-y-full group-hover:translate-y-0 top-0 bg-gradient-to-t from-black to-black/20  lg:w-[280px]  w-full h-full lg:h-[370px]"></div> */}
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>      
      </>
    })}

    </>
  );
}

export default PortraitSam;
