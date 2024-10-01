import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const [planIndex, setPlanIndex] = useState(1);
  const handlePlanSelect = (index) => {
    setPlanIndex(index);
  }
  const navigate = useNavigate();
  return (
    <div className="h-80 md:my-4 m-4 mx-auto shadow-sm shadow-slate-500 border rounded-xl overflow-hidden" >
      <div className="relative h-[60%]">
        <img
          src={course?.thumbnail_image ? course.thumbnail_image : "https://i.pinimg.com/474x/d4/d3/c0/d4d3c02f855019b7357b6c46da2124da.jpg"  }
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-4 flex">

          <span onClick={() => handlePlanSelect(0)} className={`rounded-lg px-3 py-1 text-xs mr-3 flex-1 ${!planIndex ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white" : "bg-slate-200 text-gray-800"}`}>
            Plus
          </span>

          <span onClick={() => handlePlanSelect(1)} className={`flex-1 rounded-lg px-3 py-1 text-xs ${!planIndex ? " bg-slate-200 text-gray-800" : "bg-gradient-to-r from-orange-600 to-amber-600 text-white"}`}>
            Premium
          </span>
        </div>
      </div>
      <div className="px-4 h-[40%]">

        <h3 className="text-xl font-semibold my-2 text-nowrap">{course.title} </h3>
        {/* <p className="text-sm pr-3 text-slate-600 text-justify">{course.description.slice(0,15)}</p> */}

        <div className="flex mb-2 mx-auto px-1 justify-end items-end text-nowrap gap-3">
          <p
            // onClick={() => navigate(`/course/${course.title}/${course.id}`)}
            className="font-bold  text-indigo-800 dark:text-amber-500 w-fit rounded-md"
          >
            ₹{course.plans[planIndex].price}
          </p>
          <p
            // onClick={() => navigate(`/course/${course.title}/${course.id}`)}
            className="font-bold  text-indigo-800 dark:text-amber-500 w-fit rounded-md"
          >
            
          </p>
        </div>
          <button
            onClick={() => navigate(`/course/${course.title}/${course.id}`)}
            className="bg-gradient-to-r text-sm rounded-md from-indigo-700 to-indigo-400 text-white px-3 py-1 font-semibold hover:bg-gradient-to-l "
          >
            Read More
          </button>
      </div>
    </div>
  );
}

export default CourseCard;
