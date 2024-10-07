import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { App_phone } from "../../assets/assets";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import gsap from "gsap";

const Phone = () => {
  const [animatePing, setAnimatePing] = useState(false);
  const emailRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    setLoading(true);
    const data = {
      fullName: "",
      email: emailRef.current.value,
      countryCode: "",
      phone: "",
      inquiryType: "",
      message: "",
      newsletter: true,
    };
    try {
      const response = await axios.post(
        "https://proxy-server-baoiam.vercel.app/contact-form",
        // "http://localhost:3000/contact-form",
        data
      );
      if (response.status == 200) {
        console.log("Form successfully submitted:", response.data);
        // toast.success("Form submitted successfully");
        setShowPopup(true);
        // alert(response.status);
      } else toast.error("An error occurred");
      setLoading(false);
      emailRef.current.value = "";
    } catch (e) {
      emailRef.current.value = "";
      setLoading(false);
      toast.error("Some error occurred");
      console.log("Phone error: ", e.stack);
    }
    // fullName: formData.Name,
    //     email: formData.Email,
    //     countryCode: formData.CountryCode,
    //     phone: formData.Phone,
    //     inquiryType: formData.inquiryType,
    //     message: formData.message,
    //     newsletter: false,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };


  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity"
            onClick={() => setShowPopup(false)} // Click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-8 shadow-2xl z-10 text-center max-w-[500px]">
            {/* Success Icon */}
            <FaCheckCircle
              size={50}
              className={`text-green-500 mx-auto mb-4 ${
                animatePing ? "animate-ping" : ""
              }`}
            />

            <h2 className="text-2xl font-bold text-indigo-600 mb-4 transition-all duration-300 ease-in-out">
              Thank you for providing your details. We will contact you soon.
            </h2>
            {/* <p className="text-gray-700 mb-6">
              Your enrollment was successful. We’re excited to have you on
              board!
            </p> */}

            {/* Decorative Element */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-md"></div>

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="bg-gradient-to-br from-purple-600 via-indigo-500 to-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="Phonediv flex w-full gap-8 pb-20 py-10 dark:bg-[#010203] dark:text-white items-center mx-auto justify-center flex-col md:flex-row">
        <div className="txtimg w-40 md:w-[23%]">
          <img src={App_phone} className="w-full" alt="Android app-Baoiam" />
        </div>
        <div className="md:w-1/3 w-[80%]">
          <p className="txt1 text-3xl md:text-4xl font-bold">
            Seize the{" "}
            <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
              Opportunity
            </span>{" "}
            - Begin Your Journey Now!
          </p>
          <p className="txt1 font-medium mt-4 pl-2 text-slate-600 dark:text-slate-300">
            Join now to Maximize your growth with our transformative courses.
          </p>

          <form
            className="flex flex-col gap-4 mt-8"
            onSubmit={(e) => onSubmit(e)}
          >
            {/* <div className="flex items-center gap-4">
            <div
              onClick={() => setInputValue("Email")}
              className="flex items-center gap-2 text-sm lg:text-lg "
            >
              <input
                type="radio"
                name="link"
                id="email"
                className="lg:size-4"
                defaultChecked
              />
              <label htmlFor="email">Email</label>
            </div>
            <div
              onClick={() => setInputValue("Phone")}
              className="flex items-center gap-2 text-sm lg:text-lg"
            >
              <input
                type="radio"
                name="link"
                id="phone"
                className="lg:size-4"
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row gap-4 ">
            {inputValue === "Email" ? (
              <input
                className="outline-none rounded-md border border-black px-2 py-1 lg:px-4 lg:py-2 w-60"
                required
                type="email"
                placeholder="Email"
              />
            ) : (
              <input
                className="outline-none rounded-md  border border-black px-2 py-1 lg:px-4 lg:py-1 w-60"
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone"
              />
            )}

            <button
              type="submit"
              className="text-sm rounded-md px-2 py-1 lg:px-4 lg:py-2 lg:text-base bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all ease-in-out duration-300 text-white"
            >
              Join now
            </button>
          </div> */}
            <div className="w-fit flex p-1 rounded-full text-left border focus-within:border-gray-700">
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email..."
                required
                className="w-full outline-none bg-transparent text-sm text-gray-800 dark:text-gray-200 px-4 py-1"
              />
              <button // Change to 'submit'
                className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:bg-gradient-to-l transition-all text-white tracking-wide text-sm rounded-full px-6 py-2"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>

          {/* <div className='mt-8'>
                    <p>Download app from</p>

                    <div className='flex items-center mt-2 gap-4'>
                        <img src={Apple} alt="" />
                        <img src={Google_play} alt="" />
                    </div>
                </div> */}
        </div>
      </div>
    </>
  );
};

export default Phone;
