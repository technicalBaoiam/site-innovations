import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
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
      <div className="flex justify-center h-[60vh] items-center bg-indigo-600 text-white">
        {loading ? (
          <div className="h-[60vh] flex justify-center items-center w-full">
            <FadeLoader size={20} color="white" />
          </div>
        ) : isSuccess ? (
          <div className="flex flex-col items-center gap-3">
            <FaCheckCircle
              size={50}
              className={`text-green-500 mx-auto mb-4`}
            />
            <h3 className="text-2xl font-bold">Email Verified Successfully</h3>
            <button
              className="bg-white px-3 py-2 rounded  text-black"
              onClick={() => {
                navigate("/courses");
              }}
            >
              Start learning now....
            </button>
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center gap-5">
            <h3 className="text-2xl font-bold bg-red-500 px-3 py-2 text-white">
              Error ocurred while verifying your Email.
            </h3>
            <button
              className="bg-white px-3 py-2 rounded  text-black"
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
