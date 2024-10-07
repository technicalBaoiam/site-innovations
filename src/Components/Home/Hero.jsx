import React, { useEffect, useRef } from "react";
import Herobg from "../../assets/Hero.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";

const Hero = () => {
  const navigate = useNavigate();

useEffect(() => {

const tl = gsap.timeline();

tl.fromTo('.hero1',{opacity:0,y:30},
  {
    opacity:1,
    y:0,
    duration:0.7,
    ease:'power1.out',
    stagger:0.2,
  }
)

tl.fromTo('.heroimg',{opacity:0,scale:0.9},
  {
    opacity:1,
    scale:1,
    duration:0.5,
    ease:'power1.out'
  },
  '-=0.8'
)

},[])

  const handleCardClick = () => {
    navigate("/pap");
  };

  return (
    <div className="HomeHero bg-white md:py-10 dark:bg-[#010203] dark:text-white flex flex-col-reverse md:flex-row px-8 lg:px-20 lg:-mt-16 items-center">
      {/* Left Side: Heading and Content */}
      <div
        className="w-full flex mx-auto md:pl-5 gap-y-1 pb-10 md:pb-0 flex-col lg:w-1/2 text-center md:text-left"
      >
        <h1 className="hero1 text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Your{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Success
          </span>
          ,{" "}Our <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Mission </span>
        </h1>

        <p className="hero1 mt-5 md:text-lg font-medium text-slate-700 dark:text-slate-300">
          We give you the opportunity to stand out among millions and shine in
          the crowd. With our advanced courses and expert guidance live this
          excellent journey.
        </p>
        <div className="mt-6 flex justify-center md:justify-normal lg:justify-start space-x-4">
          <button
            onClick={() => navigate("/courses")}
            className="hero1 relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-10 py-2 overflow-hidden text-white font-semibold border border-indigo-600 rounded-full hover:text-indigo-600 group"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <IoIosArrowRoundForward size={30} />
            </span>
            <span className="relative text-sm lg:text-base">
              Explore now
            </span>
          </button>
        </div>
      </div>

      {/* Right Side: Slider */}
      <div
        className="heroimg w-full flex md:p-7 justify-center lg:items-center h-72 md:h-full lg:w-1/2"
      >
        <img className="object-cover w-full h-full" src={Herobg} alt="Right image" />
      </div>
    </div>
  );
};

export default Hero;
