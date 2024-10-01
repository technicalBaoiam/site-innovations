import React, { useEffect, useRef, useState } from "react";
import "animate.css"; 
import { useLocation, useParams } from "react-router-dom";
import { ContactFormComponent } from "../Contact/ContactForm";
import { toggleEnrollForm } from "../../Redux/slices/enrollFormSlice";
import { useDispatch, useSelector } from "react-redux";

const EnrollNowButton = () => {
  const buttonRef = useRef(null);
  const location = useLocation();
  const dispatch=useDispatch();
const showForm = useSelector(state=>state.showForm);
  useEffect(() => {
    const triggerAnimation = () => {
      if (buttonRef.current) {
        // Add animation class
        buttonRef.current.classList.add("animate__animated", "animate__wobble");

        // Remove animation class after animation ends (1 second)
        setTimeout(() => {
          buttonRef.current.classList.remove(
            "animate__animated",
            "animate__wobble"
          );
        }, 1000); // Duration of the animation
      }
    };

    // Trigger animation every 20 seconds
    const interval = setInterval(() => {
      triggerAnimation();
    }, 3000);

    // Run animation on component mount
    triggerAnimation();

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);
  if (location.pathname != "/404")
    return (
      <div>
        {showForm ? null : <button
          ref={buttonRef}
          onClick={() => dispatch(toggleEnrollForm())}
          className="fixed top-20 right-0 z-[100] text-sm inline-flex lg:hidden items-center justify-center font-medium disabled:opacity-50 border rounded-l-3xl px-3 py-1 bg-gradient-to-r from-teal-500 to-violet-600 m-0 cursor-pointer border-gray-200 text-white normal-case"
        >
          Enroll Now
        </button>}
      </div>
    );
};

export default EnrollNowButton;
