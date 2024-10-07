import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/img1.png";
import { FaBars, FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
// import CoursesList from "../CoursesList";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { CollegeCourseData, OtherCourseData, School } from "../../Data";
// import { RxCross2 } from "react-icons/rx";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiMenu3Line, RiSearch2Line } from "react-icons/ri";
import SearchBox from "./SearchBox";
import logo from "../../assets/BAOAM.png";
import logoDark from "../../assets/logo-bg-removed.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { deleteUserData } from "../../redux/user/userSlice";
import { deleteUserData1 } from "../../Redux/user/userSlice";
import MobNavbar from "./MobNavbar";
import Logo from "./Logo";
import CourseNav from "./CourseNav";
import { CollegeCourseData, OtherCourseData, School } from "../../Data";
import College from "../../Pages/College";
import { fetchAllCourses } from "../../Redux/slices/courseSlice";
import { BeatLoader } from "react-spinners";
import Enroll from "./EnrollNow";
import EnrollNow from "./EnrollNow";
import { BiLogIn } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import ProfileIcon from "../Miscellaneous/ProfileIcon";

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const [delayHide, setDelayHide] = useState(null);
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);
  const [userDrop, setUserDrop] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [linkActive, setLinkActive] = useState("Home");
  const [schoolCourses, setSchoolCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const userDropDownRef = useRef();
  const navigate = useNavigate();
  const userhandleDropDownRef = useRef();
  // const [dropCourse, setDropCourse] = useState('');
  const darkTheme = () => {
    setIsDark(!isDark);
    theme();
  };

  const showForm = useSelector((state) => state.showForm);

  const handleLinkClick = (link) => {
    setLinkActive(link);
  };

  const HideUserDrop = (event) => {
    if (
      userDropDownRef.current &&
      !userDropDownRef.current.contains(event.target) &&
      userhandleDropDownRef.current &&
      !userhandleDropDownRef.current.contains(event.target)
    ) {
      setUserDrop(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    // getCourseData();
    setCourses([School, College, OtherCourseData]);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", HideUserDrop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", HideUserDrop);
    };
  }, []);

  // Function to handle mouse entering the dropdown
  const handleMouseEnter = () => {
    if (delayHide) clearTimeout(delayHide); // Clear any existing timeout
    setShow(true);
  };

  // Function to handle mouse leaving the dropdown
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setShow(false), 300); // Set a 300ms delay
    setDelayHide(timeout); // Store the timeout so it can be cleared if necessary
  };

  // redux start
  const { allCourses, status, error } = useSelector((state) => state.courses);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.user);

  // useEffect(()=>{
  //   // console.log("user",isLoggedIn),
  // }, [isLoggedIn])
  // console.log("in navbar:", allCourses);
  // console.log(allCourses, 'all courses navbar')

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllCourses());
    }
  }, [dispatch, status]);

  // if (status === 'loading') {
  //   return <div className="flex justify-center items-center h-screen">
  //     <BeatLoader color="#4F46E5" loading={true} size={15} />
  //   </div>;;
  // }

  // redux end

  return (
    <>
      {showmenu && (
        <div
          className="overlay fixed top-0 right-0 w-full h-full bg-black opacity-40 z-40 xl:hidden"
          onClick={() => setShowmenu(false)}
        ></div>
      )}
      <div
        className={`flex z-[90] text-slate-600 dark:text-slate-200 md:h-20 h-16 items-center justify-between px-4 md:px-8 w-full fixed top-0 ${
          isTransparent
            ? "bg-white dark:bg-black"
            : "bg-white/70 backdrop-blur-xl dark:bg-white/10 "
        }`}
      >
        {/* Logo */}

        <Logo isDark={isDark} />

        {/* NavLinks */}
        <div
          className={`hidden lg:flex md:ml-2 lg:gap-2 font-semibold items-center text-xs xl:text-sm justify-between `}
        >
          <Link
            to={"/"}
            onClick={() => handleLinkClick("Home")}
            className={`mx-2 xl:mx-4 ${
              location.pathname === "/" && linkActive === "Home"
                ? "text-orange-600"
                : ""
            }`}
          >
            Home
          </Link>

          <Link
            to={"/about-us"}
            onClick={() => handleLinkClick("About")}
            className={`mx-2 xl:mx-4 text-nowrap hover:text-orange-600 ${
              location.pathname === "/about-us" && linkActive === "About"
                ? "text-orange-600"
                : ""
            } `}
          >
            About Us
          </Link>

          <li
            className={`mx-2 xl:mx-4 cursor-pointer flex gap-1 items-center `}
          >
            <Link to="/courses" className="hover:text-orange-600">
              Courses
            </Link>
            {show ? (
              <IoIosArrowUp
                className="hover:text-orange-600"
                size={18}
                onClick={() => setShow(!show)}
              />
            ) : (
              <IoIosArrowDown
                className="hover:text-orange-600"
                size={18}
                onClick={() => setShow(!show)}
              />
            )}
          </li>

          {show && (
            <div
              className="absolute pl-4 pr-2 py-1 top-16 rounded-md left-[30%] bg-white dark:bg-black dark:border-white border-black/50 border-[1px] text-sm shadow-lg z-50 dark:text-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CourseNav course={allCourses} setShow={setShow} />
            </div>
          )}

          <Link
            to={"/blogs"}
            onClick={() => handleLinkClick("Blog")}
            className={`mx-2 xl:mx-4 hover:text-orange-600 ${
              location.pathname === "/blogs" && linkActive === "Blog"
                ? "text-orange-600"
                : ""
            } `}
          >
            Blog
          </Link>

          <Link
            to={"/contact"}
            onClick={() => handleLinkClick("Contact Us")}
            className={`mx-2 xl:mx-4 text-nowrap hover:text-orange-600 ${
              location.pathname === "/contact" && linkActive === "Contact Us"
                ? "text-orange-600"
                : ""
            } `}
          >
            Contact Us
          </Link>
        </div>

        {/* Last */}
        <div>
          <div className="flex items-center gap-2 lg:gap-4 text-black dark:text-white">
            <div className="flex items-center gap-3 xl:gap-7 ">
              <SearchBox courses={courses} />

              <div ref={userhandleDropDownRef}>
                {/* <LuLogIn
                  onClick={() => setUserDrop(!userDrop)}
                  size={20}
                  className=" z-10 relative cursor-pointer"
                /> */} 
                {/* <p
                  onClick={() => setUserDrop(!userDrop)}
                  size={15}
                  className="hidden md:block relative cursor-pointer"
                >Login</p> */}
                {/* <Link to={"/login"} className="relative group">
                  <button
                    type="button"
                    className="hidden z-10 sm:flex text-black border-2 border-black  hover:bg-gradient-to-br focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-base shadow-amber-500/50 dark:shadow-base dark:shadow-amber-800/80 font-semibold rounded-lg text-sm px-0.5 py-0.5 text-center"
                  >
                    <span className="flex items-center justify-center w-full h-full bg-white rounded-md px-8 py-1.5 ">
                      Login
                    </span>
                  </button>
                </Link> */}
                <div onClick={() => navigate("/login")}>
                {!isLoggedIn ? (
                  <BiLogIn
                    size={20}
                    
                    className=" z-10 relative dark:text-slate-300 text-slate-500 cursor-pointer"
                  />
                ) : (
                  <ProfileIcon/>
                )}
                </div>
              </div>

              {userDrop && (
                <div
                  ref={userDropDownRef}
                  className="z-40 absolute md:right-40 right-12 top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-24 md:w-28 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {!localStorage.getItem("access_token") ? (
                      <Link
                        to={"/login"}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <NavLink to="/login">Login</NavLink>
                      </Link>
                    ) : (
                      <Link
                        to={"/profile"}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <NavLink to="/profile">Profile</NavLink>
                      </Link>
                    )}
                    {!localStorage.getItem("access_token") ? (
                      <Link
                        to={"/signup"}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <NavLink to="/signup">Sign Up</NavLink>
                      </Link>
                    ) : (
                      <p
                        onClick={() => {
                          localStorage.removeItem("access_token");
                          localStorage.removeItem("userInfo");
                          dispatch(deleteUserData1());
                          navigate("/login");
                        }}
                        className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logout
                      </p>
                    )}
                  </ul>
                </div>
              )}
            </div>

            <span
              onClick={darkTheme}
              className="text-base hidden lg:block cursor-pointer "
            >
              {isDark ? (
                <BsSun className="text-slate-600 dark:text-slate-100 " />
              ) : (
                <BsMoonStars className="text-slate-600" />
              )}
            </span>

            {/* <Enroll /> */}
            <EnrollNow />
            <Link to={"/gcep"} className="relative group">
              <button
                type="button"
                className="hidden group z-10 sm:flex text-indigo-950 bg-gradient-to-br from-pink-400 to-indigo-600 shadow-sm shadow-slate-300 dark:shadow-slate-600  font-semibold rounded-lg text-sm px-0.5 py-0.5 text-center"
              >
                <span className="flex items-center justify-center h-full  bg-white dark:bg-black/60 dark:text-white rounded-md px-6 py-1 text-sm font-semibold ">
                  GCEP
                </span>
              </button>
            </Link>

            <span
              onClick={() => setShowmenu((old) => !old)}
              className="block lg:hidden"
            >
              <RiMenu3Line size={22} />
            </span>
          </div>
          <MobNavbar
            setShowmenu={setShowmenu}
            showmenu={showmenu}
            course={allCourses}
            isDark={isDark}
            setIsDark={darkTheme}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
