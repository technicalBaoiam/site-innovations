import React from "react";
import { useNavigate } from "react-router-dom"; 
import Error from '../../assets/ITIE&Entre//Error.svg'; 

const Maintenance = () => {
  document.title = 'Baoiam - Maintenace'
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="flex pb-20 w-full items-center justify-center min-h-screen bg-gray-50 dark:bg-black dark:text-white px-4">
      <div className="flex flex-col w-full md:gap-8 mx-auto md:flex-row  justify-center items-center text-center">
        <img
          src={Error}
          alt="Error Img"
          className="w-64 h-64 md:w-72 md:h-80 "
        />
        <div className="text-center md:text-left ">
          <h1 className="text-xl md:text-2xl dark:text-white font-bold text-gray-800 mt-4 md:mt-0">
            This page is currently down for Maintenance!
          </h1>
          <p className="text-gray-600 dark:text-white  mt-2">We’ll be back shortly.</p>
          <button
            className="mt-6 dark:bg-white/30 bg-black/70 dark:text-white  text-white py-2 px-4 rounded-full hover:bg-red-600"
            onClick={handleGoHome}
          >
            Take Me Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;


