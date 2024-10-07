import React, { useEffect } from "react";
import { FaUsers, FaBuilding, FaChalkboardTeacher } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Component for individual milestone card
const MilestoneCard = ({ icon: Icon, description }) => (
  <div className="sec4 milestone-card w-60 justify-center shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200">
    <div className="bg-gradient-to-r from-pink-400 to-indigo-600 shadow-lg text-white rounded-full p-4 mb-4">
      <Icon className="text-3xl" />
    </div>
    <p className="font-semibold text-lg dark:text-slate-300 text-slate-600">
      {description}
    </p>
  </div>
);

const Timeline = () => {
  useEffect(() => {

    gsap.fromTo('.sec4',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.secdiv4',
          start: 'top 70%',
          end: 'bottom 80%'
        }
      }
    )

  }, []);

  return (
    <section className="pb-12">
      <div className="secdiv4 container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="w-full text-center timeline-heading">
            <h2 className="sec4 text-3xl md:text-4xl text-center mb-8 lg:mb-10 font-bold">
              The{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
          <p className="sec4 text-sm lg:text-base dark:text-slate-300 text-slate-500 max-w-3xl mx-auto timeline-heading">
            Founded in 2020, BAOIAM emerged from a bold vision to connect
            traditional education with real-world skills. Our founders, fueled
            by a deep passion for learning and a commitment to accessibility,
            set out to create a platform that empowers individuals to steer
            their own career journeys.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mx-auto justify-center items-center gap-10 md:gap-16">
          <MilestoneCard
            icon={FaUsers}
            description="Over 50,000 students enrolled worldwide."
          />
          <MilestoneCard
            icon={FaBuilding}
            description="Collaborations with leading companies."
          />
          <MilestoneCard
            icon={FaChalkboardTeacher}
            description="100+ industry experts as mentors."
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
