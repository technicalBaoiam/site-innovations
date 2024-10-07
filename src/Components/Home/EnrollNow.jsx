import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import 'animate.css';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { toggleEnrollForm } from "../../Redux/slices/enrollFormSlice";
import { useDispatch, useSelector } from "react-redux";

const EnrollNow = () => {
  const [animatePing, setAnimatePing] = useState(false);
const showForm=useSelector(state=>state.showForm);
 const dispatch = useDispatch()
  // Function to toggle the popup
  const togglePopup = () => {
    
    console.log(showForm)
    dispatch(toggleEnrollForm());
    setAnimatePing(true);

    // Remove ping animation after a short duration
    setTimeout(() => {
      setAnimatePing(false);
    }, 1000); // Adjust duration as needed
  };
  const location = useLocation();
  if (location.pathname !== "/404")
    return (
      <div className="hidden md:block">
        {/* Enroll Now Button */}
        <Link to={"#"} className="relative group">
          <button
            onClick={() => togglePopup()}
            type="button"
            className="hidden z-10 lg:flex group  bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:bg-gradient-to-br focus:outline-none focus:ring-amber-300 dark:focus:ring-amber-800 shadow-base shadow-amber-500/50 dark:shadow-base dark:shadow-amber-800/80 font-semibold rounded-lg text-xs px-4 py-2 text-center text-white "
          >
            {/* <span className="flex items-center dark:text-white dark:bg-black/70 group-hover:text-white transition-all group-hover:bg-black/30 text-nowrap justify-center w-full h-full bg-white rounded-md px-4 py-1.5 "> */}
            Enroll Now
            {/* </span> */}
          </button>
        </Link>
      </div>
    );
};

export default EnrollNow;
