import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GSCPBottom = () => {
  const textRef = useRef(null); // Reference for the text to animate

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative text-center my-8 p-8 md:p-12 lg:p-[5.5vw] before:content-[''] before:absolute before:w-10/12 before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:to-purple-600 before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 after:content-[''] after:absolute after:w-0 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2">
      <div className="absolute inset-0 bg-black opacity-0 dark:opacity-65"></div>
      <h6
        ref={textRef}
        className="relative md:mx-40 text-xl md:text-2xl lg:text-3xl z-10 max-xs:text-[5vw] max-xs:leading-tight"
      >
        For any questions or to discuss partnership opportunities, please
        contact us at{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          partner@baoiam.com
        </span>
      </h6>
    </div>
  );
};

export default GSCPBottom;
