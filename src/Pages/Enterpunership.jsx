import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { School } from "../Data";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import { MdCheck } from "react-icons/md";
import Faq from "./Faq";
import CareerSection9 from "../Components/Career/CareerSection9";

import img1 from "../assets/ITIE&Entre/Entrepreneurship/img1.png";
import img2 from "../assets/ITIE&Entre/Entrepreneurship/img2.png";
import img from "../assets/ITIE&Entre/Entrepreneurship/img.jpg";
import img3 from "../assets/ITIE&Entre/Entrepreneurship/img3.jpg";
import img4 from "../assets/ITIE&Entre/Entrepreneurship/img4.jpg";
import confused from "../assets/ITIE&Entre/Entrepreneurship/confused.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { WiStars } from "react-icons/wi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummy1 from "../assets/ITIE&Entre/ITIE/dummy1.png";
import dummy2 from "../assets/ITIE&Entre/ITIE/dummy2.png";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";
import { PHero } from "../assets/assets";

import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import gsap from "gsap";

// const testimonials = [
//   {
//     img: dummy2,
//     name: "Preet Rajput",
//     title: "Entrepreneur",
//     content:
//       "Started training at BAOIAM and got placed as a Entrepreneur with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
//   },
//   {
//     img: dummy1,
//     name: "Lavanya Singh",
//     title: "Entrepreneur",
//     content:
//       "I started my training at BAOIAM. With all the essential training and knowledge from my mentors, I landed a job for 12 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me.",
//   },
//   {
//     img: dummy1,
//     name: "Trisha Jain",
//     title: "Entrepreneur",
//     content:
//       "Trained with BAOIAM as a Product Management and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
//   },
//   {
//     img: dummy2,
//     name: "Rituraj Datta",
//     title: "Entrepreneur",
//     content:
//       "Started training at BAOIAM and got placed as a Entrepreneur with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career..",
//   },
//   {
//     img: dummy1,
//     name: "Shubham Daiya",
//     title: "Entrepreneur",
//     content:
//       "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
//   },
// ];

const cards = [
  {
    number: "01",
    title: "Importance of Entrepreneurship Programs for Women",
    description:
      "Provide a platform for women to explore and pursue their passions while equipping them with essential skills and knowledge to navigate the business world. Foster financial independence, empowering women to control their futures autonomously, and create opportunities for personal and professional growth, driving success and economic empowerment for women in diverse industries.",
  },
  {
    number: "02",
    title: "Future Outlook for Women in Entrepreneurship Programs",
    description:
      "Continued growth in women-owned businesses contributes significantly to the economy, with increased opportunities and support for women entrepreneurs. Focusing on digitalization as a key facilitator for women-owned start-ups enables them to thrive, innovate, and expand in various industries. This support fosters economic progress and empowers women to lead successful ventures.",
  },
  {
    number: "03",
    title: "Opportunities Created by Entrepreneurship Programs",
    description:
      "Building a trustworthy and talented team is key to success. Emphasizing communication, collaboration, and mutual elevation within the team. Acknowledging that teamwork is essential, and setting achievable goals consistently leads to success. Entrepreneurship programs open doors for women to establish their brands and contribute to various industries. Learning and adapting from experiences, building on smaller successes to achieve larger goals.",
  },
];

const Enterpunership = () => {
  document.title = "Baoiam Innovations | Entrepreneurship";
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => { };
  }, []);

  const { id } = useParams();
  const course = School.find((cate) =>
    cate.subCate.find((subCate) => subCate.id === parseInt(id))
  );
  // const subCourse = course.subCate.find((subCate) => subCate.id === parseInt(id));

  const navigate = useNavigate();

  // console.log(subCourse);

  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => swiper.slideNext();
  const handlePrevClick = () => swiper.slidePrev();

  // For maping icons dynamically
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

  useEffect(() => {
    gsap.fromTo(
      ".en1",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
      }
    );

    gsap.fromTo(
      ".en2",
      { opacity: 0, scale: 0.2 },
      {
        opacity: 1,
        duration: 1,
        scale: 1,
        delay: 0.2,
        ease: "power1.inOut",
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".endiv1",
        start: "top 90%",
        end: "bottom 80%",
      },
    });

    tl.fromTo(
      ".en3",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
      }
    );

    tl.fromTo(
      ".en4",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.inOut",
      },
      "-=0.5"
    );

    tl.fromTo(
      ".en5",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.inOut",
      },
      "-=0.5"
    );

    gsap.fromTo(
      ".en7",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".endiv3",
          start: "top 90%",
          end: "bottom 80%",
        },
      }
    );

    const te = gsap.timeline({
      scrollTrigger: {
        trigger: ".endiv4",
        start: "top 90%",
        end: "bottom 80%",
      },
    });

    te.fromTo(
      ".en8",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.inOut",
      }
    );

    te.fromTo(
      ".en9",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.inOut",
      },
      "-=0.5"
    );

    te.fromTo(
      ".en10",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.inOut",
      },
      "-=0.5"
    );

    gsap.fromTo(
      ".en11",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".endiv5",
          start: "top 90%",
          end: "bottom 80%",
        },
      }
    );
  }, []);

  return (
    <div>
      {/*//! Banner */}
      <div className="flex items-center flex-col gap-5  md:mt-0 md:gap-8 lg:gap-0 md:flex-row px-8 md:px-16 w-full h-full lg:py-20    ">
        {/* Image Section */}
        <div className=" md:w-[400px] lg:w-[600px]  ">
          <div className="en2  lg:mt-10  ">
            <img
              src={img}
              className="rounded-2xl shadow-xl "
              alt="Entrepreneurship"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className=" text-center md:text-right lg:text-right md:w-[70%]  ">
          <h2 className="text-3xl px-1 md:text-3xl md:pt-10 md:pl-7 lg:text-4xl bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent font-bold">
            Entrepreneurship{" "}
            <span className="text-black dark:text-white">Course</span>
          </h2>

          <p className="mt-5 dark:text-slate-200 lg:text-lg md:text-base sm:text-sm text-sm md:pl-7 text-slate-600 ">
            Welcome to <strong>BAOIAM</strong>, the premier learning platform
            exclusively for women entrepreneurs! Ignite your entrepreneurial
            spirit and embark on your journey to success. As a launchpad for
            aspiring entrepreneurs, we empower you to learn, innovate, and
            achieve success.
          </p>

          <button
            onClick={() => navigate("/Maintenance")}
            className="en1 relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 sm:px-10 md:px-12 py-3 mt-10 lg:mt-16 text-sm sm:text-base dark:text-white dark:border-white overflow-hidden text-white font-medium border border-indigo-600 rounded-full hover:text-indigo-600 group "
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <IoIosArrowRoundForward size={30} />
            </span>
            <span className="relative">Attend Info Session</span>
          </button>
        </div>
      </div>

      {/*//! Program Overview */}
      <div className="p-6 md:p-10 lg:mb-12">
        <div className="endiv1 mx-auto max-w-7xl px-4 md:px-2">
          {/* Heading Section */}
          <div className="text-center my-10">
            <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
              Program{" "}
              <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col-reverse md:flex-row lg:my-5 items-center justify-between">
            {/* Image Section */}

            {/* Text Section */}
            <div className="en4 w-full md:w-[900px] lg:w-1/2  lg:ml-10">
              <p className="mt-2 dark:text-slate-200 text-center md:text-left lg:text-lg md:text-base sm:text-sm text-sm text-slate-600  ">
                Our Entrepreneurship Courses are formulated in a way that can be
                easily studied and comprehended. We offer a plethora of courses
                that are skill-centric and are purely based on practical
                applications. Students can learn new skills or even hone their
                existing skills. This gives them a chance to build a strong
                skillset that can propel them to a new level in their
                professional lives.
              </p>
              {/* <div className="text-indigo-600 font-medium mt-4">
                ⏳ Enrollment Deadline Approaching Soon!
              </div> */}
            </div>
            <div className="en5 w-full md:w-[600px] lg:w-1/2 mb-6 md:pl-16 md:mb-0">
              <div className="relative">
                <img
                  src={img4}
                  alt="Person"
                  className="rounded-2xl object-cover w-[500px] rounded-tr-3xl rounded-bl-3xl shadow-[7px_7px_#4338ca] sm:shadow-[10px_10px_#4338ca] md:shadow-[10px_10px_#4338ca] lg:shadow-[17px_17px_#4338ca]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //!Course Highlights */}
      <CourseHighlights />
      {/* //!Importance and Opportunities */}
      <div className="py-16 mb-20">
        <div className="endiv3 max-w-7xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl  text-center mb-8 lg:mb-12 font-bold">
            Importance and{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>

          {/* Cards Container */}
          <div className="en7 flex flex-col  lg:flex-row justify-center md:mx-10 lg:space-x-7 mt-10 md:mt-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative rounded-2xl shadow-xl dark:bg-[#25223f] border border-gray-200 bg-white hover:scale-105 dark:border-gray-400 dark:hover:border-white hover:border-gray-500 hover:shadow-2xl transition-transform duration-300 ease-in-out p-6 sm:p-8 w-full  lg:w-1/2 flex flex-col justify-between ${index === 1 ? "top-20" : index === 2 ? "top-40" : " "
                  }`}
              >
                <div>
                  {/* Card icon */}
                  {/* <h4 className="text-xl sm:text-xl font-semibold text-indigo-600 mb-4">
              {card.number}
            </h4> */}

                  {/* Card Title */}
                  <h4 className="text-xl sm:text-xl font-semibold dark:text-indigo-200 text-indigo-600 mb-4">
                    {card.title}
                  </h4>

                  {/* Card Description */}
                  <p className=" mt-8 dark:text-slate-200 leading-relaxed text-center lg:text-base md:text-base sm:text-sm text-sm text-gray-800">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //!Women Entrepreneurship Program */}

      <div className="p-6 md:p-10 lg:mb-12">
        <div className="endiv1 mx-auto max-w-7xl px-4 md:px-2">
          {/* Heading Section */}
          <div className="text-center my-10">
            <h2 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
              Women{" "}
              <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
                Entrepreneurship
              </span>
            </h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col-reverse md:flex-row lg:my-5 items-center justify-between">
            {/* Image Section */}

            {/* Text Section */}
            <div className="en4 w-full md:w-[900px] lg:w-1/2  lg:ml-10">
              <p className="mt-2 dark:text-slate-200 text-center md:text-left lg:text-lg md:text-base sm:text-sm text-sm text-slate-600  ">
                Our Women Entrepreneurship Program aims to support and empower
                women in starting and growing their businesses. This program is
                specially pieced together by our experts to guide our women
                entrepreneurs and to teach them to build their strong business
                empires. It typically includes mentorship, training, and
                resources to enhance skills, foster networking, and overcome
                challenges women may face in the business world. The goal is to
                promote economic independence and gender equality.
              </p>
            </div>
            <div className="en5 w-full md:w-[600px] lg:w-1/2 mb-6 md:pl-16 md:mb-0">
              <div className="relative">
                <img
                  src={img3}
                  alt="Person"
                  className="rounded-2xl object-cover w-[500px] rounded-tr-3xl rounded-bl-3xl shadow-[7px_7px_#4338ca] sm:shadow-[10px_10px_#4338ca] md:shadow-[10px_10px_#4338ca] lg:shadow-[17px_17px_#4338ca]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//! Testimonials */}
      {/* <div className="endiv5">
        <h1 className="text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Our <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">Testimonials</span>
        </h1>

        <div className="en11 relative w-full px-4 md:px-10 pb-10 md:pb-20">
          <Swiper
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="border border-indigo-600 shadow-xl rounded-2xl text-center mt-10 px-6 md:px-10 flex flex-col py-10 w-full h-96">
                  <img
                    className="w-16 md:w-24 h-16 md:h-24 mx-auto rounded-full object-cover"
                    src={testimonial.img}
                    alt="Student img"
                  />
                  <h3 className="text-lg md:text-xl text-gray-800 font-bold mt-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    {testimonial.title}
                  </p>
                  <p className="mt-2 text-gray-500">{testimonial.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev md:p-2"></div>
          <div className="swiper-button-next md:p-2"></div>
        </div>
      </div> */}
      <CareerSection9 />
      {/*//! Join with us */}
      {/* <div className="my-12 px-8 lg:px-24 w-full h-full">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl  md:px-8">
            <h2 className="mb-4 text-center text-[1.8rem] font-bold text-gray-800 md:mb-8 lg:text-4xl xl:mb-12">
              Join With Us Find the{" "}
              <span className="text-orange-500 border-b border-orange-500">
                Right Course
              </span>
            </h2> */}
      {/* <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                        {subCourse.plans.map((p, i) => {
                            return (
                                <div key={i} className={`flex flex-col rounded-lg border ${p.name === "Premium" ? "border-orange-500 relative" : ""} p-4 pt-6`}>
                                    <div className="mb-12">
                                        {p.name === "Premium" && (
                                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                                                <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">most popular</span>
                                            </div>
                                        )}
                                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">{p.name}</div>
                                        <p className="mx-auto mb-8 px-8 text-center text-gray-500 font-medium">{p.courseName}</p>

                                        <div className="space-y-2">
                                            {p.courseItems.map((item, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <MdCheck size={22} className='text-orange-500' />
                                                    <span className="text-gray-600">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-col gap-8">
                                        <div className="flex items-end justify-center gap-1">
                                            <span className="self-start text-gray-600">₹</span>
                                            <span className="text-4xl font-bold text-gray-800">{p.price}</span>
                                            <span className="text-gray-500">/Full Course</span>
                                        </div>

                                       
                                        <button
                                            className={`block rounded-lg ${p.name === "Premium" ? "bg-orange-500 text-white" : "bg-gray-500"} px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700 md:text-base`}
                                            onClick={() => navigate('/maintenance')}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div> */}
      {/* <div className="text-center text-sm text-gray-500 sm:text-base">
              Need help deciding?{" "}
              <a
                href="#"
                className="text-gray-600 underline transition duration-100 hover:text-orange-600 active:text-orange-400"
              >
                Get in touch
              </a> */}
      .
      {/* </div>
          </div>
        </div>
      </div> */}

      {/*//! Faq */}
      {/* <Faq /> */}
      {/* <div>
      <h2 className="font-bold text-4xl text-center mb-8 mt-20 mx-5 ">
        Frequently Asked <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Questions</span>
      </h2>
      <div className="flex">
      <Faq />
      <img
                  src={confused}
                  alt="Person"
                  className="rounded-xl mt-28 mr-20 size-96 "
                />
      </div>
      </div> */}
      <div>
        <h2 className="font-bold text-4xl text-center md:mb-8 md:mt-10 mx-5">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row">
          <Faq />
          <img
            src={confused}
            alt="Person"
            className="rounded-xl mt-28 mr-20 size-96 lg:block hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Enterpunership;