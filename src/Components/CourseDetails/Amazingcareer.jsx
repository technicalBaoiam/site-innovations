import React from "react";

const Amazingcareer = () => {
  return (
    <div>
      <div className="py-8 px-8 lg:px-24 my-20 w-full h-full text-black bg-amber-50 dark:bg-[#080529] text-center">
        <h4 className="text-[2rem] lg:text-4xl dark:text-white font-bold mb-2 lg:mb-4">
          Amazing <span className="">Career</span>
        </h4>
        <p className="text-sm lg:text-lg dark:text-slate-300">
          Grab these exclusive offers available only once a year.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-5 md:gap-20 justify-center w-full mt-8">
          <div className="bg-white w-72 dark:bg-black rounded-3xl px-6 py-4 shadow-xl">
            <p className="text-center font-semibold text-gray-600 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 2 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">15% OFF</p>
          </div>
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl dark:bg-black ">
            <p className="text-center font-semibold text-gray-600 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 3 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">20% OFF</p>
          </div>
          <div className="bg-white w-72 rounded-3xl px-6 py-4 shadow-xl dark:bg-black ">
            <p className="text-center font-semibold text-gray-600 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 4 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">25% OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amazingcareer;
