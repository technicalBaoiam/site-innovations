import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentCard from "../Components/AboutUs/ContentCard";
import ValueCard from "../Components/AboutUs/ValueCard";
import HeroCard from "../Components/AboutUs/HeroCard";
import ProgressBar from "../Components/AboutUs/ProgressBar";
//import OurTeam from "./OurTeamSlide"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { swiperData } from "../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Subcription from "../Components/Home/Subcription";
// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "./../Components/OurTeam Components/teamData";

import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import aboutus1 from "../assets/aboutus (1).jpg";
import aboutus2 from "../assets/aboutus (2).jpg";
import aboutus3 from "../assets/aboutus (3).jpg";
import aboutus4 from "../assets/aboutus (4).jpg";
import aboutus5 from "../assets/aboutus (5).jpg";
import Liam from "../assets/Liam.png";
import Henrik from "../assets/Henrik.png";
import Sylphie from "../assets/Sylphie.png";
import {
  FaHandsHelping,
  FaEye,
  FaLightbulb,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineCode, AiOutlineClockCircle } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import OurTeam from "../Components/AboutUs/OurTeam";
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import Testimonials from "./TestimonalAboutus";
import Timeline from "../Components/AboutUs/Timeline";
import { Mission, Vision } from "../assets/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { Leaderteam1 } from "../../Components/OurTeam Components/teamData";


const AboutUs = () => {
  document.title = "Baoiam Innovations | About Us";
  // const [data, setData] = useState(swiperData);

  useEffect(() => {
    gsap.fromTo(
      ".image-container img",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.inOut" }
    );

    gsap.fromTo(
      ".content-overlay p",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".content-overlay h2",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".content-overlay .lg\\:text-lg",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      ".animediv1 h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animediv1 h2",
          start: "top 80%",
          end:'bottom 80%', 
          // toggleActions: "play none none reverse", // Play when entering, reverse when leaving
        },
      }
    );

    // Animate the image
    gsap.fromTo(
      ".animediv1 img",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animediv1 img",
          start: "top 80%", // Starts when the image comes into view
          // toggleActions: "play none none reverse",
        },
      }
    );

    // Animate the text elements (h4, p, span) with stagger
    gsap.fromTo(
      ".animediv1 h4, .animediv1 p, .animediv1 span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".animediv1 h4",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".animediv1 img",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animediv1 img",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".animediv1 h4, .animediv1 p, .animediv1 span",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".animediv1 h4",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".core-values-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".core-values-heading",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".value-card-1",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-1",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".value-card-2",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-3",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".value-card-3",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-3",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".value-card-4",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".value-card-2",
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".heading",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.2,
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".secdiv1",
        start: "top 70%",
        end: "bottom 90%",
      },
    });

    tl.fromTo(
      ".sec1h",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      }
    );

    tl.fromTo(
      ".sec1",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.2,
      }
    );

    tl.fromTo(
      ".sec1img",
      {
        opacity: 0,
        y: -20,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
      },
      "-=0.7"
    );

    const te = gsap.timeline({
      scrollTrigger: {
        trigger: ".secdiv2",
        start: "top 70%",
        end: "bottom 90%",
      },
    });

    te.fromTo(
      ".sec2h",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
      }
    );

    te.fromTo(
      ".sec2",
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.2,
      }
    );

    te.fromTo(
      ".sec2img",
      {
        opacity: 0,
        y: 20,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
      },
      "-=0.7"
    );

    gsap.fromTo(
      ".sec3",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".secdiv3",
          start: "top 70%",
          end: "bottom 80%",
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Section - 1 */}
      <div className="flex mt-20 gap-8 lg:gap-0 justify-center flex-col-reverse lg:flex-row items-center mx-auto w-full ">
        <div className="relative w-full">
          <div className="h-[450px] w-full image-container">
            <img
              className="w-full h-full opacity-90 object-cover"
              src={aboutus4}
              alt="image"
            />
          </div>
          <div
            // ref={textRef}
            className="absolute left-0 bg-black/60 right-0 top-0 w-full h-full text-center"
          >
            <div className="flex justify-center items-center flex-col h-full text-white">
              <p className="heading rounded-3xl mb-3 py-1 px-4 w-fit bg-gradient-to-r from-pink-500 text-center to-violet-600 z-10">
                <span className="text-[0.55rem] md:text-sm mb-2 font-medium">
                  Redefining education with advance edtech learning
                </span>
              </p>
              <h1 className="heading text-3xl md:w-[50%] mb-9 font-extrabold text-center lg:text-5xl">
                Join Us on a Journey to Be{" "}
                <span className="bg-gradient-to-r from-teal-300 italic to-amber-300 bg-clip-text text-transparent">
                  One In A Million!
                </span>
              </h1>

              <p className="heading text-xs md:text-base w-[90%] md:w-[60%] text-slate-300 ">
                Our platform is committed to delivering high standards and
                skills sharpening courses. We believe in empowering every
                individual who connects with us on this industry driven journey,
                helping them stand out from millions. We are here to support
                them in achieving their professional goals.
              </p>
            </div>
          </div>
          {/* <div ref={sliderRef} className="h-80 md:h-full md:w-[50%] pt-3 md:pt-0">
          <SliderHero />
          </div> */}
        </div>
      </div>

      {/* Section - 2 */}
      <div className="secdiv1 w-full px-4 my-12 lg:my-16">
        <h2 className="sec1h text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="w-[100%] sec1img md:w-[20%] px-4 lg:px-0">
            <img
              src={Mission}
              alt="image"
              className="w-full h-full rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] lg:shadow-[-20px_-25px_#4338ca]"
            />
          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
            <p className="sec1 text-indigo-600 dark:text-indigo-500 font-medium text-xs lg:text-sm">
              Inspiring Growth, one aim at a time
            </p>
            <h4 className="sec1 mt-2 text-lg lg:text-2xl font-semibold">
              Providing access to exceptional Courses to help achieve greater
              success.
            </h4>

            <p className="sec1 text-xs lg:text-base dark:text-slate-300 text-slate-600 mt-4">
              Every individual shines with their unique expertise. Discover your
              skills in depth with us. Our transformative courses will equip you
              either upgraded version of yourself, ensuring you never fall
              behind in life.
            </p>
          </div>
        </div>
      </div>

      <div className="secdiv2 w-full mx-auto px-4 mt-20 ">
        <h2 className="sec2h text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
            Vision
          </span>
        </h2>

        <div className="flex flex-col mx-auto md:flex-row-reverse justify-center items-center w-full">
          <div className="w-[100%] sec2img md:w-[25%] px-4 lg:px-0">
            <img
              src={Vision}
              alt="image"
              className="w-full h-full rounded-tl-2xl rounded-br-2xl object-cover shadow-[-10px_-10px_#4338ca] sm:shadow-[-15px_-15px_#4338ca] md:shadow-[20px_25px_#4338ca]"
            />
          </div>

          <div className="md:w-[60%] h-full mt-8 lg:mt-0 px-4 md:px-12">
            <p className="sec2 text-indigo-600 dark:text-indigo-500 font-medium text-xs lg:text-sm">
              Future-focused education for Success
            </p>
            <h4 className="sec2 mt-2 text-lg lg:text-2xl font-semibold">
              Preparing the next Gen to tackle upcoming challenges
            </h4>

            <p className="sec2 text-xs lg:text-base dark:text-slate-300 text-slate-600 mt-4">
              {" "}
              We are not in the old generation; we are in modern Era where
              technology changes in minutes and trends shifts in seconds.
              Surviving here Without skills is nearly impossible, but baoiam has
              your back. In this modern landscape, baoaim is committed to
              preparing students to tackle upcoming challenges with high quality
              education.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="secdiv3 flex flex-col items-center gap-4 mx-auto px-4 md:px-10 py-20">
        <div className="w-full text-center core-values-heading">
          <h2 className="sec3 text-3xl md:text-4xl text-center mb-8 lg:mb-12 font-bold">
            Core{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
        </div>

        <div className="flex justify-center items-center flex-wrap lg:flex-nowrap lg:flex-row gap-8">
          <div className="value-card-1">
            <ValueCard
              Icon={FaHandsHelping}
              title="Standard Education "
              description="Delivering standardized quality through expert professors."
            />
          </div>
          <div className="value-card-2">
            <ValueCard
              Icon={FaEye}
              title="Acceptance"
              description="Join us and enjoy lifetime access to out resources and educational benefits."
            />
          </div>
          <div className="value-card-3">
            <ValueCard
              Icon={FaLightbulb}
              title="Innovation with creativity"
              description="Continuously delivering and adapting to meet industry demand with innovative courses."
            />
          </div>
          <div className="value-card-4">
            <ValueCard
              Icon={FaChartLine}
              title="Students accomplishment"
              description="We are dedicated to students' success, providing it above all else to make it reality."
            />
          </div>
        </div>
      </div>

      {/* how it started */}

      <Timeline />

      {/* team */}

      {/* <TeamSwiper /> */}
      <OurTeam data={swiperData} />

      {/* USP */}

      {/* <div className="flex flex-col items-start gap-4 lg:py-10 mb-10 mx-auto p-8 lg:pl-20 lg:pr-20">
        <div className="w-full text-center">
          <h2 className="font-bold text-3xl lg:text-4xl">
            What Makes Us Different
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8 w-full">
          <ValueCard
            Icon={FaHandsHelping}
            title="Expert-Led Learning"
            description="Every course is designed and taught by industry leaders."
          />
          <ValueCard
            Icon={FaEye}
            title="Career-Focused Curriculum"
            description="Our courses are tailored to equip you with the skills needed to land your dream job."
          />
          <ValueCard
            Icon={FaLightbulb}
            title="Flexible Learning Paths"
            description="Learn at your own pace, from anywhere, anytime"
          />

          <ValueCard
            Icon={FaChartLine}
            title="Affordable Education"
            description="High-quality courses without the heavy price tag."
          />
        </div>
      </div> */}

      {/* testimonial */}
      <Testimonials />

      {/* Section 6 */}
      {/* <OurTeam /> */}
      <Subcription />
    </div>
  );
};

export default AboutUs;
