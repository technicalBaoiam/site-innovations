import React, { useEffect, useState } from "react";
import { FiCalendar, FiEdit, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaUniversity, FaUserCircle } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import Recommendations from "../StudentDasboard/Recommendations";
import HeroDp from "../../assets/Images/dp.jpg";
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setProfile } from "../../Redux/user/userSlice.js";

function Profile({ userInfo }) {
  console.log(userInfo, "user profile");
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  const [profileImage, setProfileImage] = useState(
    HeroDp || "https://via.placeholder.com/150"
  );
  const navigate = useNavigate();
  // Load profile image from local storage
  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    // dispatch(setProfile(userInfo));
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  // Handle profile image change
  const handleChangeProfile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        // Save the image in localStorage
        localStorage.setItem("profileImage", base64String);
        // Update the state to reflect the new image
        setProfileImage(base64String);
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 string
    }
  };

  return (
    <div className="relative bg-indigo-100 text-black dark:bg-black dark:text-white dark:border dark:border-white p-4 py-8 md:p-6 rounded-lg shadow-md">
      {/* {user.profile} */}
      <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-8 xl:py-4">
        <div className="profile-pic">
          {/* <FaUserCircle size={60} /> */}
          <div className="relative flex border border-amber-500 rounded-full overflow-hidden items-center justify-center aspect-square mx-auto md:size-36 size-20 group">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full mx-auto"
            />
            <label
              htmlFor="profileImageInput"
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              Edit
              {/* <FiEdit className="text-xl md:text-3xl text-gray-500 rounded-full p-1 bg-white hover:text-gray-800" /> */}
            </label>
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChangeProfile}
            />
          </div>
          <div className="flex items-center justify-center mt-4 gap-2 socials">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <FaLinkedin size={20} />
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <FaGithub size={20} />
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <SiLeetcode size={20} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:mt-0">
            <p className="uppercase font-bold text-lg text-center lg:text-left">
              {userInfo.first_name + " " + userInfo.last_name || "John Doe"}
            </p>

            <div className="xl:grid xl:grid-cols-2 xl:gap-4 mt-2">
              <div className="flex items-center gap-2 text-sm my-1">
                <FiMail />
                <p>{userInfo.email}</p>
              </div>
              <div className="flex items-center gap-2 text-sm my-1">
                <FiPhone />
                <p>{userInfo.mobile_number}</p>
              </div>
              <div className="flex items-center gap-2 text-sm my-1">
                <FaUniversity />
                <p>College</p>
                <p>{userInfo.college}</p>
              </div>
              <div className="flex items-center gap-2 text-sm my-1">
                <FiCalendar />
                <p>01/01/0000</p>
                {/* <p>{userInfo.dob}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
