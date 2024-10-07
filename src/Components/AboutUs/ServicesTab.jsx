import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { Career, Perks, Review, Service } from "../../assets/assets";
import gsap from "gsap";

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState("services");
  const renderContent = () => {

   
  useLayoutEffect(() => {

  let context = gsap.context(() => {

  gsap.fromTo('.ServicesTabanime', {
    opacity: 0,
    y: 30,
   
  },
    {
      opacity: 1,
     
      y: 0,
      duration: 0.6,
      ease: 'power1.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.ServicesTabdiv',
        start: 'top 80%',
        end: 'bottom 80%'
      }
    })

})

return () => context.revert()

  })

    switch (activeTab) {
      case "services":
        return (
          <div className="p-4 ">
            <div className="container mx-auto ">
              <div className="text-start ">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Expand your{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    knowledge
                  </span>
                  , boost your{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    career
                  </span>
                </h1>
                <p className="text-gray-500 dark:text-gray-200">
                  we don't deliver promises, we believe in achievements.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Service}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Get Employed in International Firms
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Accelerating professional development with guidance from industry experts, driving impactful career outcomes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Top Tier Earning Packages
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Get a top tier salary package with our right guidance and secure a great lifestyle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Contest Champions
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Encouraging learners to participate in competitions, get rewarded by us, and boosting confidence to excel in cutting-edge challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Proficient Expert
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Achieve professional development with our top mentorship from industry experts and drive major impact and career results.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="p-4">
            <div className="container mx-auto">
              <div className="text-start">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
                  Ignite your  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    professional path
                  </span>, aim for {" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    highest achievements
                  </span>
                </h1>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Baoiam offers interactive session with live experts class mock test and real time projects and targeted feedback
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%] ">
                  <img
                    src={Career}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg "
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Interactive Session
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Encouraging learners through highly interactive sessions with experts, creating a comfortable environment that drives engagement and knowledge transfer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Doubts Clearing Session
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Clear every doubt with engaging doubts clearing session led by professional, fostering clarity and boosting confidence
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        How to Crack Interview
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Crack every interview on your path to success with our expert guidance, and secure a top position in your dream company
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Workshops and Intern Experience
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Gain valuable work experience with our diving internships and accurate your career development through immersive workshops
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );

      case "perks":
        return (
          <div className="p-4">
            <div className="container mx-auto">
              <div className="text-start">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
                  Uplift and {" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    secure organizational
                  </span>{" "}
                  identity
                </h1>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Baoiam offers various perks to boost students and learners overall learning and satisfaction, common benefits include total academic and career support, placements assistance etc.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Perks}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Total Academic and Career Support
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        We're here to support you at every stage offering comprehensive assistance for both academic and career growth
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        One-on-one Sessions with Experts
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Receive personalized one on one sessions with top exports for tailored guidance and valuable insights.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Interactive Dissection Session
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Participate in group discussions that enhance your learning and foster meaningful exchanges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Contests and Tech Competitions
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Participate in various contests and tech competitions to showcase and test your skills gaining valuable recognition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="p-4">
            <div className="container mx-auto">
              <div className="text-start">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 dark:text-white">
                  Broaden your {" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    skills
                  </span>{" "}
                  with our{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    advanced
                  </span>{" "}
                  services.
                </h2>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  Our highly qualitative services include professional counseling, mentoring, guidance, building connections etc.
                </p>
              </div>

              {/* Content Section */}
              <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 sm:mt-8 ">
                <div className="flex justify-center w-full lg:w-[30%]">
                  <img
                    src={Review}
                    alt="Service"
                    className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover shadow-none sm:shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[60%] gap-6">
                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Professional Counseling
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Get top notch counseling from leading professionals to drive your career growth and achieve your goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Mentoring
                      </div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        Receive expert advice tailored to your domain and make a lasting impact on your career
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Guidance
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Gain valuable insights to create a clear career roadmap and reach your destination safely with our guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <SiTicktick className="text-indigo-600 text-8xl pb-16 " />
                    <div>
                      <div className="text-lg font-bold text-gray-800 mb-2 dark:text-gray-200">
                        Encouragement
                      </div>
                      <p className="text-gray-500 text-sm dark:text-gray-400">
                        Motivation is key, but encouragement makes it possible to stay motivated. Cultivate a positive study spirit at every stage with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div>
      <div className="p-4 mx-4 sm:mx-10 ServicesTabdiv">
        <div className="ServicesTabanime flex flex-col mb-2 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <button
            className={`text-sm md:text-base font-bold ${activeTab === "services"
              ? "text-indigo-600 underline dark:text-indigo-400"
              : "text-blue-950 dark:text-white"
              }`}
            onClick={() => setActiveTab("services")}
          >
            What we provide
          </button>
          <button
            className={`text-sm md:text-base font-bold ${activeTab === "features"
              ? "text-indigo-600 underline dark:text-indigo-400"
              : "text-blue-950 dark:text-white"
              }`}
            onClick={() => setActiveTab("features")}
          >
            Our unique elements
          </button>
          <button
            className={`text-sm md:text-base font-bold ${activeTab === "perks"
              ? "text-indigo-600 underline dark:text-indigo-400"
              : "text-blue-950 dark:text-white"
              }`}
            onClick={() => setActiveTab("perks")}
          >
            Rewards
          </button>
          <button
            className={`text-sm md:text-base font-bold ${activeTab === "reviews"
              ? "text-indigo-600 underline dark:text-indigo-400"
              : "text-blue-950 dark:text-white"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Highlights of top appraisals
          </button>
        </div>

        {/* Render content based on selected tab */}
        <div className="ServicesTabanime">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ServicesTab;
