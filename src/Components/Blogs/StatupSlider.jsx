import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import y2 from "../../assets/Blogs/y2.jpg";
import e1 from "../../assets/Blogs/e1.jpg";
import g1 from "../../assets/Blogs/g1.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

const blog_slider = [
  {
    info: "May 23, 2022 • 25 mins read",
    text: "The digital youth: social media, digital marketing on youth",
    titleColor: "blue-500",
    imgSrc: y2,
    title: "young jang",
    des: "The influence of digital marketing and social media on today's age is Lunatic. In",
    category: "Digital Marketing",
  },
  {
    info: "Apr 23, 2018 • 55 mins read",
    text: "Enhancing your graphics skill : Free and paid resources",
    titleColor: "blue-500",
    imgSrc: e1,
    title: "young jang",
    des: "This intensive program is your gateway to mastering the art of visual storytelling. ",
    category: "Self-Improvement",
  },
  {
    info: "Apr 23, 2018 • 55 mins read",
    text: "Graphic Design and AI: The Future of Graphic Designers",
    titleColor: "blue-500",
    imgSrc: g1,
    title: "young jang",
    des: "AI enhances graphic design by leveraging algorithms to improve the design process and effectiveness.",
    category: "Educational",
  },
  {
    info: "May 23, 2022 • 25 mins read",
    text: "The digital youth: social media, digital marketing on youth",
    titleColor: "blue-500",
    imgSrc: y2,
    title: "young jang",
    des: "The influence of digital marketing and social media on today's age is Lunatic. In",
    category: "Digital Marketing",
  },
];
export const StatupSlider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      ".b4",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "back.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".bdiv4",
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
    <div className='my-12 bdiv4'>
      <div>
        {" "}
        <h1 className='b4 m-6 text-3xl font-bold text-center'>Featured Blogs</h1>
      </div>
      <div className='mb-6 md:px-10 b4'>
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
          className="b3 w-full m-auto p-6  rounded-lg  flex flex-col justify-center items-center gap-4"
        >
          {blog_slider?.map((item, i) => {
            return (
              <SwiperSlide
                className=' p-4 cursor-pointer hover:shadow-indigo-400 hover:shadow-md duration-200 hover:scale-105 dark:bg-zinc-900 bg-zinc-100 rounded-md  flex flex-col justify-center items-center gap-4'
                key={item.id}
              >
                <Link to={`/Blogdetail/${i}`}>
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={item.imgSrc}
                      alt={`${item.title}`}
                    />
                    {/* Button positioned over the image */}
                    <button
                      type="button"
                      className="absolute bottom-2 left-3 dark:bg-slate-300  bg-slate-400 transition-all text-black text-xs font-medium rounded-lg p-2"
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
