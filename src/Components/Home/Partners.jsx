import React, { useEffect, useRef } from "react";
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
  // const descriptionRef = useRef([]);

  // useEffect(() => {
  //   titleRef.current.forEach((title, index) => {
  //     gsap.fromTo(
  //       title,
  //       { opacity: 0, y: -20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: title,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   descriptionRef.current.forEach((desc, index) => {
  //     gsap.fromTo(
  //       desc,
  //       { opacity: 0, y: 20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: desc,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);


  useEffect(() => {

    gsap.fromTo('.trig1',{
      opacity:0,
      y:30
    },
    {
      opacity:1,
      y:0,
      duration:0.6,
      ease:'power1.out',
      stagger:0.2,
      scrollTrigger:{
        trigger:'.marqdiv1',
        start:'top 80%',
        end:'bottom 80%'
      }
    })
    
    
    },[])


  return (
    <div className="dark:bg-[#010203] marqdiv1">
      <div className="my-20">
        <h2
          className="trig1 text-3xl px-2 text-center md:text-4xl dark:text-white font-extrabold text-gray-900"
        >
          Our thriving {" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          collaborators
          </span>
        </h2>
        <p
          className="trig1 text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10"
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
  // const descriptionRef = useRef([]);

  // useEffect(() => {
  //   titleRef.current.forEach((title, index) => {
  //     gsap.fromTo(
  //       title,
  //       { opacity: 0, y: -20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: title,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });

  //   descriptionRef.current.forEach((desc, index) => {
  //     gsap.fromTo(
  //       desc,
  //       { opacity: 0, y: 20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: desc,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);


  useEffect(() => {

    gsap.fromTo('.trig2',{
      opacity:0,
      y:30
    },
    {
      opacity:1,
      y:0,
      duration:0.6,
      ease:'power1.out',
      stagger:0.2,
      scrollTrigger:{
        trigger:'.marqdiv2',
        start:'top 80%',
        end:'bottom 80%'
      }
    })
    
    
    },[])


  return (
    <div className="my-20 marqdiv2">
      <h2
        className="trig2 text-3xl text-center md:text-4xl px-2 dark:text-white font-extrabold text-gray-900"
      >
        Shaping Future with{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Leading Universities
        </span>
      </h2>
      <p
        className="trig2 text-center px-4 text-slate-600 dark:text-slate-300 w-full md:w-[60%] mx-auto mb-14 mt-6 md:mt-10"
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
