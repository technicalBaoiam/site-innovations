import React from "react";

const NewsletterSignup = () => {
 return (
   <div className="relative font-[sans-serif] before:bg-black before:opacity-50 dark:before:bg-black dark:before:opacity-80 before:absolute before:w-full before:h-full before:inset-0 before:z-10">
     <img
       src="https://readymadeui.com/cardImg.webp"
       alt="Banner Image"
       className="absolute inset-0 w-full h-full object-cover object-bottom"
     />
     <div className=" relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
       <div className="max-w-3xl mx-auto text-center">
         <h3 className="text-white lg:text-5xl md:text-3xl text-2xl font-bold">
           Contact for Recruitment Inquiries
         </h3>
         <p className="text-gray-300 italic lg:text-lg   md:text-md   sm:text-sm text-xs    mt-4">
           Have questions about our open positions? Contact our HR team at
           <span className=" text-yellow-500 font-semibold">
             {" "}
             hr@baoiam.com
           </span>
           .
         </p>

         {/* <div className="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3"
            />

            <button
              type="button"
              className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white tracking-wide text-sm rounded-full px-6 py-3"
            >
              Submit
            </button>
          </div> */}
       </div>
     </div>
   </div>
 );
};

export default NewsletterSignup;
