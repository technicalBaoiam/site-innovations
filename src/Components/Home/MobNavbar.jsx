import React, { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { FaChevronDown, FaChevronUp, FaSchool } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { MdSchool } from "react-icons/md";
import ScrollableList from "../Miscellaneous/ScrollableList";
// import { CollegeCourse, OtherCourse, School } from "../../Data";

const MobNavbar = ({ showmenu, setShowmenu, course, isDark, setIsDark }) => {
  const mobTabtyles = `flex items-center p-2 pt-4 text-base font-medium rounded-lg`;
  const [activeTab, setActiveTab] = useState("Home");
  const [subCateDrop, setSubCateDrop] = useState(false);
  const [schoolCate, setSchoolCate] = useState(false);
  const [collegeCate, setCollegeCate] = useState(false);
  const [otherCourses, setOtherCourses] = useState(false);
  const navigate = useNavigate();
  const [schoolCourses, setSchoolCourses] = useState([]);

  const changeTheme = () => {
    setIsDark();
  };

  // useEffect(() => {
  //   // console.log(isDark);
  // }, [isDark]);

  const closeSideBar = () => {
    setShowmenu(false);
  };

  // console.log(course);

  return (
    <div>
      <aside
        className={`fixed lg:hidden top-0 left-0 z-[100] w-10/12 sm:w-2/5 h-screen transition-transform  ${showmenu ? "translate-x-0" : "-translate-x-full"
          }  `}
      >
        <div className="block lg:hidden h-full px-3 pb-8 overflow-y-auto rounded-r-lg  bg-white border taxt-gray-600 dark:text-white dark:bg-black">
          <div className="flex justify-between items-center w-full px-2 py-4 sticky top-0 z-50 dark:bg-black">
            <Logo isDark={isDark} />
            <RxCross2
              className="text-black dark:text-white"
              onClick={() => setShowmenu((old) => !old)}
              size={25}
            />
          </div>

          <ul className="space-y-2 font-medium divide-y ">
            <li
              className={`${mobTabtyles} ${location.pathname === "/" && activeTab === "Home"
                  ? "text-[#1638C9]  dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
              onClick={() => {
                setActiveTab("Home");
                closeSideBar();
              }}
            >
              <Link to={"/"} className="ms-3 dark:text-white">
                Home
              </Link>
            </li>
            <li
              className={`${mobTabtyles} flex-col items-start ${activeTab === "Course"
                  ? "text-[#1638C9]  dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
            >
              <div
                className="flex justify-between w-full items-center"
              >
                <Link to="/courses" onClick={closeSideBar} className="flex-1 dark:text-white ms-3 text-left rtl:text-right whitespace-nowrap">
                  Course
                </Link>
                {subCateDrop ? <FaChevronUp onClick={() => {
                  setSubCateDrop((old) => !old);
                  setActiveTab("Course");
                }} /> : <FaChevronDown onClick={() => {
                  setSubCateDrop((old) => !old);
                  setActiveTab("Course");
                }} />}
              </div>
              {subCateDrop && (
                <ul className="py-2 relative flex flex-col gap-2 w-full items-start ">
                  <li
                    onClick={() => {
                      setSchoolCate((old) => !old);
                      setOtherCourses(false);
                      setCollegeCate(false);
                    }}
                    className="flex items-center justify-between gap-2 w-full p-2 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-700 relative"
                  >
                    <div className="flex items-center gap-2">
                      <MdSchool />
                      <h1 className="dark:text-gray-300">Junior Courses</h1>
                    </div>
                    {schoolCate ? (
                      <FaChevronUp size={14} />
                    ) : (
                      <FaChevronDown size={14} />
                    )}
                  </li>
                  {schoolCate && (
                    <ScrollableList linkClickHandler={() => {
                      setShowmenu((old) => !old);
                      setSubCateDrop((old) => !old);
                      setSchoolCate((old) => !old);
                    }}
                      array={course[0]?.courses}
                    />
                  )}
                  <li
                    onClick={() => {
                      setCollegeCate((old) => !old);
                      setOtherCourses(false);
                      setSchoolCate(false);
                    }}
                    className="flex items-center justify-between gap-2 w-full p-2 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <FaUniversity />
                      <h1 className="dark:text-gray-300">University Courses</h1>
                    </div>
                    {collegeCate ? (
                      <FaChevronUp size={14} />
                    ) : (
                      <FaChevronDown size={14} />
                    )}
                  </li>
                  {collegeCate &&
                    <ScrollableList linkClickHandler={() => {
                      setShowmenu((old) => !old);
                      setSubCateDrop((old) => !old);
                      setCollegeCate((old) => !old);
                    }}
                      array={course[1]?.courses}
                    />}
                  <li
                    onClick={() => {
                      setOtherCourses((old) => !old);
                      setCollegeCate(false);
                      setSchoolCate(false);
                    }}
                    className="flex items-center justify-between gap-2 w-full p-2 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 text-gray-600 dark:bg-black hover:text-gray-900 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <IoBookSharp />
                      <h1 className="dark:text-gray-300">Other Courses</h1>
                    </div>
                    {otherCourses ? (
                      <FaChevronUp size={14} />
                    ) : (
                      <FaChevronDown size={14} />
                    )}
                  </li>
                  {otherCourses && <ScrollableList
                    linkClickHandler={() => {
                      setShowmenu((old) => !old);
                      setSubCateDrop((old) => !old);
                      setOtherCourses((old) => !old);
                    }}
                    array={course[2]?.courses}
                  />
                  }

                </ul>
              )}
            </li>
            <li
              className={`${mobTabtyles} ${location.pathname === "/about-us" && activeTab === "About Us"
                  ? "text-[#1638C9]  dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
              onClick={() => {
                setActiveTab("About Us");
                closeSideBar();
              }}
            >
              <Link
                to={"/about-us"}
                className="ms-3 text-nowrapx dark:text-white"
              >
                About Us
              </Link>
            </li>
            <li
              className={`${mobTabtyles} ${location.pathname === "/blogs" && activeTab === "Blogs"
                  ? "text-[#1638C9]  dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
              onClick={() => {
                setActiveTab("Blogs");
                closeSideBar();
              }}
            >
              <Link to={"/blogs"} className="ms-3 dark:text-white">
                Blogs
              </Link>
            </li>
            <li
              className={`${mobTabtyles} ${location.pathname === "/" && activeTab === ""
                  ? "text-[#1638C9]  dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
                }`}
              onClick={() => {
                setActiveTab("");
                closeSideBar();
              }}
            >
              <Link to={"/contact"} className="ms-3 dark:text-white">
                Contact Us
              </Link>
            </li>
            <li
              className={`${mobTabtyles} ${location.pathname === "/gcep" && activeTab === "GCEP"
                  ? "text-[#1638C9]  dark:text-white dark:bg-black"
                  : "text-gray-600 dark:text-gray-400"
                }`}
              onClick={() => {
                setActiveTab("GCEP");
                closeSideBar();
              }}
            >
              <Link to={"/gcep"} className="ms-3 dark:text-white">
                GCEP
              </Link>
            </li>
          </ul>
          <div
            onClick={changeTheme}
            className="flex items-center gap-2 p-2 px-4 mt-4 text-sm text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
          >
            {isDark ? <BsSun size={18} /> : <BsMoonStars size={18} />} Theme
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobNavbar;
