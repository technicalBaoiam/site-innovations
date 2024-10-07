import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import CourseHighlights from "../Components/CourseDetails/CourseHighlights";
import Loader from "../Components/Loader";
import Brochure from "../Brochure.txt";
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

import {
  CollegeCourseData,
  Highlights,
  OtherCourseData,
  School,
} from "../Data";
import Testimonials from "../Components/Testmonials/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import courseDetailSlice, {
  fetchCourseDetails,
} from "../Redux/slices/courseDetailSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from "react-spinners";
import CourseHero from "../Components/CourseDetails/CourseHero";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
const apiUrl = import.meta.env.VITE_API_URL;
import { toggleEnrollForm } from "../Redux/slices/enrollFormSlice";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [showTab, setShowTab] = useState("plus");
  const [fixed, setFixed] = useState(false);
  const [coursePlusContent, setCoursePlusContent] = useState([
    "Doubt Clearing Sessions",
    "Project-Based Learning",
    "Mentorship and Evaluation",
    "Mentor Feedback",
    "Live Sessions",
    "Regular Quizzes and Assessments",
    "Personal Mentorship",
    "Expert Counseling",
    "Live Projects",
    "Dedicated Placement Cell",
  ]);
  // const [loading, setLoading] = useState(true);

  // const EnrollNow = ({ showForm, setShowForm }) => {
  //   const [animatePing, setAnimatePing] = useState(false);

  //   // Function to toggle the popup
  //   const togglePopup = () => {
  //     console.log(showForm);
  //     setShowForm(true);
  //     setAnimatePing(true);

  //     // Remove ping animation after a short duration
  //     setTimeout(() => {
  //       setAnimatePing(false);
  //     }, 1000); // Adjust duration as needed
  //   };
  // }

  const navigate = useNavigate();

  const planRef = useRef();
  const enrollNowScroll = () => {
    planRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // redux start

  const { courses, currentCourseId, status, error } = useSelector(
    (state) => state.courseDetails
  );
  const dispatch = useDispatch();
  const courseData = courses[id]; // Retrieve the courseData from the store by its id

  useEffect(() => {
    // If the courseData is not in the store, fetch it
    if (!courseData && status !== "loading") {
      dispatch(fetchCourseDetails(id));
    }
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setFixed(false);
      } else if (window.scrollY > 500) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    // fetchCourseCategory(courseData?.category);

    window.addEventListener("scroll", handleScroll);
  }, [dispatch, id, courseData, status]);
  // console.log(courseData, " courseData action");
  // console.log(courses, ' courses dkdkdkdk action')
  if (status === "loading" && !courseData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BeatLoader color="#4F46E5" loading={true} size={15} />
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="text-center p-4 bg-red-100 text-red-600 rounded-lg ">
        <p>Error: {error}</p>
      </div>
    );
  }

  // redux end

  const downloadBrochure = async (brochureUrl) => {
    if (!brochureUrl) {
      console.error("Brochure file URL is missing.");
      return;
    }
    const toastId = toast.loading("download starting...");

    try {
      const response = await axios.get(brochureUrl, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Brochure.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.update(toastId, {
        render: "downloaded successfully !!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error downloading the brochure:", error);
      toast.update(toastId, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="mx-auto w-full pb-20 md:pb-28 ">
      {/* Hero Section */}
      <CourseHero
        course={courseData?.course}
        downloadBrochure={downloadBrochure}
      />

      {/* courseData Details */}
      <div className="flex items-start flex-col md:flex-row px-3 lg:gap-x-6 lg:px-20  mt-10 justify-center">
        <div className="md:w-[70%] border rounded-xl py-3 md:pb-14 pt-6 px-2 space-y-2 md:space-y-4 items-start mx-auto flex flex-col">
          {/* Course Details */}
          <div className="py-2 px-2 md:px-6 dark:shadow-slate-100">
            <h2 className="md:text-xl mb-3 font-bold">
              {/* Course{" "} */}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Introduction
              </span>
            </h2>

            {courseData?.course?.description.split("<br/>").map((ele, id) => {
              return <p className="text-xs md:text-sm mb-3 pl-2 ">{ele}</p>;
            })}
          </div>
          <hr className="w-[95%] bg-white" />
          {/* Course Overview */}
          <div className="py-2  px-2 md:px-6 dark:shadow-slate-100">
            <h2 className="md:text-xl mb-3 font-bold">
              {/* Course{" "} */}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            {/* <hr className="my-2" /> */}

            {courseData?.course?.program_overview
              .split("<br/>")
              .map((ele, id) => {
                return <p className="text-xs md:text-sm mb-3 pl-2">{ele}</p>;
              })}
          </div>
          <hr className="w-[95%] bg-white" />

          {/* Course Curriculum */}
          <div className="py-2 px-2 md:px-6 text-left dark:shadow-slate-100">
            <h2 className="md:text-xl mb-3 font-bold">
              {/* Course{" "} */}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Curriculum
              </span>
            </h2>
            {/* <hr className="my-2" /> */}
            {/* <ol className="list-decimal px-8 marker:font-medium marker:text-slate-600 mt-4">
            {courseData?.course?.curriculum?.split(";").map((o, i) => (
  <li className="text-xs md:text-sm mb-2 pl-2" key={i}>
    <ul>

    {o?.split("-").map((sub, j) => (
      <li key={j}>{sub}</li>
    ))}
    </ul>
  </li>
))}

            </ol> */}
            <ol className="list-decimal pl-6 md:px-8 marker:font-medium md:mt-4">
              {courseData?.course?.curriculum
                ?.split(";")
                .map((section, index) => {
                  const [title, ...subtopics] = section
                    .split("~")
                    .map((item) => item.trim());
                  return (
                    <li key={index} className="py-2">
                      <h3 className="font-medium text-sm pb-2">{title}</h3>
                      <ul className="list-disc pl-6 text-xs md:text-sm">
                        {subtopics.map((subtopic, subIndex) => (
                          <li key={subIndex} className=" py-0.5">
                            {subtopic}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
            </ol>
          </div>
          <hr className="w-[95%] bg-white" />
          <CourseHighlights />
        </div>

        {/* Plans Section */}
        {/* <div className="relative top-7 mx-auto">
          <div
            className={` mt-5 ${
              fixed ? "md:fixed md:top-20 right-[10%] absolute " : ""
            } bg-white dark:bg-black shadow-md rounded-xl p-4`}
          >
            <div className="flex items-center justify-center gap-8 mb-4">
              {courseData?.course?.plans?.map((p, i) => {
                return (
                  <p
                    key={i}
                    onClick={() => setShowTab(p.name)}
                    className={`capitalize font-bold text-lg md:text-xl cursor-pointer ${
                      showTab === p.name
                        ? "text-orange-500 underline rounded-md px-3 py-1"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {p.name}
                  </p>
                );
              })}
            </div>

            {courseData?.course?.plans?.map((p, i) => {
              if (p.name === showTab) {
                return (
                  <>
                    <div
                      key={i}
                      className={`flex flex-col mt-6  w-full items-center justify-center rounded-lg border ${
                        p.name === "plus"
                          ? "border-orange-500"
                          : "border-stone-500 dark:border-white"
                      } relative py-5 text-nowrap`}
                    >
                      {p.name != "premium" && (
                        <div className="absolute inset-x-0 -top-3 mb-4 flex justify-center">
                          <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                            most popular
                          </span>
                        </div>
                      )}

                      <div className="">
                        <p className="mx-auto my-2 px-8 text-center text-lg md:text-base dark:text-white text-gray-500 font-medium">
                          {courseData.title}
                        </p>

                        <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                          {p.name === "plus"
                            ? "Project Based Learning"
                            : "Coming soon..."}
                        </p>
                        <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                          {p.name === "plus" ? " Personal Mentorship" : ""}
                        </p>
                        <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                          {p.name === "plus" ? " Experts Counseling" : ""}
                        </p>
                        <p className="text-sm md:text-base mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                          {p.name === "plus" ? "Live Projects" : ""}
                        </p>
                        <p className="text-sm md:text-base  mx-auto mb-2 px-8 text-center dark:text-white text-gray-500 font-medium">
                          {p.name === "plus" ? " Dedicated Placement Cell" : ""}
                        </p>

                        <div className="mt-7 mx-auto flex flex-col gap-5">
                          {p.name === "plus" && (
                            <div className="flex items-center justify-center gap-1">
                              <span className="self-start dark:text-white text-gray-600">
                                ₹
                              </span>
                              <span className="text-2xl md:text-xl dark:text-white font-bold text-gray-800">
                                {p.price}
                              </span>
                              <span className="text-gray-500 dark:text-white text-xs md:text-sm">
                                /
                                {p.name !== "premium"
                                  ? '12 months'
                                  : "Unlimited"}
                              </span>
                            </div>
                          )}
                          {p.name === "plus" && (
                            <button
                              onClick={() => dispatch(toggleEnrollForm())}
                              className="relative inline-flex mx-auto w-fit bg-gradient-to-r from-amber-500 to-red-600 px-6 md:px-8 lg:px-12 py-2 md:py-3 text-xs md:text-sm overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                            >
                              <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <IoIosArrowRoundForward size={30} />
                              </span>
                              <span className="relative text-nowrap">
                                Enroll Now
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div> */}
        <div className=" md:w-[35%] mt-8 md:mt-0  px-3 sticky top-0  mx-auto">
          {/* Plans Section */}
          <div
            className={`border border-slate-300 bg-white dark:bg-black overflow-hidden shadow-md rounded-xl pb-4`}
          >
            <h2 className="text-lg font-semibold bg-gradient-to-r p-2 mb-4 text-white from-pink-500 to-indigo-600 text-center w-full">
              Features
            </h2>
            <div className="flex pl-3 mx-2 items-start justify-center  md:gap-1 mb-4 flex-col">
              {coursePlusContent.map((course, id) => {
                return (
                  <p
                    key={id}
                    className="text-xs gap-2 flex items-start justify-center md:text-sm mb-2 dark:text-white text-slate-600 font-medium"
                  >
                    <GiCheckMark size={14} className="text-emerald-600" />{" "}
                    <span>{course}</span>
                  </p>
                );
              })}
            </div>
            <div className="flex flex-col items-center w-full justify-center">
              <p className="font-bold text-orange-600 text-2xl mb-6 dark:text-amber-500">
                {`at ₹${courseData?.course?.plans?.[0].price}/-`}
              </p>
              <button
                onClick={() => dispatch(toggleEnrollForm())}
                className="relative inline-flex mx-auto w-fit hover:bg-gradient-to-l bg-gradient-to-r from-amber-500 to-red-600 px-6 md:px-8 lg:px-12 py-2 md:py-3 text-xs md:text-sm overflow-hidden text-white font-medium border border-orange-400 rounded-lg group"
              >
                {/* <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <IoIosArrowRoundForward size={30} />
                </span> */}
                <span className="relative text-nowrap">Enroll Now</span>
              </button>
            </div>
            {/* Price and Button */}
            {/* <div className="mt-auto flex justify-between items-center">
              <p className="font-bold text-orange-600 text-base mb-6 dark:text-amber-500">
                {`₹ ${courseData?.course?.plans?.[0].price}`}
              </p>
              <button
                onClick={() => <p>p</p>}
                className="bg-gradient-to-r text-xs rounded-md from-amber-500 to-red-600 text-white mb-6 px-3 py-1 font-semibold hover:bg-gradient-to-l"
              >
                View More
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* <CourseHighlights /> */}

      {/* <Testimonials /> */}

      {/* Related Courses */}
      {courseData?.related_courses?.length > 0 && (
        <div className="my-8 px-4 lg:px-8 xl:px-24 w-full h-full relative">
          <h2 className="text-3xl font-semibold text-center">
            Related{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
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
            className="swiper-container lg:px-6 mt-4"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1440: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {courseData?.related_courses.map((o, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="h-[22rem] md:my-4 md:mx-2 shadow shadow-slate-500 dark:bg-white/10 border overflow-hidden rounded-xl flex flex-col">
                    <div className="relative h-[50%]">
                      <img
                        src={o.thumbnail_image}
                        alt={o.title}
                        className="w-full h-full object-cover"
                      />
                      {/* <div className="absolute top-3 left-4 flex">
                        <span className="text-xs mr-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1">
                          Premium
                        </span>
                        <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-3 py-1">
                          Plus
                        </span>
                      </div> */}
                    </div>
                    <div className="px-4 h-[45%] flex flex-col">
                      <Link
                        to={`/course/${o?.slug}/${o?.id}`}
                        className="md:text-lg font-bold my-2"
                      >
                        {o.title}{" "}
                      </Link>
                      <p className="text-sm line-clamp-3 pr-3 dark:text-slate-200 text-slate-600">
                        {o.description}
                      </p>
                    </div>
                    <div className="mt-auto px-3 flex justify-between items-center">
                      <p className="font-bold text-orange-600 text-base mb-6 dark:text-amber-500"></p>
                      <button
                        onClick={() => navigate(`/course/${o?.slug}/${o?.id}`)}
                        className="bg-gradient-to-r text-xs rounded-md from-amber-500 to-red-600 text-white mb-6 px-3 py-1 font-semibold hover:bg-gradient-to-l"
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="absolute top-[60%] left-14 transform z-10">
            <button className="swiper-button-prev text-indigo-600 bg-white transition"></button>
          </div>
          <div className="absolute top-[60%] right-14 transform z-10">
            <button className="swiper-button-next text-indigo-500 bg-white transition"></button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CourseDetailsPage;
