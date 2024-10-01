import React, { useEffect, useState } from "react";
import Certificate from "../assets/Certificate.jpg";
import mern from "../assets/mern.png";
import razorpay from "../assets/razorpay.png";
import secure from "../assets/secure.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UserIcon,
  PencilIcon,
  ComputerDesktopIcon,
  PercentBadgeIcon,
} from "@heroicons/react/24/solid";
import { FaCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { School, CollegeCourseData, OtherCourseData } from "../Data";
import axios from "axios";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineClass, MdOutlineLiveHelp } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
const apiUrl = import.meta.env.VITE_API_URL;
const razorpayKeyId = import.meta.env.RAZORPAY_KEY_ID;

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const course = { title: 'title', price: 4999, thumbnail_image: '', description: 'description' };
  // const course = location.state.course;
  // const price=useLocation().state;
  const invalidCouponToast = () => toast("Invalid Referral Code!");
  const { id, plan } = useParams();
console.log(location.state?.course.price);

  // const { course } = {course:{
  //   title:"Course Title",
  //   thumbnail_image:"",
  //   description:"description",
  //   price:4999,
  // }};
  const [proceedButton, setProceedButton] = useState(
    `PROCEED TO PAY ₹${course.price}`
  );
  const [referral, setReferral] = useState("");
  const [enrollingCourse, setEnrollingCourse] = useState({});
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
  const handleCheckout = () => {
    setProceedButton("Loading....");
    const buyCourse = async () => {
      // console.log(localStorage.getItem("access_token"));
      try {
        const { data } = await axios.post(
          `${apiUrl}/api/orders/`,
          {
            plan_id: id,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const { order_id, total_amount } = data;
        console.log("order_id: " + order_id);
        const options = {
          key: razorpayKeyId,
          amount: total_amount,
          currency: "INR",
          order_id: order_id,
          handler: async function (res) {
            const payment_id = res.razorpay_payment_id;
            const signature = res.razorpay_signature;
            console.log("payment_id:", payment_id);
            console.log("signature:", signature);
            console.log("order_id:(inside razorpay)", order_id);
            try {
              setProceedButton("Verifying....");
              const { data } = await axios.post(
                `${apiUrl}/api/orders/verify_payment/`,
                JSON.stringify({
                  payment_id,
                  order_id,
                  signature,
                }),
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem(
                      "access_token"
                    )}`,
                  },
                }
              );
              console.log("data from razorpay:", data);
              if (data.message == "Payment verified successfully!") {
                toast.success("Enrollment completed successfully!");
                setProceedButton("Success");
                navigate("/profile");
              }
            } catch (err) {
              toast.error(err.message);
              console.log("err.stack: ", err.stack);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        if (window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          console.error("Razorpay SDK not loaded");
          toast.error("Payment gateway not available");
        }
        // console.log("FROM CHECKOUT: ", data);
      } catch (err) {
        console.log(err.stack);
        console.log(proceedButton);
        setProceedButton(`PROCEED TO PAY ₹${course.price}`);
        // toast.error("Something went wrong");
      }
    };
    buyCourse();
  };

  document.title = `Baoiam - ${enrollingCourse?.course}`;


  return (
    <div className="flex flex-wrap dark:bg-black bg-slate-100 dark:text-white py-4 pb-8 px-2 md:px-12 lg:px-4">
      {/* left section */}
      <div className="w-full lg:w-[65%] py-6 px-2 xl:px-4">
        {/* Course Content */}
        <div className="w-full h-fit flex items-center flex-col md:flex-row justify-between gap-4 bg-white px-8 py-4 rounded-lg">
          <div className="w-full md:w-[25%] h-full overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover" src={`https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png`} alt="" />
          </div>
          <div className="w-full md:w-[75%] h-full">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">{course.title}</h1>
            <p className="text-sm mt-2">{course.description.split(".")[0]}</p>
            <p className="text-sm mt-4 flex items-center gap-2">
              <span>25 Lessons</span>
              •
              <span>52 Hours</span>
            </p>
          </div>
        </div>

        {/* Points */}
        <div className="w-full h-fit flex flex-col items-center justify-center gap-4 mt-4 py-4 bg-white rounded-lg">
          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-3">
            <div className="flex text-nowrap tracking-tight justify-start text-sm xl:text-lg items-center gap-2">
              <GoProjectRoadmap className="bg-gradient-to-r from-indigo-800 to-indigo-500 text-white text-4xl xl:text-6xl rounded-full p-2 xl:p-4" /> Interview Training
            </div>
            <div className="flex text-nowrap tracking-tight justify-start text-sm xl:text-lg items-center gap-2">
              <MdOutlineClass className="bg-gradient-to-r from-indigo-800 to-indigo-500 text-white text-4xl xl:text-6xl rounded-full p-2 xl:p-4" /> Placement Assistance
            </div>
            <div className="flex text-nowrap tracking-tight justify-start text-sm xl:text-lg items-center gap-2">
              <PiCertificate className="bg-gradient-to-r from-indigo-800 to-indigo-500 text-white text-4xl xl:text-6xl rounded-full p-2 xl:p-4" /> Certificate of completion
            </div>
          </div>

          <p>and <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent font-medium">Many More Benefits!</span></p>
        </div>

        {/* EMI & Payment */}
        <div className="flex flex-col items-center mt-4 py-4 bg-white rounded-lg">
          <div className="flex flex-col items-center mb-2">
            <PercentBadgeIcon className="h-8 w-8 mr-2" />
            <p className="text-lg font-semibold">No cost EMI</p>
            <p className="text-slate-500 mb-6 px-10 text-center">
              Easy on your wallet. Choose No cost EMI when paying with credit
              cards.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <HiShieldCheck className="h-8 w-8 mr-2" />
            <p className="text-lg font-semibold">100% safe & secure payment</p>
            <div className="flex justify-center px-8 w-full">
              <img className="h-14 w-28 mr-4" src={secure} alt="secure img" />
              <img className="h-16 w-28" src={razorpay} alt="razorpay img" />
            </div>
          </div>
        </div>

      </div>

      {/* right section */}
      <div className="flex flex-col w-full lg:w-[35%] py-6 px-2">
        <h1 className="font-semibold text-2xl mb-4">Confirm your order</h1>
        <div className="bg-white rounded-lg py-4 px-6">
          {/* <UserIcon className="h-8 w-8 mr-2 rounded-full border-[1.5px] border-emerald-500 text-white bg-gray-200" /> */}
          <div className="flex justify-between w-full items-center">
            <div>
              <p className="text-sm text-slate-600 font-semibold dark:text-white">
                {JSON.parse(localStorage.getItem("userInfo"))?.first_name +
                  " " +
                  JSON.parse(localStorage.getItem("userInfo"))?.last_name}
              </p>
              {/* <p className="text-sm text-slate-400">8785144645</p> */}
            </div>
            <div className="flex items-center cursor-pointer">
              <PencilIcon className="h-4 w-4 text-orange-500" />
              <span className="ml-2 text-orange-500">Edit</span>
            </div>
          </div>
        </div>
        <div className="my-4 w-full bg-white rounded-lg p-4">
          <p className="text-gray-700  font-semibold dark:text-slate-400">
            Have a referral code?
          </p>
          <div className="flex mt-3 gap-4 justify-between items-center w-full">
            <input
              value={referral}
              placeholder="Enter code"
              onChange={(e) => setReferral(e.target.value)}
              className="border-2 px-2 text-sm  flex-1 border-gray-400 text-black dark:text-white rounded-md outline-none dark:border-white dark:bg-black dark:border-2 w-40 xl:w-full py-1"
              type="text"
            />
            <button
              className="px-5 text-sm xl:text-base flex-1 py-1 rounded-md border-indigo-600 hover:bg-indigo-600 hover:text-white transition border-2 w-full"
              onClick={() => {
                if (!referral) {
                  toast.error("Please enter a referral code");
                } else invalidCouponToast();
              }}
            >
              Apply
            </button>
            <ToastContainer />
          </div>
        </div>

        <div className="w-full bg-white rounded-lg mb-4 p-4">
          <p className="text-xl font-semibold">Order Summary</p>
          <div className="flex flex-col gap-2 w-full mt-4">
            <p className="flex items-center justify-between w-full">Course: <span>₹{course.price}</span></p>
            <p className="flex items-center justify-between w-full">Discount: <span>₹100</span></p>
            <p className="flex items-center justify-between w-full">GST: <span>₹25</span></p>
          </div>
          <hr className="border-t-1 border-gray-300 my-4" />
          <div className="flex items-center justify-between my-4">
            <h2 className="text-lg text-black font-semibold dark:text-white">
              Total
            </h2>
            <p className="text-black text-lg font-semibold dark:text-white">
              ₹{course.price}
            </p>
          </div>

        </div>
        <button
          disabled={proceedButton === "Loading...."}
          onClick={handleCheckout}
          className={`w-full flex  justify-center rounded-md mt-4 font-semibold p-2 text-white bg-gradient-to-r 
           
               from-indigo-800 to-indigo-500
                ${proceedButton === "Loading...." &&
            "from-slate-400 to-slate-400"
            }
          }`}
        >
          <HiShieldCheck className="h-6 w-6 text-white" />
          &nbsp; {proceedButton}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
