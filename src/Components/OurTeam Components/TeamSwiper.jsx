import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { swiperData } from "./teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";

export const TeamSwiper = () => {
  const [data, setData] = useState(swiperData);


  useEffect(() => {

    gsap.fromTo('.t2', { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.tdiv1',
          start: 'top 90%',
          end: 'bottom 80%'
        }
      }
    )



  }, [])

  return (
    <>
      <div className="tdiv1 t2 text-center text-3xl md:text-4xl p-6 py-6 tracking-wide leading-4 font-bold">
        Our <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">
          Leaders
        </span>
      </div>
      <div className="hidden p-6  md:grid h-full w-full items-center justify-around grid-cols-3 lg:grid-cols-4 gap-7 gap-y-14">
        {swiperData.slice(0, 8).map((el) => {
          return (
            <div className="group h-80 bg-slate-100 rounded-2xl w-64 flip-card overflow-hidden">
              <div className="flip-card-inner rounded-2xl">
                {/* Front Side (Image) */}
                <div className="t2 flip-card-front rounded-2xl mx-auto">
                  <img
                    className="h-full w-full rounded-2xl mx-auto object-cover"
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s"}
                    alt={el.name}
                  />
                </div>

                {/* Back Side (Details) */}
                <div className="flip-card-back bg-black/50 bg-opacity-80 rounded-2xl text-white flex flex-col justify-center items-center">
                  <img
                    className="h-full rounded-2xl absolute w-80 sm:w-96 mx-auto object-cover"
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoEAMYKHiwI5JH_IlxayW3-9UurHlASFy9A&s"}
                    alt={el.name}
                  />
                  <div className="absolute w-full rounded-2xl h-full hover:opacity-100 backdrop-blur-md dark:bg-black/80 bg-slate/80"></div>
                  <h3 className="text-center text-zinc-600 z-10 font-sans font-medium text-sm md:text-lg">Comming Soon ! </h3>
                  {/* <h3 className="text-center z-10 font-sans font-medium text-sm md:text-lg">
                    {el.name}
                  </h3>
                  <p className="text-center z-10 text-white font-bold text-xs md:text-sm">
                    {el.role}
                  </p>
                  <div className="py-2 flex z-10 items-center justify-center gap-2">
                    <FaLinkedin className="text-blue-600 text-xl" />
                    <FaXTwitter className="text-white" />
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div >

      <div className="p-6 md:hidden">
        <Swiper
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            425: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("hi")}
          onSwiper={(swiper) => console.log("")}
          className="h-72 md:h-[350px] w-full md:w-[90%] m-auto rounded-lg  flex flex-col justify-center items-center gap-4"
        >
          {data?.map((el) => {
            return (
              <SwiperSlide
                className="relative cursor-pointer hover:shadow-indigo-400 hover:shadow-lg duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-200 rounded-md h-full w-[180px] md:h-[330px] md:w-[130px] flex flex-col justify-center items-center gap-4 "
                key={el.id}
              >
                <img
                  className="h-full rounded-md object-cover w-full"
                  src={el.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 hover:backdrop-blur-md  flex flex-col justify-center items-center transition-opacity duration-300 rounded-md">
                  <h3 className="text-center text-white font-sans font-medium text-sm md:text-lg">comming soon
                    {el.name}
                  </h3>
                  <p className="text-center text-gray-300 text-xs md:text-sm">
                    {el.role}
                  </p>
                  <div className=" py-2 flex items-center justify-center gap-2">
                    <FaLinkedin className="text-blue-600 text-xl text-center" />
                    <FaXTwitter className="text-black font-bold" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
