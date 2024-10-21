import React, { useEffect, useState } from "react";
import code from "../assets/code.jpg";
import ai from "../assets/ai.webp";
import marketing from "../assets/marketing.jpg";
import carrer1 from "../assets/carrer1.jpg";
import datasc from "../assets/datasc.jpg";
import business from "../assets/business.jpg";
import tech from "../assets/tech.jpg";
import new_excited_tech_edu1 from "../assets/Blogs/new_excited_tech_edu1.jpg";
import content_data from "../Data/Content.js";
import { useNavigate, useParams, Link } from "react-router-dom";
import data2 from "../Data/Content2.js";
import { toast } from "react-toastify";
import skills from "../assets/Images/skills2.jpeg"
import {
  FaBullhorn,
  FaClipboardList,
  FaLightbulb,
  FaMugHot,
  FaRobot,
} from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaMobileAlt, FaUserCircle } from "react-icons/fa";
import NewsletterBanner from "../Components/Home/Subcription.jsx";

const Blog_detail = () => {
  document.title = "Baoiam Innovations | Blogs";
  const [comment, setComment] = useState("");
  const [datacmmt, setDatacmmt] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(content_data);
    // console.log(content_data[id].Category);
    return () => {};
  }, []);
  document.title = "Baoiam Innovations | Blogs";

  const hanldenav = () => {
    navigate("/Blog-detail/0");
  };
  const hanldenav2 = () => {
    navigate("/Blogdetails/1");
  };
  const hanldenav3 = () => {
    navigate("/Blog_detail/3");
  };

  const handlePostSubmit = () => {
    if (comment === "") {
      toast.error("Please fill in all the fields");
      return;
    } else {
      const payload = {
        title: comment,
        id: Date.now(),
        name: "user",
      };
      setDatacmmt([...datacmmt, payload]);
      setComment("");
      toast.success("Comment Added");
    }
  };

  return (
    <>
      <div className="h-[auto] w-[80%] sm:text-[1.6vw] mx-[2%] px-4 py-4 flex-col my-[2rem]">
        <p className="font-bold flex gap-2 text-sm md:text-lg dark:text-black">
          <Link
            className="text-blue-600 dark:text-slate-500 hover:underline"
            to="/"
          >
            Home
          </Link>{" "}
          <Link
            className="text-blue-600 hover:underline dark:text-slate-500 flex justify-center items-center gap-2"
            to="/blogs"
          >
            <FaChevronRight /> Blogs <FaChevronRight />
          </Link>
          <span className="text-blue-600 dark:text-slate-500 ml-2">
            Education
          </span>
        </p>
      </div>
      <div className="w-[95%] lg:w-[88%] pb-10 md:pb-20 lg:flex lg:flex-row flex-col gap-6 mx-5 md:mx-10 lg:mx-20 lg:justify-center">
        <div className="w-full lg:w-[70%] flex flex-col">
          <div dangerouslySetInnerHTML={{ __html: data2[id].head }}></div>
        </div>

        <div className="mt-10 lg:mt-0 gap-3 py-3 dark:text-white rounded pb-5 text-white dark:bg-zinc-800 flex flex-col w-full md:w-[80%] lg:w-[60%] mx-auto lg:mx-0">
          <h2 className="text-xl md:text-2xl font-bold text-left py-3 text-black">
            Related Blogs
          </h2>

          {/* Blog 1 */}
          <div
            onClick={hanldenav}
            className="flex flex-col sm:flex-row border cursor-pointer hover:bg-white/30 rounded-md mx-2 justify-start p-2 items-center space-x-0 sm:space-x-4 shadow-lg md:h-[150px] mr-7 sm:mr-10 md:mr-10 lg:mr-1"
          >
            <div className="flex items-center justify-center w-5 sm:w-12 lg:w-14 sm:h-9 h-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-xs sm:text-base">
              1
            </div>
            <img
              className="w-20 sm:w-28 h-20 sm:h-28 mt-2 sm:mt-0"
              src={code}
              alt="Blog 1 Image"
            />
            <div className="flex flex-col justify-center items-center text-black space-y-1 mt-2 sm:mt-0 sm:items-start">
              <p className="font-semibold text-blue-700 text-sm leading-tight pb-7 text-center sm:text-left">
                The Best Graphic Design Careers — for Beginners and
                Professionals
              </p>
              <p className="text-gray-400 text-xs text-center sm:text-left">
                Last updated: 2023/10/15
              </p>
            </div>
          </div>

          {/* Blog 2 */}
          <div
            onClick={hanldenav}
            className="flex flex-col sm:flex-row border cursor-pointer hover:bg-white/30 rounded-md mx-2 justify-start p-2 items-center space-x-0 sm:space-x-4 shadow-lg md:h-[150px] mr-7 sm:mr-10 md:mr-10 lg:mr-1"
          >
            <div className="flex items-center justify-center w-5 sm:w-10  lg:w-11 sm:h-9 h-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-xs sm:text-base">
              2
            </div>
            <img
              className="w-20 sm:w-28 h-20 sm:h-28 mt-2 sm:mt-0"
              src={ai}
              alt="Blog 2 Image"
            />
            <div className="flex flex-col justify-center items-center text-black space-y-1 mt-2 sm:mt-0 sm:items-start">
              <p className="font-semibold text-blue-700 text-sm leading-tight pb-7 text-center sm:text-left">
                The Top Technical Skills All Employees Need in 2022
              </p>
              <p className="text-gray-400 text-xs text-center sm:text-left">
                Last updated: 2023/09/30
              </p>
            </div>
          </div>

          {/* Blog 3 */}
          <div
            onClick={hanldenav}
            className="flex flex-col sm:flex-row border cursor-pointer hover:bg-white/30 rounded-md mx-2 justify-start p-2 items-center space-x-0 sm:space-x-4 shadow-lg md:h-[150px] mr-7 sm:mr-10 md:mr-10 lg:mr-1"
          >
            <div className="flex items-center justify-center sm:w-10 sm:w-10 sm:h-9 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-xs sm:text-base">
              3
            </div>
            <img
              className="w-20 sm:w-28 h-20 sm:h-28 mt-2 sm:mt-0"
              src={new_excited_tech_edu1}
              alt="Blog 3 Image"
            />
            <div className="flex flex-col justify-center items-center text-black space-y-1 mt-2 sm:mt-0 sm:items-start">
              <p className="font-semibold text-blue-700 text-sm leading-tight pb-7 text-center sm:text-left">
                How Ed-Tech Enhances Critical Thinking Skills
              </p>
              <p className="text-gray-400 text-xs text-center sm:text-left">
                Last updated: 2023/08/21
              </p>
            </div>
          </div>

          {/* Blog 4 */}
          <div
            onClick={hanldenav}
            className="flex flex-col sm:flex-row border cursor-pointer hover:bg-white/30 rounded-md mx-2 justify-start p-2 items-center space-x-0 sm:space-x-4 shadow-lg md:h-[150px] mr-7 sm:mr-10 md:mr-10 lg:mr-1"
          >
            <div className="flex items-center justify-center  sm:w-10 sm:h-9 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold text-xs sm:text-base">
              4
            </div>
            <img
              className="w-20 sm:w-28 h-20 sm:h-28 mt-2 sm:mt-0"
              src={carrer1}
              alt="Blog 4 Image"
            />
            <div className="flex flex-col justify-center items-center text-black space-y-1 mt-2 sm:mt-0 sm:items-start">
              <p className="font-semibold text-blue-700 text-sm leading-tight pb-7 text-center sm:text-left">
                New Trends in Digital Learning and Education
              </p>
              <p className="text-gray-400 text-xs text-center sm:text-left">
                Last updated: 2023/07/12
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-2 mr-5 lg:mr-2 md:mr-10">
            <button className="text-blue-500 hover:underline text-xs">
              More ➔
            </button>
          </div>

          <div className="mt-10 flex justify-center md:pt-20 pr-5 md:pr-10 lg:pr-1">
            <img src={skills} className="mb-4 w-full h-[250px] md:h-[400px] " />
          </div>
        </div>
      </div>

      <div className="px-5  md:px-10 lg:px-20 pb-20 flex justify-center ">
        <div dangerouslySetInnerHTML={{ __html: data2[id].body }}></div>
      </div>

      {/* </div> */}

      {/* reply section */}

      {/* <div className='w-[80%] m-auto py-6 flex '>
        {datacmmt ? (
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold text-lg text-md'>Comments</h2>
            <div>
              <div className=' flex flex-col gap-6'>
                {datacmmt.map((el, index) => (
                  <>
                    <div className='border-2 hover:shadow-lg  shadow-gray-400 shadow-sm p-4 bg-zinc-50 rounded-md flex gap-2 items-start'>
                      <div>
                        <div className='w-[45px] h-[45px] rounded-full flex items-center justify-center'>
                          <FaUserCircle className='h-full w-full text-zinc-400' />
                        </div>
                      </div>
                      <div key={index} className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                          <p className='font-semibold'>{el.name}</p>
                          <p className='text-zinc-500'>3hr ago</p>
                        </div>
                        <p className='text-[#444444]'>{el.title}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div> */}

      {/* end here */}
      {/* <div className='mb-[10%] mx-[10%] w-[80%] lg:w-[50%] mt-[2rem]'>
        <h1 className='text-[1.3rem] font-bold'>Leave a Reply </h1>
        <p className='text-[1.02rem] my-[1.2rem]'>
          Your email address will not be published. Required fields are marked{" "}
        </p>
        <h2 className='text-[1.13rem] font-bold mb-1'>Add a Response</h2>
        <textarea
          rows='8'
          className='bg-gray-100 dark:bg-gray-900 w-[100%] p-5'
          cols='80'
          type='text'
          placeholder='Leave a Comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div>
          <button
            onClick={handlePostSubmit}
            className=' bg-black text-white p-3 rounded-lg mt-9 dark:bg-white dark:text-black'
          >
            Post Comment
          </button>
        </div>
      </div> */}

      {/* <h2 className='text-[2rem] ml-[10%] font-bold mt-[4rem] xs:top-10 relative top-6 xs:text-[1.325rem]'>
        Other Blogs
      </h2>
      <div className='mx-[10%]  mb-5 md:flex-row w-[80%] md:gap-[2rem] flex-col mt-[2rem] flex justify-evenly'>
        <div className='mt-5 w-[100%] p-[2rem] hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm'>
          <div className='w-[100%]'>
            <img className='w-[100%] ' src={carrer1} />
          </div>
          <div>
            <h2 className='text-[1.3rem] my-3 md:text-[1.2rem] font-bold xs:text-[0.98rem]'>
              The Best Graphic Design Careers — for Beginners and Professionals
            </h2>
            <p className='text-[1.2rem] md:text-[1.1rem] font-semibold xs:text-[0.98rem]'>
              Read More ➭
            </p>
          </div>
        </div>

        <div className='mt-5 w-[100%] p-[2rem] hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm'>
          <div className='w-[100%]'>
            <img className='w-[100%] ' src={datasc} />
          </div>
          <div>
            <h2 className='text-[1.3rem] my-3 md:text-[1.2rem] font-bold xs:text-[0.98rem]'>
              The Top Technical Skills All Employees Need in 2022
            </h2>
            <p className='text-[1.2rem] md:text-[1.1rem] font-semibold xs:text-[0.98rem]'>
              Read More ➭
            </p>
          </div>
        </div>

        <div className='mt-5 w-[100%] p-[2rem] hover:shadow-lg duration-200 hover:scale-105 shadow-gray-400 shadow-sm'>
          <div className='w-[100%]'>
            <img className='w-[100%] ' src={business} />
          </div>
          <div>
            <h2 className='text-[1.3rem] my-3 md:text-[1.2rem] font-bold xs:text-[0.98rem]'>
              Types Of Quantitative Research for Students and Researchers
            </h2>
            <p className='text-[1.2rem] md:text-[1.1rem] font-semibold xs:text-[0.98rem]'>
              Read More ➭
            </p>
          </div>
        </div>
      </div> */}
      <NewsletterBanner />
    </>
  );
};

export default Blog_detail;
