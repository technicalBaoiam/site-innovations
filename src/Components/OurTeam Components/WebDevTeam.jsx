import { useState } from "react";
import { Leaderteam1 } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CommonComp from "./CommonComp";

export const WebDevTeam = () => {
  const [webData, SetWebData] = useState(Leaderteam1);

  return (
    <>
      <CommonComp
        heading={"Meet Our Team"}
        // para={
        //   "Our web development team powers BAOIAM’s digital landscape with innovation and expertise. They excel at turning complex challenges into intuitive, user-centric solutions, ensuring a seamless online experience. Discover the talented individuals who build and elevate our digital platforms."
        // }
        dataArray={webData}
      />
    </>
  );
};
