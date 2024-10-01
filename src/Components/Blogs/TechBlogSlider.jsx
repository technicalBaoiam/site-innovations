import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import b1 from "../../assets/Blogs/b9.png";
import b12 from "../../assets/Blogs/b12.png";
import b14 from "../../assets/Blogs/b14.png";
import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const blog_slider = [
  {
    info: "Dec 13, 2023 • 25 mins read",
    text: "A Complete Guide to Graphic Designing",
    titleColor: "blue-500",
    imgSrc: b1,
    title: "charlie Clarke",
    des: "Graphic design is a diverse field that provides several employment opportunities. ",
    category: "Science",
  },
  {
    info: "Dec 23, 2020 • 25 mins read",
    text: "How To Become a Graphic Designer: A Complete Guide",
    titleColor: "blue-500",
    imgSrc: b12,
    title: "Johe Dohn",
    des: "It helps you to communicate your ideas, messages, and emotions through images, typography, and layout.",
    category: "Entrepreneurship",
  },
  {
    info: "May 23, 2022 • 25 mins read",
    text: "Bridging the Gap Between Education and Employment",
    titleColor: "blue-500",
    imgSrc: b14,
    title: "Yunus Khan",
    des: "These students did not have the opportunity to face reality and had no evidence to present themselves to the employers. ",
    category: "Finance",
  },
  {
    info: "Dec 13, 2023 • 25 mins read",
    text: "A Complete Guide to Graphic Designing",
    titleColor: "blue-500",
    imgSrc: b1,
    title: "charlie Clarke",
    des: "Graphic design is a diverse field that provides several employment opportunities. ",
    category: "Science",
  },
];
export const TechBlogSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".b5",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".bdiv5",
          start: "top 90%",
          end: "bottom 80%",
        },
      }
    );
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='my-14 bdiv5'>
      <div>
        {" "}
        <h1 className='m-6 b5 text-3xl font-bold text-center'>Recent Blogs</h1>
      </div>
      <div className='mb-6 md:px-10 b5'>
        <Swiper
          keyboard={{
            enabled: true,
          }}
          ref={swiperRef}
          navigation={true}
          Scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          // onSlideChange={() => console.log("hi")}
          // onSwiper={(swiper) => console.log("")}
          className="b4 w-full  p-6  m-auto rounded-lg  flex flex-col justify-center items-center gap-4"
        >
          {blog_slider?.map((item, i) => {
            return (
              <SwiperSlide
                className="p-4 cursor-pointer hover:shadow-indigo-400 hover:shadow-md duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-100 rounded-md  flex flex-col justify-center items-center gap-4"
                key={item.id}
              >
                <Link to={`/Blog-detail/${i}`}>
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={item.imgSrc}
                      alt={`${item.title}`}
                    />
                    {/* Button positioned over the image */}
                    <button
                      type="button"
                      className="absolute bottom-2 left-3 dark:bg-slate-300 bg-slate-400 transition-all text-black text-xs font-medium rounded-lg p-2"
                    >
                      {item.category}
                    </button>
                  </div>
                  <div className="p-4 flex-grow ">
                    <h2 className="text-lg font-bold my-2">{item.text}</h2>
                    <span
                      className="text-sm text-slate-700 dark:text-slate-300 font-semibold"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2, // Limit to 2 lines
                      }}
                    >
                      {item.des}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-2">
                      {item.info}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          {/* Swiper navigation buttons */}
          <div
            className="swiper-button-prev bg-gray-800 p-2 rounded-full"
            onClick={handlePrev}
          ></div>
          <div
            className="swiper-button-next bg-gray-800 p-2 rounded-full"
            onClick={handleNext}
          ></div>
        </Swiper>
      </div>
    </div>
  );
};
