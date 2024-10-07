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
      <div className='h-[auto] w-[90%] px-4 py-4 flex-col my-[2rem]'>
        <p className='font-bold flex gap-3 text-xs pl-8 md:pl-20 dark:text-black'>
          <Link
            className=' dark:text-blue-200 hover:underline'
            to='/'
          >
            Home
          </Link>{" "}
          <span> / </span>
          <Link
            className=' dark:text-blue-200 hover:underline'
            to='/blogs'
          >
           Blogs
          </Link>
          {/* <span> / </span> */}
          <span className=' dark:text-blue-200'>
            {/* {content_data[id]?.Category} */}
          </span>
        </p>
      </div>
      <div className='w-[80%] pb-10 md:pb-20 lg:flex lg:flex-row  flex-col gap-[2rem] mx-[10%]'>
        <div className='w-[100%] lg:w-[70%] lg:flex lg:flex-col  flex-col'>
          <div>
            <div dangerouslySetInnerHTML={{ __html: data2[id].head }}></div>
            <div dangerouslySetInnerHTML={{ __html: data2[id].body }}></div>
          </div>
        </div>
        <div className='w-[100%] lg:w-[30%] mt-5'>
          {/* <div className='w-full bg-gray-100 dark:bg-gray-800 rounded-lg pb-5 lg:h-auto h-[45%] shadow-md shadow-[#00000081] dark:text-white flex flex-col gap-4'>
            <h2 className='text-3xl xs:text-2xl py-5 font-bold text-center dark:text-white'>
              Categories
            </h2>
            <div className='text-xl xs:text-base mx-8 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg cursor-pointer transition-all'>
              <div className='flex justify-start items-center gap-3 '>
                <FaClipboardList className=' w-6 h-6 text-2xl text-indigo-700 dark:text-indigo-300' />
                <span className='whitespace-normal leading-tight'>
                  Product Development
                </span>
              </div>
            </div>
            <div className='text-xl xs:text-base mx-8 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg cursor-pointer transition-all'>
              <div className='flex justify-start items-center gap-3 '>
                <FaLightbulb className=' w-6 h-6 text-2xl text-indigo-700 dark:text-indigo-300' />
                <span className='truncate'>Entrepreneurship</span>
              </div>
            </div>
            <div className='text-xl xs:text-base mx-8 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg cursor-pointer transition-all'>
              <div className='flex justify-start items-center gap-3'>
                <FaMugHot className='text-2xl text-indigo-700 dark:text-indigo-300 flex-shrink-0' />
                <span className='whitespace-normal leading-tight'>
                  Java Full-Stack Developer Roadmap
                </span>
              </div>
            </div>
            <div className='text-xl xs:text-base mx-8 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg cursor-pointer transition-all'>
              <div className='flex justify-start items-center gap-3 '>
                <FaMobileAlt className='xs:text-2xl w-6 h-6 text-2xl text-indigo-700 dark:text-indigo-300' />
                <span className='whitespace-normal leading-tight'>
                  Android Development
                </span>
              </div>
            </div>
            <div className='text-xl xs:text-base mx-8 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg cursor-pointer transition-all'>
              <div className='flex justify-start items-center gap-3 '>
                <FaBullhorn className='xs:text-2xl w-6 h-6 text-2xl text-indigo-700 dark:text-indigo-300' />
                <span className='truncate'>Marketing</span>
              </div>
            </div>
            <div className='text-xl xs:text-base mx-8 bg-white dark:bg-gray-700 px-4 py-3 rounded-lg cursor-pointer transition-all'>
              <div className='flex justify-start items-center gap-3 '>
                <FaRobot className='text-2xl text-indigo-700 dark:text-indigo-300 flex-shrink-0' />
                <span className='whitespace-normal leading-tight'>
                  Artificial Intelligence
                </span>
              </div>
            </div>
          </div> */}

          <div className='mt-20 gap-3 py-3 dark:text-white rounded pb-5 shadow-md bg-zinc-500 text-white dark:bg-zinc-800 flex flex-col  '>
            <h2 className='text-lg  font-bold text-center py-3'>
              Related Blogs
            </h2>

            <div
              onClick={hanldenav}
              className='flex flex-row border cursor-pointer hover:bg-white/30 rounded-md  mx-2 justify-start p-2 items-start '
            >
              <img
                className='w-20 md:w-24'
                src={code}
              />

              <p className=' pl-2 text-xs font-medium md:text-sm'>
                The Best Graphic Design Careers — for Beginners and
                Professionals
              </p>
            </div>
            <div
              onClick={hanldenav2}
              className='flex flex-row border cursor-pointer hover:bg-white/30 rounded-md  mx-2 justify-start p-4 items-start '
              >
              <img  className='w-20 md:w-24' src={ai} />
              <p className=' pl-2 text-xs font-medium md:text-sm'> The Top Technical Skills All Employees Need in 2022
              </p>
            </div>
            <div
              onClick={hanldenav3}
              className='flex flex-row border cursor-pointer hover:bg-white/30 rounded-md   mx-2 justify-start p-4 items-start '
              >
              <img
                 className='w-20 md:w-24'
                src={new_excited_tech_edu1}
              />
              <p className=' pl-2 text-xs font-medium md:text-sm'>  How Ed-Tech Enhances Critical Thinking Skills
              </p>
            </div>
          </div>
        </div>
      </div>
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
