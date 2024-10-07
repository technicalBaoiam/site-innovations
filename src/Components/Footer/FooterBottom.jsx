import React from "react";
import { Link } from "react-router-dom";

import AppStorePng from "../../assets/Images/Stores/AppStoreDark.png";
import PlayStorePng from "../../assets/Images/PlayStore.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const FooterBottom = () => {
    return (
        <div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
                <Link to={"https://www.facebook.com/people/%F0%9D%98%BD%F0%9D%98%BC%F0%9D%99%8A-%F0%9D%99%84%F0%9D%98%BC%F0%9D%99%88-%F0%9D%98%89%F0%9D%98%A6-%F0%9D%98%88-%F0%9D%98%96%F0%9D%98%AF%F0%9D%98%A6-%F0%9D%98%90%F0%9D%98%AF-%F0%9D%98%88-%F0%9D%98%94%F0%9D%98%AA%F0%9D%98%AD%F0%9D%98%AD%F0%9D%98%AA%F0%9D%98%B0%F0%9D%98%AF/100064896061625/"} className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500">
                    <FaFacebook className=" min-w-6 text-xl aspect-square" /> <span className="hidden md:inline-block">Facebook</span>
                </Link>
                <Link
                    to={"https://twitter.com/BAOIAM1"}
                    target="_blank"
                    className="text-black text-nowrap flex items-center dark:text-white hover:text-gray-500"
                >
                    <FaSquareXTwitter className=" min-w-6 text-xl aspect-square" />
                    <span className="hidden md:inline-block">Twitter</span>
                </Link>
                <Link
                    to={"https://www.instagram.com/baoiam_innovations/"}
                    target="_blank"
                    className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
                >
                    <FaInstagram className=" min-w-6 text-xl aspect-square" />
                    <span className="hidden md:inline-block">Instagram</span>
                </Link>
                <Link
                    to={
                        "https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/mycompany/"
                    }
                    target="_blank"
                    className="text-black dark:text-white text-nowrap flex items-center hover:text-gray-500"
                >
                    <FaLinkedin className=" min-w-6 text-xl aspect-square" />
                    <span className="hidden md:inline-block">LinkedIn</span>
                </Link>

            </div>

            {/* Play Store & App Store */}
            <div className="flex space-x-4">
                {/* <div className=""> */}
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
                {/* </div> */}
            </div>
        </div>
        {/* <hr className="h-[1.4px] my-4 bg-gray-700" /> */}
          <div className="flex flex-col gap-2 md:gap-0 mt-4 md:flex-row items-center justify-between text-left">
            <div className="text-[0.6rem] md:text-xs flex items-center gap-4 text-black">
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
    );
};

export default FooterBottom;
