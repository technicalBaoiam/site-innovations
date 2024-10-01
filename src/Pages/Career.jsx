import { useEffect } from "react";
import { CareerSection1 } from "../Components/Career/CareerSection1";
import { CarrerSection2 } from "../Components/Career/CarrerSection2";
//import { CareerSection3 } from "../Components/Career/CareerSection3";
import { CareerSection4 } from "../Components/Career/CareerSection4";
//import { CareerSection5 } from "../Components/Career/CareerSection5";
import { CareerSection6 } from "../Components/Career/CareerSection6";
import { CareerSection7 } from "../Components/Career/CareerSection7";
//import { CareerSection8 } from "../Components/Career/CareerSection8";
import  CareerSection9  from "../Components/Career/CareerSection9";
import CareerSection10 from "../Components/Career/CareerSection10";
//import Testimonals from "../Components/Testmonials/Testimonials"

const Career = () => {
  document.title = "Baoiam Innovations | Careers";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-zinc-800 min-h-screen flex flex-col justify-center item-center  text-white relative overflow-x-hidden lg:pb-0">
      <CareerSection1 />
      <CarrerSection2 />
      <CareerSection6 />
      <CareerSection7 />
      <CareerSection4 />
      <CareerSection9 />
      <CareerSection10/>

      {/* <CareerSection8 /> */}
    </div>
  );
};

export default Career;
