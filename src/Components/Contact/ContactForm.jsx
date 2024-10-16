import { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Flag from "../../assets/Our_flag.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
const apiUrl = import.meta.env.VITE_API_URL;
import { useDispatch } from "react-redux";
import { toggleEnrollForm } from "../../Redux/slices/enrollFormSlice";
import thumbsUp from "../../assets/Images/thumbs-up (1).gif";
import { TbCircleCheckFilled } from "react-icons/tb";



export const ContactFormComponent = () => {
  const [category, setCategory] = useState("");
  const [courses, setCourses] = useState([]);
  const [isCourseDisabled, setIsCourseDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animatePing, setAnimatePing] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    CountryCode: "+91",
    Course: "",
    Consent: false,
  });

  const categoryOptions = {
    "Junior Courses": [
      "Creative Writing",
      "Public Speaking",
      "Life Skills",
      "Social Media and Digital Marketing",
      "Photography & Editing Skills",
      "Critical Thinking & Problem Solving",
      "Technology Development with AI & Coding",
      "Arts & Crafts (DIY)",
      "Entrepreneurship and Innovation",
      "Financial Education",
    ],
    "University Courses": [
      "Product Management",
      "Data Science",
      "Machine Learning with AI",
      "Data Analytics",
      "UI/UX Design",
      "Android Development",
      "Digital Marketing",
      "Graphic Designing",
      "Human Resource",
      "Web Development",
      "Software Testing",
      "Finance Education",
      "International Business",
      "Entrepreneurship and Innovation",
      "SEO Development",
    ],
    "Other Courses": [
      "Emotional Intelligence",
      "Machine Learning with AI",
      "International Business",
      "Data Analytics",
      "Executive and Public Relations Content Writing",
      "Data Science",
    ],
  };

  // Handle category selection
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory); // Update category
    setCourses(categoryOptions[selectedCategory] || []); // Set courses based on selected category
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare the data to be sent in the POST request
    // console.log("formData: ", formData.Name);
    const data = {
      student_full_name: formData.Name,
      student_email: formData.Email,
      student_phone: formData.Phone,
      // CountryCode: formData.CountryCode,
      course: formData.Course,
      // Consent: formData.Consent,
    };

    // console.log("Form Data:", data);
    try {
      setLoading(true);
      const response = await axios.post(
        // "https://script.google.com/macros/s/AKfycbyrM_x9q5m5qMwJ814X2g9rdKYWGne8bmZ5nzIZ0xY0ppGnzTOl5jsUGKlALnPgnEEI/exec",
        `${apiUrl}/api/enrollment-query-save/`,
        data
        // {
        //   headers: { "Content-Type": "multipart/form-data" },
        // }
      );
      if (response.status === 201) {
        console.log("Form successfully submitted:", response.data);
        setShowPopup(true);

        // toast.success("Form submitted successfully");
      }
    } catch (error) {
      setLoading(false);
       const errorMessages = error.response?.data?.student_full_name || [];
    
    // Customize the error message based on the content
    let errorMessage = "An unexpected error occurred. Please try again.";
    
    if (errorMessages.length > 0) {
      // Check for specific error messages and customize them
      if (errorMessages.includes("Full name must include at least a first name and a last name.")) {
        errorMessage = "Please enter both your first and last name.";
      } else {
        errorMessage = errorMessages[0]; // Use the first message from the server
      }
    }
      // Display the error message using toast
      toast.error(errorMessage);
      console.error("Error submitting form", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCloseForm = () => {
    setShowPopup(false);
    dispatch(toggleEnrollForm());
    setFormData({
      Name: "",
      Email: "",
      Phone: "",
      CountryCode: "+91",
      Course: "",
      Consent: false,
    });
    setLoading(false);
  };
  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[201]">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowPopup(false)} // Click outside to close
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-lg p-8 shadow-2xl z-10 text-center md:w-[400px] w-[250px] dark:bg-gray-700">
            {/* Gradient Top Section */}
            {/* bg-gradient-to-r from-orange-500 to-pink-400*/}
            {/*bg-gradient-to-r from-green-500 to-yellow-400 */}
            {/*bg-gradient-to-r from-indigo-900 to-purple-800 */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-green-400 to-indigo-500 rounded-t-lg"></div>

            {/* Success Icon */}
            <div className="relative top-[80px]  rounded-full inline-block ">
  
              <TbCircleCheckFilled className="w-20 h-20 text-green-600 bg-white mx-auto flex items-center p-2 rounded-full  " />
            </div>

            {/* Success Message */}
            <div className="pt-20">
              <h2 className="text-3xl font-bold text-black mb-4 dark:text-white">
              Congratulations!
              </h2>
              <p className="text-gray-700 mb-6 dark:text-gray-300">
              You’ve successfully enrolled. Our team will be in touch shortly.
              </p>

              {/* Continue Button */}
              <button
                onClick={handleCloseForm} // Manually close the popup
                className="bg-indigo-500 text-white font-bold px-6 py-2 rounded hover:bg-indigo-700 focus:outline-none transition-all text-sm md:text-base"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {
        <div className="fixed inset-0 flex justify-center items-center z-[200] bg-black/50">
          <div className=" w-[95%] md:w-[70%] lg:w-[38%] my-10  dark:bg-black  bg-white p-4 px-6 rounded-lg border relative flex flex-col items-center justify-center overflow-y-auto ">
            <span
              onClick={() => dispatch(toggleEnrollForm())}
              className="absolute top-7 right-6 text-2xl"
            >
              <RxCross2 />
            </span>
            <div className="text-lg md:text-2xl py-4 text-center font-bold">
              <div>
                <h2>Ready to enhance your skills?</h2>
                <span className="text-xs md:text-sm font-medium">
                  Share your details and hear from us soon
                </span>
              </div>
            </div>
            <form
              id="form1"
              className="space-y-2 md:px-6 pb-4 text-center mx-auto w-full"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="text-left space-y-2">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullname"
                    className="block dark:text-gray-300 text-gray-700 mb-1 text-xs"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    type="text"
                    name="Name"
                    className="w-full dark:bg-slate-800 py-1 px-2 sm:px-2.5 lg:py-2 border border-gray-300 rounded-md sm:rounded-lg text-xs"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block dark:text-gray-300 text-gray-700 mb-2 text-xs"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    className="w-full dark:bg-slate-800 py-1 px-2 sm:px-2.5 lg:py-2 border border-gray-300 rounded-md sm:rounded-lg text-xs"
                    placeholder="Enter your E-mail"
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Phone Number with Country Code */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block dark:text-gray-300 text-gray-700 mb-2 text-sm "
                  >
                    Phone Number
                  </label>
                  <div className="flex w-full gap-1 sm:gap-2 items-center">
                    <div className="relative w-fit inline-block">
                      {/* <label
                      htmlFor="countryCode"
                      className="block dark:text-gray-300 text-gray-700 mb-2 text-xs md:text-sm"
                    >
                      Country Code
                    </label> */}
                      {/* <div className="flex items-center gap-4"> */}
                      <div className="flex gap-1 items-center dark:bg-slate-800 border py-1 px-2 lg:py-2 rounded-lg focus:outline-none focus:border-gray-300 w-full bg-white cursor-pointer text-xs">
                        <p className="font-medium">+91</p>
                        <div className="min-w-4 lg:w-6 h-4 rounded-lg lg:h-4">
                          <img
                            src={Flag}
                            alt="India"
                            className="w-full h-full md:object-contain rounded-sm lg:object-cover"
                          />
                        </div>
                      </div>
                      {/* <select
                        id="countryCode"
                        name="CountryCode"
                        className="border py-1 md:px-2 lg:py-2 pr-8 rounded-lg focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-xs md:text-sm"
                        onChange={handleChange}
                      >
                        <option value="+91">
                          +91
                        </option>
                      </select>
                      <div className="absolute right-3 flex items-center justify-center pointer-events-none">
                        <IoIosArrowDown className="text-gray-500" />
                      </div> */}
                      {/* </div> */}
                    </div>
                    <div className="w-full">
                      {/* <label
                      htmlFor="phone"
                      className="block dark:text-gray-300 text-gray-700 px-1 mb-2 text-xs md:text-sm"
                    >
                      Phone Number
                    </label> */}
                      <input
                        id="phone"
                        name="Phone"
                        type="tel"
                        className="w-full dark:bg-slate-800 py-1 px-2 sm:px-2.5 lg:py-2 border border-gray-300 rounded-md sm:rounded-lg text-xs"
                        placeholder="Enter your phone number"
                        pattern="[0-9]{10}"
                        minLength="10"
                        maxLength="10"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="relative inline-block my-2 w-full">
                  <select
                    id="category"
                    name="category"
                    className="border dark:bg-slate-800 mt-1 py-1 lg:py-2 px-2 rounded-md sm:rounded-lg focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-xs"
                    required
                    onChange={handleCategoryChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Junior Courses">Junior Courses</option>
                    <option value="University Courses">
                      University Courses
                    </option>
                    <option value="Other Courses">Other Courses</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <IoIosArrowDown className="dark:text-gray-300 text-gray-500" />
                  </div>
                </div>

                {/* Course Dropdown */}
                <div className="relative inline-block my-2 w-full">
                  <select
                    id="courses"
                    name="Course"
                    className="border dark:bg-slate-800 mt-1 py-1 lg:py-2 px-2 rounded-md sm:rounded-lg focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-xs"
                    required
                    onChange={handleChange}
                  >
                    <option value="">
                      {category ? "Select Course" : "Please select a category"}
                    </option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <IoIosArrowDown className="dark:text-gray-300 text-gray-500" />
                  </div>
                </div>

                {/* Inquiry Type */}
                {/* <div className="relative inline-block my-2 w-full">
                  <select
                    id="courses"
                    name="Course"
                    className="border dark:bg-slate-800 mt-1 py-2 px-2 rounded-md sm:rounded-lg focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-xs md:text-sm"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Course</option>
                    <option value="Web Development">Web Development</option>
                    <option value="English speaking/Public speaking">
                      English speaking/Public speaking
                    </option>
                    <option value="Creative writing">Creative writing</option>
                    <option value="Art and craft (DIY)">
                      Art and craft (DIY)
                    </option>
                    <option value="Critical Thinking & Problem Solving">
                      Critical Thinking & Problem Solving
                    </option>
                    <option value="Life Skills">Life Skills</option>
                    <option value="Photography & Editing Skills">
                      Photography & Editing Skills
                    </option>
                    <option value="Technology Development with AI & Coding">
                      Technology Development with AI & Coding
                    </option>
                    <option value="Entrepreneurship & Innovation(Junior Program)">
                      Entrepreneurship & Innovation(Junior Program)
                    </option>
                    <option value="Social Media and Digital Marketing">
                      Social Media and Digital Marketing
                    </option>
                    <option value="Finance Education">Finance Education</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Product Management">
                      Product Management
                    </option>
                    <option value="Android Development">
                      Android Development
                    </option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Software Testing">Software Testing</option>
                    <option value="Entrepreneurship & Innovation(Pre University)">
                      Entrepreneurship & Innovation(Pre University)
                    </option>
                    <option value="SEO Development">SEO Development</option>
                    <option value="Machine Learning with AI">
                      Machine Learning with AI
                    </option>
                    <option value="International Business">
                      International Business
                    </option>
                    <option value="Emotional Intelligence">
                      Emotional Intelligence
                    </option>
                    <option value="Executive & Public Relations Content Writing">
                      Executive & Public Relations Content Writing
                    </option>
                    <option value="Data Science">Data Science</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <IoIosArrowDown className="dark:text-gray-300 text-gray-500" />
                  </div>
                </div> */}
              </div>

              {/* <div className="relative inline-block w-full">
                <select
                  id="courses"
                  name="Course"
                  className="border dark:bg-slate-800 py-1 px-2 sm:px-2.5 lg:py-2 pr-10 rounded-md sm:rounded-lg focus:outline-none focus:border-gray-300 appearance-none w-full bg-white cursor-pointer text-xs md:text-sm"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Enrollment Type</option>
                  <option value="Full Course">Full Course</option>
                  <option value="Demo Session">Demo Session</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <IoIosArrowDown className="dark:text-gray-300 text-gray-500" />
                </div>
              </div> */}

              {/* Consent Checkbox */}
              <div className="flex text-left pt-5">
                <input
                  id="consent"
                  name="Consent"
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="consent"
                  className="dark:text-gray-300 mb-3 text-gray-700 text-[10px] md:text-xs"
                >
                  I consent to receiving updates and notifications from online
                  Baoiam and its affiliates via email, SMS, WhatsApp, and voice
                  call, overriding any DNC/NDNC preference.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[80%] mx-auto text-center bg-indigo-500 text-white text-xs md:text-base py-2 rounded-md hover:bg-indigo-600"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      }
    </>
  );
};
