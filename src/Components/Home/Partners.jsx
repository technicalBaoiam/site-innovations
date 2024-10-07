import React, { useEffect, useLayoutEffect, useRef } from "react";
import Lenskart from "../../assets/Partners/Lenskart.png";
import Hirect from "../../assets/Partners/Hirect.png";
import Internshala from "../../assets/Partners/Internshala.png";
import HCLTech from "../../assets/Partners/HCLTech.png";
import HelloIntern from "../../assets/Partners/HelloIntern.png";
import Mentorsity from "../../assets/Partners/Mentorsity.png";
import BrandMarquee from "../Marquee/BrandMarquee";
import { universities } from "../../assets/Universities/Universities";
import { brands } from "../../assets/BrandPartners/Brands";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const titleRef = useRef([]);

useLayoutEffect(() => {

let context = gsap.context(() => {

  gsap.fromTo('.Partneranime',{
    opacity:0,
    y:30,
    
  },
  {
    opacity:1,
   
    y:0,
    duration:0.6,
    ease:'power1.out',
    stagger:0.2,
    scrollTrigger:{
      trigger:'.Partnerdiv',
      start:'top 70%',
      end:'bottom 80%'
    }
  })

})
return () => context.revert()

})

  return (
    <div className="dark:bg-[#010203] Partnerdiv">
      <div className="my-20">
        <h2
          className="Partneranime text-3xl px-2 text-center md:text-4xl dark:text-white font-extrabold text-gray-900"
        >
          Our thriving {" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          collaborators
          </span>
        </h2>
        <p
          className="Partneranime text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10"
        >
          We collaborate with organizations, from startups to multinational firms, including diverse range of business and nonprofits
        </p>
        <BrandMarquee array={brands} />
      </div>
    </div>
  );
};

export const UniversityPartners = () => {
  const titleRef = useRef([]);
 

  useLayoutEffect(() => {

  let context = gsap.context(() => {

  gsap.fromTo('.Partneranime-1',{
    opacity:0,
    y:30,

  },
  {
    opacity:1,
    y:0,
    duration:0.6,
    ease:'power1.out',
    stagger:0.2,
    scrollTrigger:{
      trigger:'.Partnerdiv-2',
      start:'top 80%',
      end:'bottom 80%'
    }
  })

})

return () => context.revert() 
  })


  return (
    <div className="my-20 Partnerdiv-2">
      <h2
        className="Partneranime-1 text-3xl text-center md:text-4xl px-2 dark:text-white font-extrabold text-gray-900"
      >
        Shaping Future with{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Leading Universities
        </span>
      </h2>
      <p
        className="Partneranime-1 text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10"
      >
        Partnering with top universities to provide quality education and access
        to advanced resources, ensuring students are prepared for future
        success.
      </p>
      <BrandMarquee array={universities} />
    </div>
  );
};

export default Partners;
