import React, { useEffect, useLayoutEffect, useRef } from "react";
import { FaBook, FaProjectDiagram, FaGlobe, FaUsers } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const cardsRef = useRef([]);

  const data = [
    {
      title: "Intensive Study Sessions",
      description:
        "We provide interactive learning sessions to enhance your knowledge and skills. Every academic minute is dedicated to the success of our students.",
      icon: <FaBook className="dark:text-white text-indigo-700 text-3xl" />,
    },
    {
      title: "Practical Assignments",
      description:
        "Gain real world knowledge and valuable experience by contributing to the live projects, helping you in applying your skills.",
      icon: (
        <FaProjectDiagram className="dark:text-white text-indigo-700 text-3xl" />
      ),
    },
    {
      title: "Connect Globally",
      description:
        "Build new connections from all over the world. Learn from their experience and expertise as they do same.",
      icon: <FaGlobe className="dark:text-white text-indigo-700 text-3xl" />,
    },
    {
      title: "Skilled Coaching",
      description:
        "Receive the right guidance for the right path as you grow in your domain, with superior coaching from top skilled mentors.",
      icon: <FaUsers className="dark:text-white text-indigo-700 text-3xl" />,
    },
  ];

  // useEffect(() => {
  //   cardsRef.current.forEach((card, index) => {
  //     gsap.fromTo(
  //       card,
  //       { opacity: 0, y: 50 }, // Initial state (hidden and below its position)
  //       {
  //         opacity: 1,
  //         y: 0, // Final state (visible and in its original position)
  //         duration: 0.6,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: card, // The card itself is the trigger
  //           start: "top 80%", // Start the animation when the card is 80% in view
  //           toggleActions: "play none none reverse", // Play the animation once
  //         },
  //       }
  //     );
  //   });
  // }, []);


useLayoutEffect(() => {

let context = gsap.context(() => {

  gsap.fromTo('.Courseanime',{
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
      trigger:'.Coursediv',
      start:'top 80%',
      end:'bottom 80%'
    }
  })

})

return () => context.revert()

})


  return (
    <div className="px-10 md:px-16 mx-auto dark:bg-[#010203] pb-5">
      <div className="Coursediv text-center mx-auto mb-10 md:mb-12">
        <h2 className="Courseanime text-3xl lg:text-4xl dark:text-white font-extrabold text-gray-900 mb-3">
          What Sets Us{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Apart
          </span>
        </h2>
        <p className="Courseanime text-base dark:text-gray-300 sm:text-lg text-gray-600">
          Our commitment to quality, dedication and achievement oriented mindset sets us apart
        </p>
      </div>

      <div className="Courseanime flex flex-col mx-auto justify-center md:flex-row gap-8">
        {data.map((stat, i) => {
          return <div className="w-60 shadow-[7px_7px_#4338CA] border border-[#515050] p-4 rounded-xl">
            <div className="flex items-center mx-auto justify-start gap-4 mb-3">
              <span className="">{stat.icon}</span>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {stat.title}
              </h2>
            </div>
            <p className={`text-gray-600 dark:text-white text-sm ${i === 4 && "mt-4"}`}>{stat.description}</p>

          </div>
        })}
      </div>

      
    </div>
  );
};

export default Courses;
