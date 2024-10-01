import React, { useEffect } from "react";
import ContactForm from "../Components/GSCB/ContactForm";
import Section2 from "../Components/GSCB/GSCB-Section2";
import Section1 from "../Components/GSCB/GSCB-Section1";
import Header from "../Components/GSCB/GSCB-Hero";
import GSCPBottom from "../Components/GSCB/GSCP-Section3";

import { universities } from "../assets/Universities/Universities";
import BrandMarquee from "../Components/Marquee/BrandMarquee";
import gsap from "gsap";

const GCEP = ({dark}) => {
  document.title = "Baoiam Innovations | Global Collabo Education Partnership";
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  // useEffect(()=>{
  //   console.log(dark)
  // },[dark])


useEffect(()  => {

    gsap.fromTo('.marq',{opacity:0,y:30},{
        opacity:1,
        y:0,
        duration:1,
        ease:'back.inOut',
        stagger:0.2,
        scrollTrigger:{
            trigger:'.marqdiv1',
            start:'top 90%',
            end:'bottom 90%'
        }
    })
  
},[])



  return (
    <>
      
      <Header />

      {/* Section 1 */}
      <Section1 dark={dark}/>

      <div className="marqdiv1 flex flex-col justify-center items-center gap-4  my-12">
        <h1 className="marq text-2xl font-bold px-4 text-center">Trusted by a global community of progressive educators</h1>
        <BrandMarquee array={universities}/>
      </div>


      {/* Section 2 */}
      <Section2 />

      {/* Contact */}
      <ContactForm />

      {/* GSCPBottom */}
      <GSCPBottom />
    </>
  );
};

export default GCEP;
