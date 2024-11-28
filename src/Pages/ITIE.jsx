import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/ITIE&Entre/ITIE/img2.png";
import intern1 from "../assets/ITIE&Entre/ITIE/intern1.jpg";
import productm from "../assets/ITIE&Entre/ITIE/productm .png";
import hr from "../assets/ITIE&Entre/ITIE/hr.png";
import dataanalytics from "../assets/ITIE&Entre/ITIE/dataanalytics.png";
import seo from "../assets/ITIE&Entre/ITIE/seo.png";
import webd from "../assets/ITIE&Entre/ITIE/webd.png";
import uiux from "../assets/ITIE&Entre/ITIE/uiux.png";
import gaphicsdesigning from "../assets/ITIE&Entre/ITIE/gaphicsdesigning.png";
import businesscomm from "../assets/ITIE&Entre/ITIE/businesscomm.png";
import marketing from "../assets/ITIE&Entre/ITIE/marketing.png";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";
import CourseCard from "../Components/CourseDetails/CourseCard";
import Amazingcareer from "../Components/CourseDetails/Amazingcareer";

import { PiGraduationCapFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import Faq from "./Faq";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dummy1 from "../assets/ITIE&Entre/ITIE/dummy1.png";
import dummy2 from "../assets/ITIE&Entre/ITIE/dummy2.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//MY WORK
import hero from "../assets/ITIE&Entre/ITIE/hero.jpeg";

const highlights = [
  { title: "Live Online Classes", description: "At your own schedule" },
  { title: "Mobile Friendly", description: "No Laptop? No Problem" },
  {
    title: "Paid Internship Opportunities",
    description: "To Build Your Career",
  },
  { title: "Certificate of Completion", description: "From Baoiam Trainings" },
  { title: "Live Projects", description: "For hand-on practice" },
  { title: "Doubt Clearing", description: "Through Q&A forum" },
  { title: "Beginner Friendly", description: "No prior knowledge required" },
  {
    title: "12-20 Weeks Duration",
    description: "2 hours/week (flexible schedule)",
  },
  { title: "Downloadable Resource", description: "With Lifetime Access" },
  {
    title: "Professional trainer accreditation",
    description: "Study From The Best Tutors",
  },
];

const courses = [
  {
    title: "Human Resource",
    duration: "3 months",
    description: "Empowering People, Building Teams with Baoiam.",
    image: hr,
  },
  {
    title: "Data Analytics",
    duration: "3 months",
    description: "Turn Data in your advantage with BAOIAM",
    image: dataanalytics,
  },
  {
    title: "Marketing",
    duration: "3 months",
    description: "Make your products/services irresistible.",
    image: marketing,
  },
  {
    title: "SEO",
    duration: "3 months",
    description: "Attract website traffic and rank higher.",
    image: seo,
  },
  {
    title: "Web Development",
    duration: "3 months",
    description: "From concept to click, web magic made real.",
    image: webd,
  },
  {
    title: "UI/UX Designing",
    duration: "3 months",
    description: "Design that sparks curiosity, fuels understanding.",
    image: uiux,
  },
  {
    title: "Gaphics Designing",
    duration: "3 months",
    description: "Learn the art of visual imagery.",
    image: gaphicsdesigning,
  },
  {
    title: "Product Management",
    duration: "3 months",
    description: "Building products that users love.",
    image: productm,
  },
  {
    title: "Business Communication",
    duration: "3 months",
    description: "Mitigate communication barriers.",
    image: businesscomm,
  },
];

const testimonials = [
  {
    img: dummy2,
    name: "Tanisha Rajput",
    title: "Web Developer",
    content:
      "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee in Web Development. They helped me in learning with ease which eventually landed me a job for a package of 12 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Prince Raj",
    title: "HR Generalist",
    content:
      "I started my training at BAOIAM as a HR. With all the essential training and knowledge from my mentors, I landed a job for 12 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
  },
  {
    img: dummy1,
    name: "Vijay Poranki",
    title: "Product Manager",
    content:
      "Trained with BAOIAM as a Product Management and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },
  {
    img: dummy2,
    name: "Rituraj Datta",
    title: "Data Analyst",
    content:
      "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee as a Data Analytics. They helped me in learning with ease which eventually landed me a job for a package of 11 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Android Developer",
    content:
      "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Preetika Rawat",
    title: "Digital Marketer",
    content:
      "I started my training at BAOIAM. With all the essential training and knowledge from my mentors, I landed a job for 13 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
  },
  {
    img: dummy1,
    name: "Shubham Daiya",
    title: "Android Developer",
    content:
      "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
  },
  {
    img: dummy1,
    name: "Harsha Khirwadkar",
    title: "Graphic Designer",
    content:
      "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee. They helped me in learning with ease which eventually landed me a job for a package of 10 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
  },
  {
    img: dummy1,
    name: "Pracheta Bhanjachowdhuri",
    title: "UI/UX Designer",
    content:
      "I trained with BAOIAM as a UI/UX Designer and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
  },
];

const ITIE = () => {
  document.title = "Baoiam Innovations | Intern Teach Intern Earn";
  const navigate = useNavigate();

  //  gsap
  useEffect(() => {
    gsap.fromTo(
      ".text-section h1",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".text-section h2, .text-section p, .text-section button",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".image-section img",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".program-overview h1",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".program-overview h1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP Animation for the image
    gsap.fromTo(
      ".program-overview .image-section img",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".program-overview .image-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP Animation for the paragraph
    gsap.fromTo(
      ".program-overview .text-section p",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: ".program-overview .text-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.utils.toArray(".swiper-slide").forEach((slide) => {
      gsap.fromTo(
        slide,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // GSAP animation for Swiper container
    gsap.fromTo(
      ".swiper-container",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".swiper-container",
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      {/* ITIE */}


<div className="relative flex flex-col-reverse md:flex-row items-center justify-center bg-transparent p-8 mt-8 md:p-16 mx-auto md:mx-20 rounded-3xl">
  {/* Background Accent Shape */}
  <div className="absolute top-0 -left-8 w-1/2 h-full opacity-50 dark:opacity-25 bg-gradient-to-br from-indigo-300 via-pink-200 to-violet-300 rounded-full transform -translate-x-1/3 -translate-y-1/4 pointer-events-none blur-3xl"></div>

  {/* Text Section */}
  <div className="relative text-section w-full md:w-1/2 text-center md:text-left z-10">
    <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 leading-tight tracking-tight">
      Interns <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">TEACH</span> Interns <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">EARN</span>
    </h1>
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
      ITIE Revolutionizes Internships
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-lg text-sm leading-relaxed">
      Our mission is all about learning and sharing. Our platform is designed to help you gain knowledge, share your expertise with others, and earn rewards along the way.
    </p>
    <button onClick={() => navigate('/Maintenance')} className="mt-8 inline-block bg-gradient-to-r from-indigo-800 to-indigo-500 text-white py-3 px-8 rounded-full text-sm shadow-lg transform hover:scale-105 hover:bg-gradient-to-l transition-transform duration-300 ease-in-out">
      I am Interested
    </button>

  </div>

  {/* Image Section */}
  <div className="relative image-section w-full md:w-1/2 mt-8 md:mt-0 flex justify-center z-10">
    <img src={hero} alt="Person pointing" className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300" />
  </div>

  <div className="absolute -bottom-20 -right-20 w-1/2 h-full opacity-50 dark:opacity-25 bg-gradient-to-br from-indigo-300 via-pink-200 to-violet-300 rounded-full transform pointer-events-none blur-3xl"></div>

</div>





      {/* Program Overview */}

      <div className="program-overview md:mx-10">
        <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-gray-800 text-center mt-10 md:my-10">
          Program{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Overview
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="image-section w-full md:w-1/2 justify-center md:justify-start md:mr-4 hidden md:block">
            <img
              src={intern1}
              alt="Person"
              className="rounded-tl-2xl rounded-br-2xl w-2/3 md:w-4/5 md:ml-20 object-cover shadow-none sm:shadow-lg lg:shadow-[20px_25px_#4338ca]"
            />
          </div>

          <div className="text-section w-full md:w-1/2 p-4">
            <p className="text-gray-600 dark:text-slate-300 mb-4 text-justify mx-4 md:mr-10 md:pr-5">
              ITIE is a program that has been formulated by our team and leading
              experts for young enthusiasts to build a strong and powerful
              career path. Through this program, not only do the interns get the
              chance to learn and hone their skills, but also to monetise their
              skill by cascading the knowledge they have gained so far into
              others. Hence, after learning a skill, they will be tested on it
              and if they clear the tests, they get the opportunity to teach a
              new intern who wishes to learn the same skill as them. The
              'Teacher Interns' will then earn exciting compensation offers and
              incentives.
            </p>
          </div>
        </div>
      </div>

      {/* Course Highlight */}

      <div className="md:mt-16 mb-10 ">
        <CourseHighlights />
      </div>

      {/* <div className="max-w-7xl mx-4 md:mx-auto p-4 mt-16 mb-20 flex-col">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-8">
          Course <span className="text-indigo-600">Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 px-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`flex items-center space-x-5 ${index !== highlights.length - 1 && index !== 8 ? 'border-b w-full md:w-5/6 border-gray-900' : ''
                } pb-4`}
            >
              <div className="text-indigo-600 text-3xl md:text-4xl">
                <PiGraduationCapFill />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Our courses */}

      {/* <div className="mx-auto p-6 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-black">
          Our <span className="text-indigo-600">Courses</span>
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-black text-white px-6 py-2 hover:bg-indigo-600 hover:text-amber-50 rounded">
            Plus +
          </button>
          <button className="bg-white text-black border-2 border-black hover:bg-indigo-600 hover:text-amber-50 px-6 py-2 rounded">
            Premium ★
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {courses.map((course, index) => (
            <div key={index} className="border-t-4  border border-indigo-600  rounded-t-3xl rounded-b-md hover:shadow-2xl hover:border hover:scale-105 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4 h-full bg-indigo-100">
                <h3 className="text-lg font-bold text-gray-800 bg-indigo-300 mx-8 rounded-full text-center">{course.title}</h3>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center text-sm text-indigo-600 font-bold my-2 ">
                    <span className="text-indigo-600 mr-2"><GoDotFill size={20} />
                    </span>
                    {course.duration}

                  </div>
                  <div className="text-orange-600"><FaPlus />
                  </div>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div> */}

      <CourseCard />

      {/* Our Testimonials */}

      <div className="relative">
        <h1 className="text-3xl md:text-5xl dark:text-white text-center font-bold mt-5 md:mt-20 md:my-10 text-black">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h1>

        <div className="relative w-full px-4 md:px-1 pb-10 md:pb-20 mx-auto max-w-7xl swiper-container">
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
                <div className="border border-indigo-600 text-sm md:text-base shadow-xl rounded-2xl text-center mt-5 px-6 md:px-5 flex flex-col py-6 w-full h-[400px] swiper-slide">
                  <img
                    className="w-16 md:w-24 h-16 md:h-24 mx-auto rounded-full object-cover"
                    src={testimonial.img}
                    alt="Student img"
                  />
                  <h3 className="text-lg md:text-xl dark:text-white text-gray-800 font-bold mt-4">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 font-semibold">
                    {testimonial.title}
                  </p>
                  <p className="mt-3 dark:text-slate-300 text-gray-600">
                    {testimonial.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev text-indigo-600 rounded-full p-5 md:p-7 absolute top-1/2 md:left-[-60px] transform -translate-y-1/2 z-10"></div>
          <div className="swiper-button-next text-indigo-600 rounded-full p-5 md:p-7 absolute top-1/2 md:right-[-60px] transform -translate-y-1/2 z-10"></div>
        </div>
      </div>

      {/* Amazing Career */}
      <Amazingcareer />

      {/* <div className="py-8 px-8 lg:px-24 my-20 w-full h-full text-white bg-[#F6A611] dark:bg-gray-700 text-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
          Amazing <span className="">Career</span>
        </h4>
        <p className="text-sm lg:text-lg">
          Grab these exclusive offers available only once a year.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-5 md:gap-20 justify-center w-full mt-8">
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 2 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">15% OFF</p>
          </div>
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 3 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">20% OFF</p>
          </div>
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 4 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">25% OFF</p>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <Faq />
    </div>
  );
};

export default ITIE;



{/* <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-white p-2 mx-10">

<div className="text-section md:w-1/2 text-center md:text-left">
  <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
    Interns <span className="text-indigo-600">TEACH</span> Interns <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">EARN</span>
  </h1>
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
    ITIE Revolutionizes Internships
  </h2>
  <p className="text-gray-600 mt-6 mr-5">
    Our mission is all about learning and sharing. Our platform is designed to help you gain knowledge, share your expertise with others, and earn rewards along the way.
  </p>
  <button onClick={()=> navigate('/Maintenance')}  className="mt-8 bg-gradient-to-r from-indigo-800 to-indigo-500 text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300 py-2 px-6 rounded-full text-lg">
    I am Interested
  </button>
</div>


<div className="image-section md:w-1/2 mt-8 md:mt-0 flex justify-center">
  <img src={hero} alt="Person pointing" className="w-full h-auto object-cover rounded-xl" />
</div>
</div> */}