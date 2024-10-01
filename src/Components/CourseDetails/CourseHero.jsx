import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { CourseDesc2 } from "../../assets/assets";
import { FaDownload } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import EnrollNow from "../Home/EnrollNow";

const CourseHero = ({ course, downloadBrochure, setShowForm, showForm }) => {
  // console.log(course);

  const navigate = useNavigate();
  return (
    <div className="pb-12 pt-4 px-4 md:px-20 dark:bg-zinc-800 dark:bg-none bg-gradient-to-t from-orange-100 to-transparent">
      <div className="flex items-center gap-2 text-xs">
        <Link to={`/courses`}>Courses</Link>
        {/* <span><IoIosArrowForward /></span> */}
        {/* <Link to={`/${course?.category}`}></Link> */}
        <span>
          <IoIosArrowForward />
        </span>
        <Link to={`/course/${course?.slug}/${course?.id}`}>
          {course?.title}
        </Link>
        {/* <span onClick={() => window.location.reload()}>{course?.title}</span> */}
      </div>

      <div className="flex flex-col-reverse md:flex-row md:justify-between justify-center items-center md:items-center">
        <div className="md:w-[60%]  w-[90%]">
          <div className="mt-4 md:pr-32">
            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold mb-4">
              {course?.title}
            </h1>
            <p>
              Many online courses are self-paced, allowing learners to complete
              coursework at their own convenience.
            </p>
            <div className="mt-8 flex items-center justify-between w-full">
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setShowForm(true)}
                  className="relative mr-4 inline-flex items-center bg-gradient-to-r from-amber-500 to-red-600 px-6 md:px-8 lg:px-12 py-2 md:py-3 text-xs md:text-sm overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <IoIosArrowRoundForward size={30} />
                  </span>
                  <span className="relative text-nowrap">Enroll Now</span>
                </button>
                <button
                  onClick={() => downloadBrochure(course?.brochure_file)}
                  className="hidden relative md:inline-flex items-center bg-gradient-to-r from-pink-500 to-indigo-700 px-8 md:px-12 py-2 md:py-3 text-xs md:text-sm dark:border-white overflow-hidden text-white dark:text-black font-medium border rounded-lg hover:text-indigo-500 group"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <FaDownload size={18} />
                  </span>
                  <span className="relative text-nowrap">
                    Download Brochure
                  </span>
                </button>

                {/* <EnrollNow showForm={showForm} setShowForm={setShowForm}/> */}
                {/* <Link
                                    to={`/book-a-demo/${course?.title}/${course?.id}`}
                                    className="relative inline-flex items-center bg-orange-400 px-6 py-2 md:py-3 text-xs md:text-sm dark:text-white dark:border-white overflow-hidden text-white font-medium border border-orange-400 rounded-lg hover:text-orange-500 group"
                                >
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                                    <span className="relative text-nowrap">Book a Demo</span>
                                </Link> */}
                {/* <span>6,000 Students</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-[40%] w-[80%] mt-5 md:mt-0 md:h-96 rounded-[2rem] relative overflow-hidden">
          <img
            src={
              course?.thumbnail_image ? course?.thumbnail_image : CourseDesc2
            }
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-4">
            <button
              onClick={() => downloadBrochure(course?.brochure_file)}
              className="relative inline-flex items-center  bg-gradient-to-r from-pink-400 to-indigo-600 px-8 md:px-12 py-2 md:py-3  text-xs md:text-sm dark:text dark:border-white overflow-hidden text-white font-medium border  rounded-lg hover:text-black group"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <FaDownload size={18} />
              </span>
              <span className="relative text-nowrap">Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
