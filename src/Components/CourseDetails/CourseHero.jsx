import React from "react";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { CourseDesc2 } from "../../assets/assets";
import { FaDownload } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import EnrollNow from "../Home/EnrollNow";
import { useDispatch, useSelector } from "react-redux";
import { toggleEnrollForm } from "../../Redux/slices/enrollFormSlice";

const CourseHero = ({ course, downloadBrochure }) => {
  // console.log(course);

  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.showForm);

  const toggleForm = () => {
    dispatch(toggleEnrollForm());
  };

  // const navigate = useNavigate();
  return (
    <div className="pb-12 pt-4 px-4 md:px-20 dark:bg-gradient-to-b dark:from-indigo-300 bg-gradient-to-t from-orange-100 to-transparent">
      <div className="flex items-center font-semibold dark:text-slate-900 text-slate-500 text-[0.65rem] gap-1 md:gap-2 pt-4 md:text-sm">
        <Link to={`/courses`}>
          {course?.category === 1 && "Junior Courses"}
          {course?.category === 2 && "University Courses"}
          {course?.category === 3 && "Other Courses"}
        </Link>
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
        <div className="md:w-[60%] w-[90%]">
          <div className="md:mt-0 mt-4 text-center md:text-left md:pr-16 lg:pr-32">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {course?.title}
            </h1>
            <p className="font-medium text-xs md:text-base md:mb-7">
            Build industry-ready skills with expert guidance and take your career to the next level.
            </p>
            <div className="mt-8 flex items-center justify-between w-full">
              <div className="flex justify-start w-full flex-col md:flex-row  font-semibold items-center gap-2">
                <button
                  onClick={toggleForm}
                  className="relative text-nowrap mr-4 inline-flex items-center hover:bg-gradient-to-l bg-gradient-to-r from-amber-500 to-red-600 px-4 lg:px-12 py-2 md:py-3 text-xs md:text-sm text-white border border-orange-400 rounded-lg group"
                >
                  
                Enroll Now
                  
                </button>
                <p className="italic mt-2 text-slate-600 text-xs md:text-base dark:text-red-400 font-medium">Seats are limited—secure yours now!</p>
            

                {/* <button
                  onClick={() => downloadBrochure(course?.brochure_file)}
                  className="hidden relative md:inline-flex items-center bg-white text-black border-amber-600 px-6 py-2 md:py-3 text-xs md:text-sm dark:border-white overflow-hidden dark:text-black border-2 rounded-lg hover:text-indigo-500 group"
                >
                  <FaDownload size={15} className=" mr-2" />
                   <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  </span>
                  <span className="relative text-nowrap"> 
                  Download Brochure
                   </span>
                </button> */}

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
          <div className=" absolute text-center font-semibold w-full bottom-4">
            <button
              onClick={() => downloadBrochure(course?.brochure_file)}
              className="relative inline-flex items-center bg-white text-black border-amber-600 text-xs px-4 py-2 md:py-3 md:text-sm dark:border-white overflow-hidden dark:text-black border-2 rounded-lg hover:bg-amber-500 hover:text-white group"
                >
                  <FaDownload size={15} className="mr-2" />
              {/* <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <FaDownload size={18} />
              </span> */}
              {/* <span className="relative text-nowrap"> */}
                Download Brochure
                {/* </span> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
