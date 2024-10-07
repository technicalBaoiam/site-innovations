import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRightArrowLeft, FaChevronRight } from "react-icons/fa6";
import CourseCard from "./CourseCard";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Program = ({ title, data }) => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const buttonRefs = useRef([]);

  // useEffect(() => {
  //   // Animation for the title
  //   gsap.fromTo(
  //     titleRef.current,
  //     { opacity: 0, y: -30 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: titleRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );

  //   // Animation for each button
  //   buttonRefs.current.forEach((button, index) => {
  //     gsap.fromTo(
  //       button,
  //       { opacity: 0, y: 20 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.6,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: button,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //           delay: index * 0.1, // Stagger the animations
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div className="p-5 mx-auto lg:w-11/12" id="courses">
      <h2
        ref={titleRef}
        className="text-xl sm:text-2xl md:text-3xl  font-bold"
      >
        {title}
      </h2>
      <div className="md:px-10">
        <Swiper
          keyboard={{ enabled: true }}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween:10 },
            640: { slidesPerView: 2, spaceBetween:10 },
            768: { slidesPerView: 2, spaceBetween:20 },
            1024: { slidesPerView: 3,spaceBetween:20 },
            1440: { slidesPerView: 4,spaceBetween:20 },
          }}
          // onSlideChange={() => console.log("Slide changed")}
          // onSwiper={(swiper) => console.log("Swiper initialized")}
          className="  w-full py-4 mx-auto  flex flex-col justify-center items-center"
        >
          {data?.map((course, index) =>(
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Program;