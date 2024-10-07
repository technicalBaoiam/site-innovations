import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SliderHero from "../Components/School/SliderHero";
import OurHands from "../assets/Team/TeamHands.jpg";
import { FaHandsHelping } from "react-icons/fa";
import { FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";
import Program from "../Components/CourseCommon/Program";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import { universities } from "./../assets/Universities/Universities";
import { useDispatch } from "react-redux";
import { toggleEnrollForm } from "../Redux/slices/enrollFormSlice";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "./../Components/OurTeam Components/teamData";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Testimonials from "../Components/Testmonials/Testimonials";
import { UniversityPartners } from "../Components/Home/Partners";
import TypewriterText from "../Components/School/TypewiterText";
import Typewriter from "typewriter-effect";
import { FaSearch } from "react-icons/fa";
import Categories from "../Components/Home/Categories";
import introImg from "./../assets/Blogs/b10.png";
import BrandMarquee from "../Components/Marquee/BrandMarquee";
import { IoIosArrowRoundForward } from "react-icons/io";

const Courses = () => {
  document.title = "Baoiam Innovations | Courses";
  const [data, setData] = useState(swiperData);

  const { allCourses, status, error } = useSelector((state) => state.courses);
  const static_data = allCourses[0]?.courses;
  const static_data2 = allCourses[1]?.courses;
  const static_data3 = allCourses[2]?.courses;

  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const benefitsRef = useRef([]);
  const titleRef = useRef([]);
  const descriptionRef = useRef([]);
  const dispatch = useDispatch();

  return (
    <>
      {/* <TypewriterText /> */}
      <div className="flex mt-20 gap-8 lg:gap-0 justify-center flex-col-reverse lg:flex-row items-center mx-auto w-full ">
        <div className="relative w-full">
          <div className="h-[450px] w-full image-container">
            <img
              className="w-full h-full opacity-90 object-cover"
              src={introImg}
              alt="image"
            />
          </div>
          <div
            ref={textRef}
            className="absolute left-0 bg-black/70 right-0 top-0 w-full h-full text-center"
          >
            <div className="flex justify-center items-center flex-col h-full text-white">
              <h1 className="text-3xl w-[90%] md:pt-0 md:mx-40 md:text-4xl md:w-[50%] font-bold mb-4">
              Discover New Skills in
              </h1>
              <h2 className="text-amber-400 text-3xl w-[90%] md:w-[50%] md:text-5xl font-bold mb-3 md:mb-10">
                <Typewriter
                  options={{
                    strings: [
                      "Data Science & Analytics",
                      "Digital Marketing & SEO",
                      "Entrepreneurship & Innovation",
                      "Artificial Intelligence & Machine Learning",
                      "UI/UX Design & Product Management",
                      "Finance & Investment Strategies",
                      "Critical Thinking & Problem Solving",
                      "Leadership & Teamwork",
                      "Communication & Public Speaking",
                      "Emotional Intelligence",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h2>
              <p className="text-xs md:text-base w-[90%] md:w-[60%] text-slate-200 ">
                At BAOIAM, we offer a wide range of courses designed for
                students from schools and colleges. Whether you're preparing for
                board exams or pursuing a degree, our courses provide
                comprehensive, engaging content to help you succeed
                academically.
              </p>
            </div>
          </div>
          {/* <div ref={sliderRef} className="h-80 md:h-full md:w-[50%] pt-3 md:pt-0">
          <SliderHero />
          </div> */}
        </div>
      </div>
      <section
        ref={sectionRef}
        className="pt-16 pb-16 md:px-14  dark:bg-black dark:text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              ref={headingRef}
              className="text-3xl font-extrabold sm:text-4xl"
            >
              Why{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Choose Us?
              </span>
            </h2>
            <p ref={paragraphRef} className="mt-4 text-lg">
              We deliver the best service with the highest quality and
              commitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Expert Mentors",
              "Engaging Content",
              "Flexible Learning",
              "Certification",
            ].map((title, index) => (
              <div
                ref={(el) => (benefitsRef.current[index] = el)}
                key={index}
                className="flex flex-col items-center"
              >
                <div className="bg-gradient-to-r from-pink-400 to-indigo-600 p-4 rounded-full mb-4">
                  {index === 0 && (
                    <FiCheckCircle className="h-8 w-8 text-white" />
                  )}
                  {index === 1 && (
                    <FiTrendingUp className="h-8 w-8 text-white" />
                  )}
                  {index === 2 && <FiClock className="h-8 w-8 text-white" />}
                  {index === 3 && (
                    <FaHandsHelping className="h-8 w-8 text-white" />
                  )}
                </div>
                <h3 className="text-xl text-center font-bold">{title}</h3>
                <p className="mt-2 text-center">
                  {index === 0 &&
                    "Courses led by experienced teachers and professionals."}
                  {index === 1 &&
                    "Interactive lessons with quizzes, assignments, and projects."}
                  {index === 2 && "Study at your own pace, anytime, anywhere."}
                  {index === 3 &&
                    "Receive certificates upon completion of courses."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Categories /> */}
      <Program title={"Junior Courses"} data={static_data} />
      <Program title={"University Courses"} data={static_data2} />
      <Program title={"Other Courses"} data={static_data3} />

      {/* <UniversityPartners /> */}
      <div className="my-20">
        <h2
          className="text-3xl text-center md:text-4xl px-2 dark:text-white font-extrabold text-gray-900"
          ref={(el) => (titleRef.current[1] = el)}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            University Partners
          </span>
        </h2>
        <BrandMarquee array={universities} />
      </div>

      <div className="secdiv5 team-component">
        <div className="sec5 text-center text-xl md:text-4xl tracking-wide leading-4 font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Experts
          </span>
        </div>

        <div className="sec5 p-6">
          <Swiper
            keyboard={{ enabled: true }}
            navigation={true}
            scrollbar={{ draggable: true }}
            modules={[Keyboard, Pagination, Navigation, Scrollbar]}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            // onSlideChange={() => console.log("Slide changed")}
            // onSwiper={(swiper) => console.log("Swiper initialized")}
            className="md:h-[350px] w-full md:w-[90%] m-auto flex flex-col justify-center items-center gap-4"
          >
            {data?.map((el, index) => (
              <SwiperSlide
                key={index}
                ref={(el) => (cardsRef.current[index] = el)} // Assigning ref to each card
                className="group rounded-xl border shadow-md flip-card w-96 h-72 overflow-hidden"
              >
                <div className="flip-card-inner">
                  {/* Front Side (Image) */}
                  <div className="flip-card-front ">
                    <img
                      className="h-full w-full rounded-md object-cover "
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s"
                      }
                      alt={el.name}
                    />
                  </div>

                  {/* Back Side (Details) */}
                  <div className="flip-card-back dark:bg-black/50 dark:text-white bg-black/20 text-black rounded-md flex flex-col justify-center items-center">
                    {/* <h3 className="text-center font-sans font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-pink-500 via-amber-500 to-violet-400">
                      {el.name}
                    </h3>
                    <p className="text-center italic text-sm">({el.role})</p>
                    <div className="py-2 mb-4 flex items-center justify-center gap-2">
                      <FaLinkedin className="" />
                      <FaXTwitter className="" />
                    </div> */}
                    <p className="text-xs text-center px-4">
                      {/* {el.desc} */} Coming soon...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Testimonials />
      {/* Call to Action */}
      {/* <div className="w-full h-52 md:h-80 my-6 relative ">
        <div className="absolute w-full h-full hover:opacity-100 backdrop-blur-sm bg-black/80"></div>
        <img
          src={OurHands}
          alt="Join Us"
          className="w-full absolute-z-10 h-full object-cover"
        />
        <div className="flex absolute top-0 right-0 items-center gap-4 z-20 w-full h-full justify-center flex-col">
          
          <a
            href={"#courses"}
            className="relative transition-all px-3 py-2 rounded-full text-white ease-in duration-75 bg-indigo-500 group-hover:bg-opacity-0"
          >
            Browse All Courses
          </a>
          <Link
            to={"/contact"}
            className="relative transition-all px-3 py-2 rounded-full bg-indigo-500 text-white ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0"
          >
            Contact
          </Link>
          
        </div>
      </div> */}

      <div className="relative font-[sans-serif] before:bg-black before:opacity-60 dark:before:bg-black dark:before:opacity-80 before:absolute before:w-full before:h-full before:inset-0 before:z-10">
        <img
          src={introImg}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className=" relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-white lg:text-5xl md:text-3xl text-2xl font-bold">
              Ready to elevate your skills and advance your career?
            </h3>
            <p className="text-gray-300 text-lg px-10 mt-4">
              Take the Next Step in Your Career Journey! Enroll in our courses
              and Become{" "}
              <span className=" text-yellow-500 font-semibold">
                {" "}
                One In A Million
              </span>
              .
            </p>

            <button
              onClick={() => dispatch(toggleEnrollForm())}
              className="relative mr-4 mt-6 inline-flex items-center bg-gradient-to-r from-amber-500 to-red-600 px-6 md:px-8 lg:px-12 py-2 md:py-3 text-xs md:text-sm overflow-hidden text-white font-medium border border-orange-400 rounded-full hover:text-orange-500 group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <IoIosArrowRoundForward size={30} />
              </span>
              <span className="relative text-nowrap">Enroll Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
