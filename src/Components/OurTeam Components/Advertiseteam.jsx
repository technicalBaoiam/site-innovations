import React, { useState } from "react";
import { AdverseTeam } from "./teamData";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CommonComp from "./CommonComp";

export const Advertiseteam = () => {
  const [advTeam, setAdvTeam] = useState(AdverseTeam);
  return (
    <>
      <CommonComp
        heading={"Our Experts"}
        // para={
        //   "Our advertising team blends bold creativity with smart strategy to connect with learners and highlight the true value of our educational solutions. By crafting innovative campaigns and leveraging data-driven insights, we reach the right audience at the right moment—sparking curiosity and inspiring them to take the next leap in their learning journey."
        // }
        dataArray={advTeam}
      />
    </>
  );
};
