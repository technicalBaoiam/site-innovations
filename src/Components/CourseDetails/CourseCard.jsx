import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import productm from "../../assets/ITIE&Entre/ITIE/productm.jpeg";
import analysis from "../../assets/ITIE&Entre/ITIE/analysis.jpeg";
import marketing from "../../assets/ITIE&Entre/ITIE/marketing.jpeg";
import seo from "../../assets/ITIE&Entre/ITIE/seo.jpeg";
import webd from "../../assets/ITIE&Entre/ITIE/webd.jpeg";
import ui from "../../assets/ITIE&Entre/ITIE/ui.jpeg";
import graphics from "../../assets/ITIE&Entre/ITIE/graphics.jpeg";
import businesscom from "../../assets/ITIE&Entre/ITIE/businesscom.jpeg";
import hr from "../../assets/ITIE&Entre/ITIE/hr.jpeg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const courses = [
  { image: hr, title: "Human Resource", rating: "4.5", review: "85" },
  { image: analysis, title: "Data Analytics", rating: "4.7", review: "90" },
  { image: marketing, title: "Marketing", rating: "4.0", review: "75" },
  { image: seo, title: "SEO", rating: "4.4", review: "88" },
  { image: ui, title: "UI/UX Designing", rating: "4.3", review: "70" },
  { image: webd, title: "Web Development", rating: "4.7", review: "95" },
  { image: productm, title: "Product Management", rating: "4.2", review: "70" },
  { image: graphics, title: "Graphics Designing", rating: "4.3", review: "72" },
  {
    image: businesscom,
    title: "Business Communication",
    rating: "4.0",
    review: "79",
  },
];

const CourseCard = () => {
  useEffect(() => {
    // GSAP Animation for cards
    gsap.fromTo(
      ".course-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".course-card",
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 my-10 md:my-10">
      <h2 className="text-3xl md:text-5xl dark:text-white font-bold text-center mb-8 text-black">
        Our{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
          Courses
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 sm:px-10 md:px-14">
        {courses.map((course, index) => (
          <div
            key={index}
            className="course-card dark:dark:bg-[#080529] max-w-sm w-full rounded-lg border border-slate-300 bg-slate-100 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5 py-4 h-full">
              <div className="font-bold text-lg dark:text-white md:text-2xl text-start">
                {course.title}
              </div>
              <div className="flex items-center my-3">
                <div className="text-base text-gray-600 dark:text-gray-100 md:text-lg font-semibold">
                  {course.rating}
                </div>
                <div className="text-xl flex font-semibold text-amber-400 ml-2">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-100 ml-2">
                  ({course.review} Reviews)
                </div>
              </div>
              <div className="mt-8 mb-3 flex items-center">
                <div onClick={() => navigate("/Maintenance")} className="inline-block bg-blue-200 cursor-pointer border-2 border-indigo-600 rounded-lg px-3 py-1 text-sm font-semibold text-indigo-700 mx-2">
                  Plus
                </div>
                <div onClick={() => navigate("/Maintenance")} className="inline-block bg-blue-200 cursor-pointer border-2 border-indigo-600 rounded-lg px-2 py-1 text-sm font-semibold text-indigo-700">
                  Premium
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
