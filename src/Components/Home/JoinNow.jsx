// import React from "react";
// import onlinelearning from "../../assets/Onlinelearning.gif";

// const Home = () => {
//   return (
//     <>
//       <h1 className="text-3xl my-2 text-center font-bold">
//         Your Future Starts <span className=""> Here</span>
//       </h1>
//       <div className="dark:bg-[#080529] px-4 md:px-8 lg:px-16 dark:text-white flex flex-col md:flex-row justify-center my-12 w-full ">
//         <div className="w-full lg:w-[50%] lg:h-[30rem] md:w-[70%]  ">
//           <img
//             className="w-full h-full lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[80%]   rounded-lg object-cover "
//             src="https://images.stockcake.com/public/9/2/b/92b03ff4-71c3-4116-9796-5975ea317e11_large/join-now-ad-stockcake.jpg"
//             alt=""
//           />
//         </div>

//         {/* Text and Button on the right */}
//         <div className="p-6 w-full lg:w-[40%] text-center">
//           <p className="mb-6 px-0 text-lg lg:px-0 w-full md:w-auto text-left">
//             Take the next step toward achieving your personal and professional
//             goals with Baoiam. Join now to receive personalized recommendations
//             from the full Baoiam catalog.
//           </p>
//           <button className="px-6 py-3 font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300 flex flex-start">
//             Join Now
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useRef } from "react";
import onlinelearning from "../../assets/Onlinelearning.gif";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the text and button
    gsap.fromTo(
      [textRef.current, buttonRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <h2
        ref={headingRef}
        className="text-3xl sm:text-4xl my-2 text-center font-extrabold"
      >
        Your <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Future</span> starts here
      </h2>
      <div className="dark:bg-[#010203] w-full rounded-3xl overflow-hidden dark:text-white flex flex-col md:flex-row justify-center items-center my-12">
        {/* Container for the image */}
        <div ref={imageRef} className="md:w-[25%] w-[70%]">
          <img
            className="w-full h-full rounded-3xl object-cover"
            src="https://images.stockcake.com/public/9/2/b/92b03ff4-71c3-4116-9796-5975ea317e11_large/join-now-ad-stockcake.jpg"
            alt="Join Now"
          />
        </div>
        {/* Text and Button on the right */}
        <div ref={textRef} className="w-[90%] md:w-1/2 text-center md:text-left pt-10 md:pt-0 md:pl-20">
          <p className="mb-6">
            Take the next step toward achieving your personal and professional
            goals with Baoiam. Join now to receive personalized recommendations
            from the full Baoiam catalogue.
          </p>
          <button
            ref={buttonRef}
            onClick={() => navigate('/courses/school')}
            className="px-4 sm:px-6 py-2 sm:py-3 font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300"
          >
            Join Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

