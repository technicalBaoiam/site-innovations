import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import gsap from 'gsap';
import Split  from 'split-type';

const ContactUs = () => {
  document.title = "Baoiam Innovations | Contact us";
  const [loading, setLoading] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  // const togglePopup = () => {
  //   setShowPopup(true);
  //   setAnimatePing(true);

  //   // Remove ping animation after a short duration
  //   setTimeout(() => {
  //     setAnimatePing(false);
  //   }, 1000); // Adjust duration as needed
  // };
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    CountryCode: "+91",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameParts = formData.Name.trim().split(" ");

    if (nameParts.length < 2 || nameParts[0] === "" || nameParts[1] === "") {
      toast.error("Please enter your full name");
    } else {
      setLoading(true);
      // Prepare the data to be sent in the POST request
      console.log("formData: ", formData);
      const data = {
        fullName: formData.Name,
        email: formData.Email,
        countryCode: formData.CountryCode,
        phone: formData.Phone,
        inquiryType: formData.inquiryType,
        message: formData.message,
        newsletter: false,
      };

      console.log("Form Data:", data);

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

        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          CountryCode: "+91",
          inquiryType: "",
          message: "",
        });
      } catch (error) {
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          CountryCode: "+91",
          inquiryType: "",
          message: "",
        });
        setLoading(false);
        toast.error("An error occurred");
        console.error("Error submitting form", error);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };



  return (
    <div className="ContactUs my-8 pb-10">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowPopup(false)} // Click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative w-[25%] bg-white rounded-lg p-8 shadow-2xl z-10 text-center">
            {/* Success Icon */}
            <FaCheckCircle
              size={50}
              className={`text-green-500 mx-auto mb-4 ${
                animatePing ? "animate-ping" : ""
              }`}
            />

            <h2 className="text-2xl font-bold text-indigo-600 mb-4 transition-all duration-300 ease-in-out">
              Thank you!
            </h2>
            <p className="text-gray-700 mb-6">
             We have received your query. Our team will reach out soon.
            </p>

            {/* Decorative Element */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-t-md"></div>

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="bg-indigo-500 text-white px-6 py-1 rounded hover:bg-indigo-700 focus:outline-none transition-all"
            >
             Close
            </button>
          </div>
        </div>
      )}
      <section className="relative dark:bg-black px-4 py-8 md:py-10 z-10 mt-4 md:mt-14 mb-6 md:mb-6 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="h1 overflow-hidden text-3xl md:text-5xl font-semibold dark:text-white text-gray-900">
            <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
              Get in Touch
            </span>{" "}
            with Us
          </h1>
          <p className="h1 m-0 overflow-hidden text-sm md:text-base lg:text-lg dark:text-slate-300 text-gray-600 mt-4 md:mt-6">
            Have any questions, feedback, or need assistance? We're just a
            message away.
            <br/> Fill out the form below, and our team will get back to you
            shortly.
          </p>
        </div>
      </section>

      <section className="py-2 px-4 md:px-24   dark:bg-black rounded-xl">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center">
          <div className="con lg:w-2/4 xl:w-2/5 dark:text-white p-4 md:p-6 lg:p-8 rounded-lg border lg:py-6  ">
            <h2 className="text-xl md:text-3xl lg:text-3xl text-center font-bold md:mb-8 mb-4">
              Contact Us
            </h2>
            <form
              id="form1"
              className="space-y-3"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 dark:text-slate-300 mb-2 text-sm"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  name="Name"
                  value={formData.Name}
                  className="w-full px-3 py-2 dark:bg-slate-800 border border-gray-300 rounded-md text-xs "
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-slate-300 mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="Email"
                  value={formData.Email}
                  className="w-full px-3 py-2 dark:bg-slate-800 border border-gray-300 rounded-md text-xs"
                  placeholder="Enter your E-mail"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number with Country Code */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative inline-block">
                  <label
                    htmlFor="countryCode"
                    className="block text-gray-700 dark:text-slate-300 mb-2 text-sm"
                  >
                    Country Code
                  </label>
                  <select
                    id="countryCode"
                    name="CountryCode"
                    className="border px-3 py-2 pr-8 dark:bg-slate-800 rounded focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-xs"
                    onChange={handleChange}
                  >
                    <option value="+91"> +91 (India)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center mt-5 pr-3 pointer-events-none">
                    <IoIosArrowDown className="text-gray-500" />
                  </div>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 dark:text-slate-300 mb-2 text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="Phone"
                    type="tel"
                    value={formData.Phone}
                    className="w-full px-3 py-2 dark:bg-slate-800 border border-gray-300 rounded-md text-xs"
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    minLength="10"
                    maxLength="10"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="relative inline-block w-full">
                <select
                  id="inquiryType"
                  name="inquiryType"
                  className="border px-3 py-2 pr-10 dark:bg-slate-800 rounded focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-sm"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="" className="bg-gray-300">
                    Select Inquiry Type
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Course-Related Query">
                    Course-Related Query
                  </option>
                  <option value="Partnership Opportunities">
                    Partnership Opportunities
                  </option>
                  <option value="Others">Others</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoIosArrowDown className="text-gray-500" />
                </div>
              </div>

              {/* message box */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-slate-300 mb-2 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  name="message"
                  rows="4"
                  value={formData.message}
                  className="text-xs md:text-base w-full p-3 border dark:bg-slate-800 border-gray-300 rounded-md"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start">
                <input
                  id="consent"
                  name="Consent"
                  checked={formData.Consent}
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 "
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="consent"
                  className="dark:text-slate-300 text-gray-700 text-[0.6rem] md:text-xs"
                >
                  I consent to receiving updates and notifications from online
                  Baoiam and its affiliates via email, SMS, WhatsApp, and voice
                  call, overriding any DNC/NDNC preference.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 text-sm"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>

          <div className="lg:w-1/3 space-y-4 ">
            <div className="con1 dark:bg-black p-6 lg:p-8 lg:py-6 ">
              <h2 className="rvl text-xl md:text-2xl lg:text-xl font-bold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 icon" />
                  <a
                    href="mailto:support@baoiam.com"
                    className="underline text-sm icon2"
                  >
                    support@baoiam.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="mr-4 icon" />
                  <a href="tel:08069640635" className="icon2 underline text-sm">
                    08069640635
                  </a>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 icon" />
                  <a href="#" className="underline text-sm icon2 ">
                    B Block Noida Sector 15 Uttar Pradesh
                  </a>
                </div>
              </div>
              <div className="flex justify-start gap-4 mt-6">
                <Link
                  to="https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaFacebook size={22} className="icon3" />
                </Link>
                <Link
                  to="https://www.instagram.com/baoiam_innovations/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaInstagram size={22} className="icon3" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/mycompany/"
                  target="_blank"
                  className="text-black dark:text-white hover:text-gray-500"
                >
                  <FaLinkedin size={22} className="icon3" />
                </Link>
                <Link
                  to="https://twitter.com/BAOIAM1"
                  target="_blank"
                  className="text-black text-nowrap flex items-center dark:text-white hover:text-gray-500"
                >
                  <FaSquareXTwitter size={22}  className="icon3"/>
                </Link>
              </div>

              <div className="h-56 w-full mt-6 md:mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56778.23569201361!2d77.29743635795448!3d28.56460407812812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3036ecb3b95%3A0x927e51f17b1aeb5b!2sB%20Block%2C%20Sector%2015%2C%20Noida%2C%20Uttar%20Pradesh%20201021!5e0!3m2!1sen!2sin!4v1694209323043"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
