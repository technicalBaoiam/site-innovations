import React, { useEffect, useRef } from "react";
import { FiBarChart2 } from "react-icons/fi";
import image10 from "../../assets/ITIE&Entre/teamwork6.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const CareerSection1 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  //const navigate = useNavigate();
  
  useEffect(() => {
    // Animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Animation for the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="dark:bg-black dark:text-zinc-200 bg-[#fcfdff] px-6 py-12 flex flex-col items-center justify-center lg:flex-row w-full relative overflow-hidden lg:px-2 xl:px-6">
      <main className="flex flex-col lg:flex-row items-center gap-4 justify-center w-11/12">
        {/* Text Section */}
        <div
          ref={textRef}
          className="text-center p-4 lg:w-1/2 lg:text-left lg:pl-8 "
        >
          <h3 className="text-4xl dark:text-zinc-100 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#0a0a0a]">
            Career
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text leading-[1.3]">
              {" "}
              Opportunities
            </span>
          </h3>
          <p className="text-sm mt-2 sm:text-lg md:text-base dark:text-gray-400 text-[#0a0a0a] pt-5 ">
            Our company allows employees to switch between different
            departments, within web development and marketing, to leadership
            positions. For those starting their careers, and for those seeking
            to progress, BAOIAM offers the opportunity to get where you want to
            be.
          </p>
          {/* Search Bar */}
          {/* <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <div className="max-w-lg mx-auto bg-white flex rounded-full text-left mt-12 border focus-within:border-gray-900 border-gray-500 h-[30px] lg:h-[50px] md:h-[50px] md:w-[90%] lg:mr-20 ">
              <input
                type="text"
                required
                placeholder="Search for career opportunities..."
                className="w-full outline-none bg-transparent lg:text-base md:text-sm sm:text-sm text-gray-800 px-4 py-0 text-xs"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-indigo-800 hover:bg-gradient-to-l transition-all text-white tracking-wide text-xs lg:text-lg md:text-sm sm:text-sm rounded-full lg:px-6 sm:px-6 md:px-8 py-0 px-2"
              >
                Search
              </button>
            </div>
          </form> */}
          <Link to="/contact">
            <button className="relative overflow-hidden mt-12 bg-[#6c09ed] text-white font-semibold py-2 px-8 rounded-full hover:text-[#6c09ed] focus:outline-none  transition-all duration-300 hover:border-2 hover:border-[#6c09ed] dark:border-white group cursor-pointer ">
              <span className="absolute inset-0 bg-white transition-transform duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-center"></span>
              <span className="relative z-10">Join us</span>
            </button>
          </Link>
        </div>
        {/* Image and Stats Section */}
        <div
          ref={imageRef}
          className="relative aspect-square px-4 lg:w-1/2 h-96 flex justify-center"
        >
          {/* Main Image */}
          <div className="relative rounded-md overflow-hidden h-full w-[90%]  ">
            <img
              src={image10} // Replace with your image source
              alt="Job Finder Illustration"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Stats Box */}
          <div className="absolute z-30 bottom-4 right-1/2 translate-x-1/2 py-2 px-4 transition duration-150 mx-auto bg-white rounded-lg shadow-lg flex items-center hover:scale-105">
            <FiBarChart2 className="text-orange-500 w-8 h-8" />
            <div>
              <p className="lg:text-xl md:text-xl text-lg font-bold text-gray-800">
                20K+
              </p>
              <p className="lg:text-sm md:text-sm text-xs text-gray-500">
                People got hired
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
