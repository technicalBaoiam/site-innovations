import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { FaEnvelope } from "react-icons/fa";
import icon from "../assets/Images/tick.png"
import error from "../assets/Images/error.jpg"
const apiUrl = import.meta.env.VITE_API_URL;

const VerifyEmail = () => {
  const { uid, token } = useParams();
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.post(
          `${apiUrl}/api/auth/verify_email/${uid}/${token}`
        );
        console.log("email verfied:", data);
        if (status == 200) {
          console.log("email verified");
          setIsSuccess(true);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log("error:", e.message);
      }
    })();

    return () => {};
  }, []);

 return (
   <>
     <div className="min-h-screen flex justify-center items-center    text-white">
       {loading ? (
         <div className="flex justify-center items-center h-screen w-full">
           <FadeLoader size={20} color="white" />
         </div>
       ) : isSuccess ? (
         <div className="relative bg-white rounded-lg p-8 shadow-2xl z-10 text-center md:w-[400px] w-[250px] dark:bg-gray-700   md:w-[600px] w-[300px] md:h-[400px]  ">
           {/* Gradient Top Section */}
           <div
             className="absolute inset-x-0 top-0 h-40 bg-purple-200 rounded-t-lg"
             style={{ clipPath: "ellipse(100% 97% at 50% 0%)" }}
           ></div>

           {/* Envelope Icon */}
           <div className="relative top-[80px] rounded-full inline-block bg-purple-400 ">
             <img
               src={icon} // Use the imported image
               alt="Envelope Icon"
               className="w-20 h-20 mx-auto flex items-center p-4  "
             />
           </div>

           {/* Success Message */}
           <div className="pt-20">
             <h3 className="text-2xl font-bold text-black pb-10">
               Email Verified Successfully
             </h3>
             <button
               className="bg-green-500 px-3 py-2 rounded  text-black"
               onClick={() => {
                 navigate("/courses");
               }}
             >
               Start learning now....
             </button>
           </div>
         </div>
       ) : (
         
           <div className="bg-white  rounded-lg md:w-[600px] w-[90%] p-6 flex flex-col items-center space-y-6">
             {/* Top Image Section */}
             <img
               src={error} // Replace with your actual image path
               alt="Error Illustration"
               className="w-50 h-50 object-contain" // Adjust size according to your need
             />

             {/* Error Message */}
             <h3 className="text-2xl font-semibold text-red-600 text-center">
               Oops! An error occurred while verifying your email.
             </h3>
             <p className="text-gray-600 text-center">
               Please try again later, or contact support if the issue persists.
             </p>

             {/* Action Button */}
             <button
               className="bg-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-purple-800 hover:scale-105"
               onClick={() => {
                 navigate("/");
               }}
             >
               Take me Home
             </button>
           </div>
        
       )}
     </div>
   </>
 );
};

export default VerifyEmail;
