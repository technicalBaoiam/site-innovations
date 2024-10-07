import React, { useEffect, useState } from "react";
import code from "../assets/code.jpg";
import ai from "../assets/ai.webp";
import marketing from "../assets/marketing.jpg";
import carrer1 from "../assets/carrer1.jpg";
import datasc from "../assets/datasc.jpg";
import business from "../assets/business.jpg";
import content_data from "../Data/Content.js";
import { useParams } from "react-router-dom";
import data2 from "../Data/Content2.js";
import { toast } from "react-toastify";

import {
  FaBullhorn,
  FaClipboardList,
  FaLightbulb,
  FaMugHot,
  FaRobot,
} from "react-icons/fa6";
import { FaMobileAlt, FaUserCircle } from "react-icons/fa";
import NewsletterBanner from "../Components/Home/Subcription.jsx";

const getcmt = [
  {
    id: 1,
    name: "Ayesha",
    comment:
      " Flat view is a good match for blogs or news articles, where the aim is to keep things brief.",
  },
  {
    id: 1,
    name: "Ayesha",
    comment:
      " Flat view is a good match for blogs or news articles, where the aim is to keep things brief.",
  },
];

const Blog_detail = () => {
  document.title = "Baoiam - Blog Detail";
  const [comment, setComment] = useState("");
  const [datacmmt, setDatacmmt] = useState([]);

  const { id } = useParams();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   // console.log(content_data);
  //   // console.log(content_data[id].heading1);
  //   return () => {};
  // }, []);
  document.title = "Baoiam - Blog Details";

  const handlePostSubmit = () => {
    if (comment === "") {
      toast.error("Please fill in all the fields");
    }
    const payload = {
      title: comment,
      id: Date.now(),
      name: "user",
    };
    setDatacmmt([...datacmmt, payload]);
    setComment("");
    toast.success("Comment Added");
    // axios
    //   .post("", {
    //     comment: comment,
    //     name: name,
    //     email: email,
    //   })
    //   .then((res) => {
        // console.log(res);
    //   })
    //   .catch((err) => {
        // console.log(err);
    //   });
  };
  // console.log(datacmmt, "cc");
  return (
    <>
      <div className='h-[auto] w-[90%] sm:text-[1.6vw] mx-[5%] px-[2rem] py-[2.5rem] flex-col my-[2rem] bg-purple-100'>
        <p className='font-bold text-sm dark:text-black'>
          {" "}
          HOME / ARTICLES / SINGLE ARTICLE{" "}
        </p>
        <h1 className='text-[1.3rem] sm:text-[3vw] pt-6 w-[100%] font-extrabold dark:text-black'>
          {content_data[id].heading1}
        </h1>
      </div>
      <div className='w-[80%] lg:flex lg:flex-row  flex-col gap-[2rem] mx-[10%] mt-[10%]'>
        <div className='w-[100%] lg:w-[70%] lg:flex lg:flex-col  flex-col'>
          {/* {data.map((d) => {
            return (
              <>
                <div className="w-[100%] lg:w-[90%] flex flex-col">
                  <h2 className="text-[1.9rem] p-3 mt-[2rem] font-bold">
                    {d.heading}
                  </h2>
                  <p className="p-3">{d.data}</p>
                </div>
              </>
            );
          })} */}

          <div>
            <div dangerouslySetInnerHTML={{ __html: data2[id].head }}></div>
            <div dangerouslySetInnerHTML={{ __html: data2[id].body }}></div>
          </div>
        </div>
        <div className='w-[100%] lg:w-[40%] mt-5'>
          <div className='w-full bg-gray-100 dark:bg-gray-800 rounded-lg pb-5 lg:h-auto h-[45%] shadow-md shadow-[#00000081] dark:text-white flex flex-col gap-4'>
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
          </div>

          <div className='w-[100%] mt-20 dark:text-white xs:px-1 rounded pb-5 lg:h-auto h-[45%]  dark:border-white dark:border-[1px] shadow-md shadow-[#00000081] flex flex-col gap-2 '>
            <h2 className='text-[2rem]  font-bold text-center xs:text-[23px] mt-5'>
              Related Blogs
            </h2>

            <div className='flex items-center justify-center dark:shadow-none hover:bg-white hover:text-black transition-all xs:text-center xs:flex-col xs:px-0 xs:gap-2 xs:mx-1 gap-10 mt-[2rem] px-4 shadow-md  dark:bg-[#374151] mx-4 py-4 cursor-pointer'>
              <img
                className='w-[6rem] xs:w-[5.7rem] xs:h-[5.7rem]'
                src={code}
              />
              <p className='w-[60%] dark:text-white  text-indigo-600 xs:w-[90%] xs:text-center xs:text-[0.9rem] font-bold text-[1rem]'>
                The Best Graphic Design Careers — for Beginners and
                Professionals{" "}
              </p>
            </div>
            <div className='flex items-center justify-center dark:shadow-none hover:bg-white hover:text-black transition-all xs:text-center xs:flex-col xs:px-0 xs:gap-2 xs:mx-1 gap-10 mt-[2rem] px-4 shadow-md  dark:bg-[#374151] mx-4 py-4 cursor-pointer'>
              <img className='w-[6rem] xs:w-[5.7rem] xs:h-[5.7rem]' src={ai} />
              <p className='w-[60%] dark:text-white  xs:w-[90%] text-indigo-600 xs:text-center xs:text-[0.9rem] font-bold text-[1rem]'>
                The Top Technical Skills All Employees Need in 2022
              </p>
            </div>
            <div className='flex items-center justify-center dark:shadow-none hover:bg-white hover:text-black transition-all xs:text-center xs:flex-col xs:px-0 xs:gap-2 xs:mx-1 gap-10 mt-[2rem] px-4 shadow-md  dark:bg-[#374151] mx-4 py-4 cursor-pointer'>
              <img
                className='w-[6rem] xs:w-[5.7rem] xs:h-[5.7rem]'
                src={marketing}
              />
              <p className='w-[60%] text-indigo-600 dark:text-white   xs:w-[90%] xs:text-center xs:text-[0.9rem] font-bold text-[1rem]'>
                Types Of Quantitative Research for Students and Researchers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* reply section */}

      <div className='w-[80%] m-auto py-6 flex '>
        {getcmt ? (
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold text-lg text-md'>Comments</h2>
            <div>
              <div className=' flex flex-col gap-6 md:w-[70%]'>
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
      </div>

      {/* end here */}
      <div className='mb-5 mx-[10%] w-[80%] lg:w-[50%] mt-[2rem]'>
        <h1 className='text-[1.3rem] font-bold'>Leave a Reply </h1>
        <p className='text-[1.02rem] my-[1.2rem]'>
          Your email address will not be published. Required fields are marked{" "}
        </p>
        <h2 className='text-[1.13rem] font-bold mb-1'>Add a Response</h2>
        <textarea
          rows='8'
          className='bg-gray-100 w-[100%] p-5 dark:text-black'
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
      </div>

      <h2 className='text-[2rem] ml-[10%] font-bold mt-[4rem] xs:top-10 relative top-6 xs:text-[1.325rem]'>
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
      </div>
      <NewsletterBanner />
    </>
  );
};

export default Blog_detail;
