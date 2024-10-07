import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import { Highlights } from "../../Data";

gsap.registerPlugin(ScrollTrigger);

const CourseHighlights = () => {


  // Dynamically mapping icons
  const highlightIcons = (icon) => {
    if (icon.startsWith("Md")) {
      return MDIcons[icon];
    } else if (icon.startsWith("Fc")) {
      return FCIcons[icon];
    } else if (icon.startsWith("Gr")) {
      return GRIcons[icon];
    } else if (icon.startsWith("Sl")) {
      return SLIcons[icon];
    } else if (icon.startsWith("Go")) {
      return GOIcons[icon];
    } else if (icon.startsWith("Pi")) {
      return PiIcons[icon];
    } else {
      return "not found";
    }
  };

  return (
    <div className="py-2 px-4 dark:shadow-slate-100">
      <h4 className="md:text-xl mb-3 font-bold">
        {/* Course{" "} */}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Highlights
        </span>
      </h4>

      <div className="en6 flex items-center justify-center flex-wrap gap-6 text-black">
        {Highlights?.map((h, i) => {
          return (
            <div
              key={i}
              className="bg-white group dark:bg-white/10 hover:scale-105 overflow-hidden justify-center shadow-lg px-4 py-8  md:h-[200px] rounded-xl flex flex-col gap-3 w-full sm:w-[21rem] md:w-[44%] highlight-card"
            >
              <p className="dark:text-white flex items-center gap-2">
                <span className="text-2xl md:text-4xl drop-shadow-2xl group-hover:text-gradient-to-r from-pink-500 to-violet-600 group-hover:shadow-orange-600 transition-all ease-in-out">
                  {React.createElement(highlightIcons(h.icon))}
                </span>
                <span className="text-sm md:text-base font-semibold">
                  {h.head}
                </span>
              </p>
             
                <p className="text-xs pl-2 md:text-sm dark:text-slate-300">{h.desc}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseHighlights;
