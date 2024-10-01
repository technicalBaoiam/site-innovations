import React from "react";
import { FiShare2, FiCreditCard, FiTrendingUp } from "react-icons/fi";
import { FaBook, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import refer_earn_image from "../assets/Refer/refer1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import refer from "../assets/Refer/refer2.png";
import Faq from "./Faq";

const ReferAndEarn = () => {
  document.title = "Baoiam Innovations | Refer and earn";
  return (
    <>
      {/* section-1 */}
      

<div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 w-full h-auto py-12 md:py-16 lg:py-20">
  {/* Text Section */}
  <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left">
    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
      <span className="text-indigo-700">REFER</span> A FRIEND
    </h1>
    <h2 className="text-xl text-indigo-700 lg:text-3xl mb-4 font-semibold">
            Earn Cash and Exciting Prizes
          </h2>

    <p className="text-base lg:text-lg mb-8 md:w-3/4">
      We are on a mission to empower learners to acquire knowledge, skills, and competencies & transform the way we learn.
    </p>

    <button className="relative inline-flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500 px-8 md:px-12 py-3 text-sm lg:text-base text-white font-medium border border-indigo-600 rounded-full hover:text-indigo-600 group">
      <span className="absolute inset-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease-in-out"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 transition-transform transform translate-x-full group-hover:translate-x-0 ease">
        <IoIosArrowRoundForward size={30} />
      </span>
      <span className="relative">Get Referral Code</span>
    </button>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 lg:w-1/2 mt-8 lg:mt-0">
    <div className="w-full h-80 md:h-96 lg:h-[30rem] rounded-3xl overflow-hidden">
      <img
        src={refer_earn_image}
        className="w-full h-full object-contain"
        alt="Refer and Earn"
      />
    </div>
  </div>
</div>


      {/* section-2 */}
      <div className="flex flex-col items-center px-6 py-12 lg:py-16">
      {/* Heading */}
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-10">
        How <span className="text-indigo-600">BAOIAM Referrals</span> Works?
      </h1>

      {/* Paragraph */}
      <p className="text-lg lg:text-xl text-center mb-12 max-w-3xl">
        Get a ₹500 cash bonus when your referred business collects the first payment. <br />
        Get a ₹1,000 cash bonus when your referred business subscribes to the Growth annual plan of the BAOIAM online website.
      </p>

      {/* Card Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center border border-1 lg:border-none bg-white lg:shadow-lg p-6 rounded-lg w-80 h-80">
          <FiShare2 className="text-5xl text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Join BAOIAM</h2>
          <p className="text-center mb-4 text-gray-600">
            Create your account on BAOIAM and generate a referral link.
          </p>
        </div>

        {/* Arrow */}
        <div className="block lg:hidden">
          <FiArrowDown className="text-4xl text-gray-500" />
        </div>
        <div className="hidden lg:block">
          <FiArrowRight className="text-4xl text-gray-500" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white lg:shadow-lg p-6 rounded-lg w-80 h-80">
          <FiCreditCard className="text-5xl text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Refer other friends</h2>
          <p className="text-center mb-4">
            Share the link with your friends. When your friend enrolls, they get up to 20% off on programs.
          </p>
        </div>

        {/* Arrow */}
        <div className="block lg:hidden">
          <FiArrowDown className="text-4xl text-gray-500" />
        </div>
        <div className="hidden lg:block">
          <FiArrowRight className="text-4xl text-gray-500" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white lg:shadow-lg p-6 rounded-lg w-80 h-80">
          <FiTrendingUp className="text-5xl text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Enjoy cash bonus</h2>
          <p className="text-center mb-4 text-gray-600">Get Rewarded</p>
        </div>
      </div>

      {/* Referral Code Button */}
      <button className="px-6 py-3 mt-8 lg:mt-12 font-semibold bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-full text-white hover:bg-gradient-to-l transition-all ease-in-out duration-300">
        Get Referral Code
      </button>
    </div>
      {/* section-3 */}
     {/* section-3 */}
     <div className="flex flex-col lg:flex-row items-center px-8 py-16 md:px-10 lg:px-16 lg:py-20">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-8 lg:pr-12">
          <div className="">
            {/* Heading */}
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              WHY <span className="text-indigo-600">REFER</span> BAOIAM?
            </h2>
            <p className="">
              We belive in creating a holistic and dynamic workplace where you
              can create,innovate and idea and turn them into reality!
            </p>
          </div>
          {/* Paragraphs with Icons */}
          <div className="flex items-start space-x-4">
            <FaBook className="text-indigo-600 text-3xl" />
            <div className="flex-col">
              <h3 className="text-xl font-semibold text-indigo-600">
                Upskilling Courses
              </h3>
              <p className="text-gray-600 text-lg lg:text-base leading-relaxed">
                Get access to the best curated courses mentored by top-notch
                experts.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaChalkboardTeacher className="text-indigo-600 text-3xl" />
            <div className="flex-col">
              <h3 className="text-xl font-semibold text-indigo-600">
                Experienced Mentors & High-Quality Content
              </h3>
              <p className="text-gray-600 text-lg lg:text-base leading-relaxed">
                Courses crafted just for you that help you enhance your skills
                and crack your dream job.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaBriefcase className="text-indigo-600 text-3xl" />
            <div className="flex-col">
              <h3 className="text-xl font-semibold text-indigo-600">
                100% Placement Assistance
              </h3>
              <p className="text-gray-600 text-lg lg:text-base leading-relaxed">
                Learn to crack interviews from our experienced trainers and get
                placed at top companies.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          {/* Placeholder for Image */}
          <div className="w-full h-72 lg:h-96 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={refer}
              alt="Why Refer BAOIAM"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* section-4 */}

      <Faq />
    </>
  );
};

export default ReferAndEarn;
