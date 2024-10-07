import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import data from "./TestimonalAboutus.json";

import testimonals from "../assets/Images/testimonals7.jpg"
import testimonals1 from "../assets/Images/testimonal10.jpg";
import testimonals2 from "../assets/Images/testimonals8.jpg";

gsap.registerPlugin(ScrollTrigger);

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "fill-[#facc15]" : "fill-[#CED5D8]"}`}
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
);

const Testimonials = () => {
  useEffect(() => {
    // Animating the heading
    gsap.fromTo(
      ".testimonials-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animating the testimonial cards
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const images = [
    {
      imgSrc: testimonals,
      name: "Atharv Ingale",
    },
    {
      imgSrc: testimonals1,
      name: "Aishwarya Kamble",
    },
    {
      imgSrc: testimonals2,
      name: "Kaushiki Dey",
    },
  ];

  return (
    <div className="my-12 relative z-10">
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-2 px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center mb-3 font-bold testimonials-heading">
          What Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Students
          </span>{" "}
          Say
        </h2>
        <p className="mt-2 md:mt-4 text-slate-500 dark:text-slate-300 leading-relaxed text-xs md:text-base testimonials-heading">
          {data.description}
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-6  max-w-6xl relative mx-auto mt-20 px-4">
        {data.testimonials.map((testimonial, index) => (
          <div
            key={index}
            // dark:bg-[#080529]
            className="relative w-full mb-6 p-6 dark:bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-lg backdrop-saturate-150  rounded-lg shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] testimonial-card"
          >
            {/* Profile Image */}
            <img
              src={images[index].imgSrc}
              className="w-14 h-14 rounded-full absolute -top-7 left-1/2 transform -translate-x-1/2"
              alt={testimonial.name}
            />
            {/* Testimonial Quote */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-800 dark:text-gray-100 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            {/* Star Rating */}
            <div className="mt-4 flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < testimonial.rating} />
              ))}
            </div>
            {/* Name */}
            <div className="mt-2 text-center">
              <h4 className="text-sm font-bold dark:text-gray-100 text-gray-900">
                {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
