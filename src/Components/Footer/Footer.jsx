import React from "react";
import BrandLogo from "../../assets/brand.png";
import AppStore from "../../assets/footer-desktop-appstore.svg";
import PlayStore from "../../assets/footer-desktop-playstore.svg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import Logo from "../../assets/img1.png";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import AppStorePng from "../../assets/Images/Stores/AppStoreDark.png";
import PlayStorePng from "../../assets/Images/PlayStore.png";
import CoursesList from "../CoursesList";
import logo from "../../assets/logo.jpeg";
import { LogoDark, LogoLight } from "../../assets/assets";

function Footer({ dark }) {
  const navigate = useNavigate();
  return (
    <footer className="bg-zinc-100 dark:bg-white/10 dark:text-white">
      <div className="mx-auto px-4 pt-7 md:pt-14">
        <div className="flex md:px-10 flex-col gap-6 md:flex-row w-full">
          <div onClick={() => navigate("/")} className={`w-[34%] md:w-[10%] `}>
            <img
              src={dark ? LogoDark : LogoLight}
              className="w-full"
              alt="Baoiam Innovation brand image."
            />
          </div>

          <div className="flex flex-col justify-evenly gap-4 md:pl-8 md:flex-row md:w-[85%] dark:text-white">
            {/* Quick Links */}
            <div className=" sm:text-left">
              <p className="text-lg font-medium text-black dark:text-white text-nowrap">
                Quick Links
              </p>

              <div className="mt-4  flex flex-col gap-2 text-xs">
                <Link
                  to={"/team"}
                  className="text-black dark:text-white text-nowrap flex items-center"
                >
                  <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" />
                  Our Team
                </Link>
                <Link
                  to={"/about-us"}
                  className="text-black dark:text-white text-nowrap flex items-center"
                >
                  <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" />
                  About Us
                </Link>
                <Link
                  to={"/career"}
                  className="text-black text-nowrap dark:text-white flex items-center"
                >
                  <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" />
                  Careers
                </Link>
                <Link
                  to={"/courses"}
                  className="text-black dark:text-white text-nowrap flex items-center"
                >
                  <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" />
                  Course
                </Link>

                <Link
                  to={"/blogs"}
                  className="text-black text-nowrap dark:text-white  flex items-center"
                >
                  <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" />{" "}
                  Blog
                </Link>
              </div>
            </div>

            {/* Program & Partnership */}
            <div className=" sm:text-left">
              <p className="text-lg font-medium text-black dark:text-white text-wrap xl:text-nowrap">
                Programs & Partnerships
              </p>

              <div className="mt-4 flex flex-col gap-2 text-xs">
                <Link
                  to={"/gcep"}
                  className="text-black text-nowrap max-w-fit hover:text-wrap dark:text-white group flex items-center"
                >
                  <MdKeyboardArrowRight size={20} />
                  <p className="truncate group-hover:text-wrap">
                    Global Collabo Educational Partnership
                  </p>
                </Link>
                <Link
                  to={"/Maintenance"}
                  className="text-black text-nowrap max-w-fit  hover:text-wrap group dark:text-white flex items-center"
                >
                  <MdKeyboardArrowRight size={20} />
                  <p className="truncate group-hover:text-wrap">Bridge</p>
                </Link>
                <Link
                  to={"/itie"}
                  className="text-black dark:text-white text-nowrap flex items-center"
                >
                  <MdKeyboardArrowRight size={20} /> Intern Teach Intern Earn
                </Link>
                <Link
                  to={"/pap"}
                  className="text-black text-nowrap dark:text-white flex items-center"
                >
                  <MdKeyboardArrowRight size={20} /> Pay After Placement
                </Link>
                <Link
                  to={"/entrepreneurship"}
                  className="text-black dark:text-white text-nowrap flex items-center"
                >
                  <MdKeyboardArrowRight size={20} /> Entrepreneurship
                </Link>
              </div>
            </div>

            {/* Help & Support */}
            <div className=" sm:text-left">
              <p className="text-lg font-medium text-black dark:text-white text-nowrap">
                Help & Support
              </p>

              <div className="mt-4 flex flex-col gap-2 text-xs">
                <Link
                  to={"/hire"}
                  className="text-black text-nowrap dark:text-white  flex items-center"
                >
                  <MdKeyboardArrowRight size={20} /> Hire from us
                </Link>
                <Link
                  to={"/contact"}
                  className="text-black text-nowrap dark:text-white  flex items-center"
                >
                  <MdKeyboardArrowRight size={20} /> Contact Us
                </Link>
                <Link
                  to={"/FAQ"}
                  className="text-black text-nowrap dark:text-white  flex items-center"
                >
                  <MdKeyboardArrowRight size={20} /> FAQs
                </Link>
                {/* <Link
                  to={"/help"}
                  className="text-black text-nowrap dark:text-white  flex items-center"
                >
                  <MdKeyboardArrowRight className=" min-w-6 text-xl aspect-square" /> Help Center
                </Link> */}
              </div>
            </div>

            {/* Contact Us */}
            <div className=" sm:text-left">
              <p className="text-lg font-medium text-black dark:text-white text-nowrap">
                Contact Us
              </p>

              <ul className="mt-4 space-y-4 text-xs">
                {/* Mail */}
                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="flex-1 dark:text-white text-black">
                    support@baoiam.com
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="flex-1 text-black dark:text-white">
                    08069640635
                  </span>
                </li>

                {/* Address */}
                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-black dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 dark:text-white not-italic text-black">
                    H Block, Sector 62 <br />
                    201301
                    <br />
                    UP Noida, India.
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full p-2 px-10 md:pr-20 bg-cover object-cover flex flex-col md:flex-row-reverse gap-4 items-center justify-between">
          <div className="flex gap-2 h-8 object-cover justify-start">
            <Link to="#" className="">
              <img
                src={AppStorePng}
                className="object-cover max-h-8"
                alt="AppStore"
              />
            </Link>
            <Link to="#" className="">
              <img
                src={PlayStorePng}
                className="object-cover max-h-8"
                alt="PlayStore"
              />
            </Link>
          </div>
          <div className="flex justify-start col-span-full md:col-start-2 lg:col-start-4 gap-6 sm:justify-start">
            {/* Facebook */}
            <Link
              to={
                "https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"
              }
              target="_blank"
              className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
            >
              <FaFacebook className=" min-w-6 text-xl aspect-square" />
            </Link>

            {/* Instagram */}
            <Link
              to={"https://www.instagram.com/baoiam_innovations/"}
              target="_blank"
              className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
            >
              <FaInstagram className=" min-w-6 text-xl aspect-square" />
            </Link>

            {/* Linkedin */}
            <Link
              to={
                "https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/mycompany/"
              }
              target="_blank"
              className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
            >
              <FaLinkedin className=" min-w-6 text-xl aspect-square" />
            </Link>

            {/* Twitter */}
            <Link
              to={"https://twitter.com/BAOIAM1"}
              target="_blank"
              className="text-black text-nowrap flex items-center dark:text-white hover:text-gray-500"
            >
              <FaSquareXTwitter className=" min-w-6 text-xl aspect-square" />
            </Link>
          </div>
        </div>
        <hr className="h-[1.4px] bg-slate-500" />
        <div className="py-4 md:px-20">
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between text-left">
            <div className="text-[0.6rem] flex items-center gap-4 text-black">
              <Link
                to={"/terms-conditions"}
                className="text-black dark:text-white text-nowrap flex items-center"
              >
                Terms & Conditions
              </Link>
              <Link
                to={"/refund"}
                className="text-black dark:text-white text-nowrap flex items-center"
              >
                Refund policy
              </Link>
              <Link
                to={"/privacy-policy"}
                className="text-black dark:text-white text-nowrap flex items-center"
              >
                Privacy policy
              </Link>
            </div>

            <p className="text-xs dark:text-white text-black order-first">
              BAOIAM &copy; 2023{" "}
              <span className="dark:text-white">All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;