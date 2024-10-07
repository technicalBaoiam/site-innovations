import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { CollegeCourseData, OtherCourseData, School } from "../../Data";
import { MdSchool } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { BiChevronsRight } from "react-icons/bi";

const CourseNav = ({ setShow, course }) => {
  const [activeTabId, setActiveTabId] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(null);

  const handleTabActiveState = (tabId, index) => {
    setActiveTabId(tabId);
    setActiveTabIndex(index);
  };
  console.log("inside coursenav:", course);
  // console.log(course[0].courses);

  // will change after api integration
  const label = [
    {
      id: 0,
      title: "Junior Courses",
      link: "courses/school",
      icon: <MdSchool size={18} />,
    },
    {
      id: 1,
      title: "University Courses",
      link: "courses/college",
      icon: <FaUniversity size={18} />,
    },
    {
      id: 2,
      title: "Other Courses",
      link: "",
      icon: <IoBookSharp size={18} />,
    },
  ];

  return (
    <div>
      <div className="flex flex-col h-fit w-fit p-1">
        {label.map((c, i) => { 
          return (
            <div
              key={i}
              onClick={() => handleTabActiveState(c.id, i)}
              className={`flex items-center hover:text-orange-500 justify-between py-3 w-64 ${
                activeTabIndex === i && "text-orange-500"
              }`}
            >
              <div className="font-semibold flex items-center gap-2" >
                {c.icon} {c.title}
              </div>
              <button className={``}>
                <IoIosArrowDown
                  className={`${activeTabIndex === i && "-rotate-90"}`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {activeTabIndex === 0 && (
        <div className="absolute top-0 ml-0.5 py-3 left-72 overflow-y-scroll w-72 overflow-x-hidden bg-white dark:bg-black dark:border-white border-black/50 border-[1px] text-sm p-1 shadow-lg z-50 dark:text-white rounded-md">
          {course[0]?.courses?.map((sub, index) => {
            return (
              <div key={index} className="pl-3 hover:bg-slate-200 mb-1 py-1 hover:text-amber-600 rounded dark:hover:bg-slate-700 dark:hover:text-white">
                <Link
                  onClick={() => setShow(false)}
                  to={`/course/${sub.slug}/${sub.id}`}
                  className="text-xs hover:underline"
                >
                  {sub.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {activeTabIndex === 1 && (
        <div className="absolute ml-0.5 top-0 left-72 h-fit w-72 overflow-y-scroll bg-white dark:bg-black dark:border-white border-black/50 border-[1px] text-sm p-1 shadow-lg z-50 dark:text-white rounded-md">
          {course[1]?.courses?.map((sub, index) => {
            return (
              <div key={index} className="pl-3 hover:bg-slate-200 mb-1 py-1 hover:text-amber-600 rounded dark:hover:bg-indigo-500 dark:hover:text-white">
                <Link
                  onClick={() => setShow(false)}
                  to={`/course/${sub.slug}/${sub.id}`}
                  className="text-xs hover:underline"
                >
                  {sub.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
      {activeTabIndex === 2 && (
        <div className="absolute ml-0.5 top-16 left-72 h-fit w-72 overflow-x-hidden overflow-y-scroll bg-white dark:bg-black dark:border-white border-black/50 border-[1px] text-sm p-1 shadow-lg z-50 dark:text-white rounded-md">
          {course[2]?.courses?.map((sub, index) => {
            return (
              <div key={index} className="pl-3 hover:bg-slate-200 mb-1 py-1 hover:text-amber-600 rounded dark:hover:bg-indigo-500 dark:hover:text-white">
                 <Link
                  onClick={() => setShow(false)}
                  to={`/course/${sub.slug}/${sub.id}`}
                  className="text-xs hover:underline"
                >
                  {sub.title}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseNav;

// import React, { useState } from 'react';
// import { IoIosArrowDown } from 'react-icons/io';
// import { Link } from 'react-router-dom';
// import { CollegeCourseData, OtherCourseData, School } from '../../Data';

// const CourseNav = ({ setShow, setDropCourse, dropCourse, courses }) => {
//     const [activeTabId, setActiveTabId] = useState(0);
//     const [activeTabIndex, setActiveTabIndex] = useState(0);

//     const handleTabActiveState = (tabId, index) => {
//         setActiveTabId(tabId);
//         setActiveTabIndex(index);
//     };

//     const label = [School[0].Cate, CollegeCourseData[0].Cate, OtherCourseData[0].Cate]

//     return (
//         <div>
//             <div className="flex overflow-auto relative">
//                 <div className="flex flex-col h-fit w-[30%] p-1">
//                     {courses.map((c, i) => {
//                         return (
//                             <div className={`flex items-center justify-between py-1 pl-4 ${activeTabIndex === i && 'text-amber-600'}`}>
//                                 <Link onClick={() => setShow(false)} to={`/courses/${c.name}`} className="hover:underline hover:text-amber-600 font-semibold">
//                                     {c.name}
//                                 </Link>
//                                 <button onClick={() => handleTabActiveState(c.id, i)} className={`hover:text-amber-600`}>
//                                     <IoIosArrowDown
//                                         className={`${activeTabIndex === i && '-rotate-90'}`}
//                                     />
//                                 </button>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="w-[70%] h-full overflow-x-hidden dark:bg-gray-700 text-sm p-1 z-50 dark:text-white overflow-y-auto">
//                     {activeTabIndex !== null && (
//                         <div className="w-full h-72 overflow-x-hidden dark:bg-gray-700 dark:text-white overflow-y-auto">
//                             {courses[activeTabIndex].subcategories.map((sub, index) => {
//                                 return (
//                                     <div key={index} className="px-6 py-2 hover:bg-amber-50 dark:hover:bg-indigo-500 dark:hover:text-white">
//                                         <Link onClick={() => setShow(false)} to={`/course/${sub.name}/${sub.id}`} className="text-sm">
//                                             {sub.name}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseNav;
