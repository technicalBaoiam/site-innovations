import { useState } from "react";
import { Leaderteam } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CommonComp from "./CommonComp";

export const LeadershipTeam = () => {
  const [teamData, setTeamData] = useState(Leaderteam);
  console.log(teamData);

  return (
    <>
      <CommonComp
        heading={"Our leaders"}
        // para={
        //   "Our leadership team is committed to revolutionizing learning and equipping individuals with the skills needed to excel in today’s dynamic world. Through innovative technology and personalized solutions, we’re making education more accessible, engaging, and impactful, helping learners reach their fullest potential and confidently shape their futures."
        // }
        dataArray={teamData}
      />
    </>
  );
};
