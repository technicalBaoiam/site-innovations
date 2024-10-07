import { useEffect } from "react";
import { Advertiseteam } from "../Components/OurTeam Components/Advertiseteam";
import { LeadershipTeam } from "../Components/OurTeam Components/LeadershipTeam";
import { TeamSwiper } from "../Components/OurTeam Components/TeamSwiper";
import { WebDevTeam } from "../Components/OurTeam Components/WebDevTeam";
import JoinUs from "../Components/OurTeam Components/JoinUs";
import gsap from 'gsap'

export const OurTeam = () => {
  document.title = "Baoiam Innovations | Our Team"


  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.t1', {
      opacity: 0,
      y: 40
    },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.2,
      })


  }, []);

  return (


    <div>
      <div className=" w-11/12 pb-12 mx-auto flex flex-col gap-4">
        <div className="">
          <h1 className="t1 p-6 text-center text-4xl md:text-5xl font-extrabold">
            A glance to <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent"> our team</span>

          </h1>
          <div className=" overflow-hidden w-[80%] lg:w-[70%] mx-auto">
            <p className="t1 text-md text-center md:text-xl">
              At BAOIAM, our team drives our vision with passion, creativity, and
              expertise. From strategic thinkers to hands-on innovators, we are a
              diverse group committed to shaping the future of education and
              empowering students globally. Meet the dedicated teams working
              tirelessly to shape the future of education and empower students
              worldwide.
            </p>
          </div>
        </div>
        <div className="my-6">
          <TeamSwiper />
        </div>
        <div className="flex flex-col divide-y divi divide-double gap-8">
          <WebDevTeam />
          <LeadershipTeam />
          <Advertiseteam />
        </div>
      </div>
      <JoinUs />
    </div>
  );
};