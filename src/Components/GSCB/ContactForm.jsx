import React, { useState } from "react";
import { industry, interestedCheckbox } from "../../Data";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    institute: "",
    designation: "",
    email: "",
    phone: "",
    // job_title: "",
    contact_type: "",
    message: "",
  });
  const submitData = async (e) => {
    e.preventDefault();

    setLoading(true);
    // console.log("before submit:", formData);
    try {
      const data1 = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        institute: formData.institute,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        // job_title: formData.job_title,
        contact_type: formData.contact_type,
        message: formData.message,
      };
      const { data, status } = await axios.post(
        // `https://proxy-server-baoiam.vercel.app/submit-form`,
        // `http://localhost:3000/submit-form`,
        `${apiUrl}/api/contact-gcep/`,
        data1
      );
      console.log("GCEP form: ", data);
      if (status === 201) setShowPopup(true);
      // else toast.error("An error occurred");
      setLoading(false);
      setFormData({
        first_name: "",
        last_name: "",
        institute: "",
        designation: "",
        email: "",
        phone: "",
        job_title: "",
        contact_type: "",
        message: "",
      });
    } catch (e) {
      toast.error("Some error occurred");
      setLoading(false);
      setFormData({
        first_name: "",
        last_name: "",
        institute: "",
        designation: "",
        email: "",
        phone: "",
        job_title: "",
        contact_type: "",
        message: "",
      });
      // console.log(e.stack);
    }
  };
  return (
    <div className="mt-20 w-full md:w-[80%] lg:w-[70%] p-4 mx-auto h-full max-xs:p-4 max-xs:mt-10">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowPopup(false)} // Click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative w-[80%] sm:w-[60%] md:w-[50%] xl:w-[40%] bg-white rounded-lg p-8 shadow-2xl z-10 text-center">
            {/* Success Icon */}
            <FaCheckCircle
              size={50}
              className={`text-green-500 mx-auto mb-4 ${
                animatePing ? "animate-ping" : ""
              }`}
            />

            <h2 className=" font-semibold text-indigo-600 mb-4 transition-all duration-300 ease-in-out">
            Thank you! We’ve received your submission and will get back to you soon.
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
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <h1 className="md:text-3xl text-xl mb-4 font-semibold">
        Contact
      </h1>

      <form
        className="w-full h-full py-4 px-4 flex flex-col gap-4 text-black max-sm:gap-4"
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        {/* Name */}
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between gap-4 md:gap-8 w-full flex-col md:flex-row">
            <div className="md:w-1/2 flex flex-col w-full">
              <label className=" font-medium dark:text-white">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                value={formData.first_name}
                onChange={(e) => {
                  setFormData({ ...formData, first_name: e.target.value });
                }}
                contact_type="text"
                id="first"
                placeholder="Enter your First Name...."
                className="px-4 text-sm py-2 rounded-lg mt-1 dark:bg-slate-800 dark:text-white border-gray-300 border border-black/60 w-full max-sm:py-1"
                required
              />
              {/* <label htmlFor="first" className="text-sm dark:text-white">
                First
              </label> */}
            </div>
            <div className="md:w-1/2 flex flex-col w-full">
              <label className=" font-medium max-sm:text-base dark:text-white">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                value={formData.last_name}
                onChange={(e) => {
                  setFormData({ ...formData, last_name: e.target.value });
                }}
                contact_type="text"
                id="last"
                placeholder="Enter your Last Name...." 
                className="px-4 py-2  text-sm  rounded-lg mt-1 dark:bg-slate-800 border-gray-300 dark:text-white border border-black/60 w-full max-sm:py-1"
                required
              />
              {/* <label htmlFor="last" className="text-sm dark:text-white">
                Last
              </label> */}
            </div>
          </div>
        </div>
        {/* Email & Phone */}
        <div className="flex gap-8 w-full flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col w-full">
            <label className=" font-medium dark:text-white" htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              contact_type="email"
              id="email"
              placeholder="Enter your email address...."
              className="px-4 py-2  text-sm  rounded-lg mt-1 dark:bg-slate-800 border-gray-300 border dark:text-white border-black/60 w-full max-sm:py-1"
              required
            />
          </div>

          <div className="md:w-1/2 flex flex-col w-full">
            <label className=" font-medium dark:text-white" htmlFor="phone">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
              }}
              contact_type="tel"
              id="phone"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter your contact number..."
              className="px-4 py-2  text-sm  rounded-lg mt-1 dark:bg-slate-800 border-gray-300 border dark:text-white border-black/60 w-full max-sm:py-1"
            />
          </div>
        </div>

        {/* Company */}
        <div className="flex gap-8 w-full flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col w-full">
            <label className=" font-medium dark:text-white" htmlFor="industry">
              Type
            </label>
            <select
              value={formData.contact_type}
              onChange={(e) => {
                setFormData({ ...formData, contact_type: e.target.value });
              }}
              id="industry"
              className="px-4 py-2  text-sm  rounded-lg mt-1 dark:bg-slate-800 border border-gray-300 dark:text-white border-black/60 w-full max-sm:py-1"
            >
              <option value="">Select a Type</option>
              {industry.map((i) => (
                <option key={i.id} value={i.value} className="">
                  {i.label}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-1/2 flex flex-col w-full">
            <label className=" font-medium dark:text-white" htmlFor="company">
              Institute <span className="text-red-600">*</span>
            </label>
            <input
              value={formData.institute}
              onChange={(e) => {
                setFormData({ ...formData, institute: e.target.value });
              }}
              contact_type="text"
              id="company"
              placeholder="Enter your University...." 
              className="px-4 py-2  text-sm  rounded-lg mt-1 border dark:bg-slate-800 border-gray-300 dark:text-white border-black/60 w-full max-sm:py-1"
              required
            />

            {/* <span className="text-sm dark:text-white">
              Who do you work for?
            </span> */}
          </div>
        </div>

        <div className="flex-col flex md:w-[47%] lg:w-[48.5%] max-sm:w-full  ">
          <label className=" font-medium dark:text-white" htmlFor="agency">
            Designation
          </label>
          <input
            value={formData.designation}
            onChange={(e) => {
              setFormData({ ...formData, designation: e.target.value });
            }}
            contact_type="text"
            id="agency"
            placeholder="Enter your position...."
            className="px-2 py-2 rounded-lg  text-sm  mt-1 dark:bg-slate-800 border-gray-300 border dark:text-white border-black/60 w-full max-sm:py-1"
          />
        </div>
        {/* Job & Industry
        <div className="flex gap-8 w-full max-sm:flex-col max-sm:gap-4">
          <div className="md:w-1/2 flex flex-col w-full">
            <label
              className=" font-medium dark:text-white"
              htmlFor="job"
            >
              Job Title
            </label>
            <input
              value={formData.job_title}
              onChange={(e) => {
                setFormData({ ...formData, job_title: e.target.value });
              }}
              contact_type="text"
              id="job"
              className="px-4 py-2 rounded-lg mt-1 border border-black/60 w-full max-sm:py-1"
            />
          </div>
        </div> */}

        {/* Textarea */}
        <div className="w-full">
          <label className=" font-medium dark:text-white" htmlFor="help">
            Message <span className="text-slate-400">(optional)</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
            rows={4}
            id="help"
            placeholder="Write us to..."
            className="px-4 py-2 rounded-lg  text-sm  border dark:bg-slate-800 border-gray-300 dark:text-white border-black/60 w-full mt-2 max-sm:py-1"
          ></textarea>
          <button
            contact_type="submit"
            className="px-6 py-2 mt-4 font-semibold rounded-full bg-black dark:bg-indigo-600 text-center text-white border-black hover:bg-indigo-600 max-sm:text-sm max-sm:px-4 max-sm:py-1"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
