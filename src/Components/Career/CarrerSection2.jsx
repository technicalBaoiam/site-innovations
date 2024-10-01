import React, { useEffect, useRef } from "react";
import icon1 from "../../assets/Images/bank.png";
import icon3 from "../../assets/Images/condo.png";
import icon4 from "../../assets/Images/food-serve.png";
import icon6 from "../../assets/Images/learning (2).png";
import icon7 from "../../assets/Images/placeholder.png";
import icon8 from "../../assets/Images/medal.png";
import icon9 from "../../assets/Images/office (1).png";
import icon10 from "../../assets/Images/technical-support.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export const CarrerSection2 = () => {
  const benefitsRef = useRef([]);

  const benefits = [
    {
      title: "Inspiring Workspace",
      description:
        "Work in a beautiful, modern office, to foster creativity and collaboration.",
      icon: icon3,
    },
    {
      title: "Collaborate with Amazing People",
      description:
        "Work in an encouraging environment and watch your creativity thrive.",
      icon: icon9,
    },
    {
      title: "Easy Commute",
      description:
        "Well-accessible location to get to work without much struggle.",
      icon: icon7,
    },
    {
      title: "Continuous Learning",
      description:
        "Our training programs help you to improve your capabilities.",
      icon: icon6,
    },
    {
      title: "Complimentary Meals",
      description: "Enjoy free meals and snacks every day.",
      icon: icon4,
    },
    {
      title: "Celebrating Excellence",
      description:
        "We acknowledge all your accomplishments with regular awards.",
      icon: icon8,
    },
    {
      title: "Technical Support",
      description:
        "The technical team helps to sustain the systems and provide appropriate solutions.",
      icon: icon10,
    },
    {
      title: "Financial Services",
      description: "You get monetary support",
      icon: icon1,
    },
  ];

  useEffect(() => {
    benefitsRef.current.forEach((benefit, index) => {
      gsap.fromTo(
        benefit,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1, // Stagger the animations
          ease: "power3.out",
          scrollTrigger: {
            trigger: benefit,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-white text-black dark:text-white dark:bg-black flex flex-col">
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-15 lg:px-0 xl:px-0 m-4 md:m-8">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl text-center pb-6  font-bold dark:font-semibold">
            Explore Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Future with Us
            </span>
          </h2>
          <p className="text-gray-600 pb-6 text-xs lg:text-base md:text-base sm:text-base text-center dark:text-gray-400 ">
            Explore opportunities to grow and make an impact in education.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:pl-16 lg:pr-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (benefitsRef.current[index] = el)}
              className="p-4 md:p-6 lg:px-4 flex flex-col items-center cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-white hover:bg-gray-100 transition border border-gray-300 rounded-lg shadow-sm lg:mt-0"
            >
              {/* Image Icon */}
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-12 h-12 mb-4"
              />
              {/* Title */}
              <h2 className="text-lg md:text-lg font-bold dark:text-zinc-300 text-gray-900 text-center mb-2 ">
                {benefit.title}
              </h2>
              {/* Description */}
              <p className="text-sm text-gray-600 text-center dark:text-zinc-400 ">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
