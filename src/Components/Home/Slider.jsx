import React, { useState, useEffect, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { School } from "../../Data";
// import { courseCategories } from "../../assets/swiper-imgs/categories";
import { categories } from "../../assets/swiper-imgs/categories"; // Import JSON data
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedCourses } from "../../Redux/slices/courseSlice"; // Adjust the import path as necessary
import { BeatLoader } from "react-spinners";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SliderSection() {
  const navigate = useNavigate();

  // redux start
  const dispatch = useDispatch();
  const { featuredCourses, status, error } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    // console.log("Component rendered, current status:", status);
    if (status === "idle") {
      dispatch(fetchFeaturedCourses());
    }
  }, [dispatch, status]);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.fromTo(
        ".Homeslideranime",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,

          y: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".Homeslidediv",
            start: "top 70%",
            end: "bottom 80%",
          },
        }
      );
    });

    return () => context.revert();
  });

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <BeatLoader color="#4F46E5" loading={true} size={15} />
      </div>
    );
  }
  // redux end

  if (featuredCourses) {
    return (
      <div className="slider-section Homeslidediv dark:bg-[#010203] w-full relative md:py-12 overflow-hidden ">
        <div className="text-center mb-0 lg:mb-8">
          <h2 className="Homeslideranime text-3xl md:text-4xl font-extrabold mb-8">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
        </div>

        <div className="Homeslideanime mx-4 mt-8 md:mx-14">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0} // Adjust the space between cards
            slidesPerView={1} // Default number of slides per view
            dot={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            className="swiper-container lg:px-6 Homeslideranime"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              620: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              740: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {featuredCourses?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="Homeslideranime h-[350px] md:h-[400px] max-h-[400px] overflow-hidden dark:bg-white/10 dark:border shadow-md rounded-3xl m-4 flex flex-col justify-between">
                  {/* Image Container */}
                  <div className="relative h-[60%]">
                    <img
                      src={slide.thumbnail_image}
                      alt={slide.title}
                      className="w-full h-full object-cover "
                    />
                    {/* Price and Duration in the same row */}
                    {/* <div className="absolute top-3 left-4 flex items-center space-x-3">
                      <span className="text-xs bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-4 py-1">
                        Premium
                      </span>
                      <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-4 py-1">
                        Plus
                      </span>
                    </div> */}
                  </div>
                  <div className="px-4 h-[45%] flex flex-col justify-between">
                    {/* Title and Description */}
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-extrabold pt-2 text-base md:text-lg text-nowrap">
                        {slide.title}
                      </h3>
                      <p className="text-xs md:text-sm pr-3 line-clamp-3 text-slate-600 dark:text-slate-200">
                        {slide.description}
                      </p>
                    </div>
                    {/* View More Button */}
                    {/* <div className="self-end mb-6">
                      <button
                        onClick={() => navigate(`/course/${slide.title}/${slide.id}`)}
                        className="bg-gradient-to-r w-fit rounded-md text-xs from-amber-500 to-red-600 text-white px-4 py-1 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300"
                      >
                        View More
                      </button>
                    </div> */}
                    {/* Price and Button */}
                    <div className="mt-auto flex justify-between items-center">
                      <p className="font-bold text-orange-600 text-base mb-6 dark:text-amber-500">
                        ₹{slide.plans[0].price}
                      </p>
                      <button
                        onClick={() =>
                          navigate(`/course/${slide.slug}/${slide.id}`)
                        }
                        className="bg-gradient-to-r text-xs rounded-md from-amber-500 to-red-600 text-white mb-6 px-3 py-1 font-semibold hover:bg-gradient-to-l"
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Buttons Positioned on the Sliders */}
        <div className="absolute top-[60%] left-2 transform z-10">
          <button className="swiper-button-prev text-indigo-600 transition"></button>
        </div>
        <div className="absolute top-[60%] right-2 transform z-10">
          <button className="swiper-button-next text-indigo-500 transition"></button>
        </div>
      </div>
    );
  }
}
