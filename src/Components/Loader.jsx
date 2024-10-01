import React from "react";
import loader from "../assets/Images/Animation - 1727508518446.gif";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-white">
      <div className="relative inline-flex items-center justify-center">
        {/* Animated image */}
        <img
          src={loader}
          alt="Loading animation"
          className="w-full h-full mx-auto"
        />
      </div>

      {/* Loading dots animation */}
      
    </div>
  );
};

export default Loader;
