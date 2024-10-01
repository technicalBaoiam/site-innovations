import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { School } from "../../Data";
// import { courseCategories } from "../../assets/swiper-imgs/categories";
import {categories} from "../../assets/swiper-imgs/categories"; // Import JSON data
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedCourses } from '../../Redux/slices/courseSlice'; // Adjust the import path as necessary
import { BeatLoader } from "react-spinners";
import gsap from "gsap";


export default function SliderSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Category1");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categoryKeys = Object.keys(categories);
  // console.log(categoryKeys, 'category keys')

  useEffect(() => {
    if (categories[selectedCategory] === undefined) {
      setSelectedCategory(categoryKeys[0]); // Fallback to the first category if the current category is undefined
    }
    // console.log(categories,'cate')
    
    if (currentIndex >= categories[selectedCategory]?.length) {
      const nextCategoryIndex =
        (categoryKeys.indexOf(selectedCategory) + 1) % categoryKeys.length;
      setSelectedCategory(categoryKeys[nextCategoryIndex]);
      setCurrentIndex(0);
    }
  }, [currentIndex, selectedCategory]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };



  // redux start
  const dispatch = useDispatch();
  const { featuredCourses, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    // console.log("Component rendered, current status:", status);
    if(status==='idle'){
      dispatch(fetchFeaturedCourses());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return  <div className="flex justify-center items-center h-[90vh]">
                <BeatLoader color="#4F46E5" loading={true} size={15} />
           </div>;;
  }
  // console.log(featuredCourses, 'program courses')
  // redux end


useEffect(() => {

gsap.fromTo('.slide1',{
  opacity:0,
  y:30
},
{
  opacity:1,
  y:0,
  duration:0.6,
  ease:'power1.out',
  stagger:0.2,
  scrollTrigger:{
    trigger:'.sectiondiv2',
    start:'top 80%',
    end:'bottom 80%'
  }
})


},[])

  return (
    <div className="sectiondiv2 slider-section dark:bg-[#010203] w-full relative py-12 overflow-hidden ">
      <div className="text-center mb-0 lg:mb-8">
        <h2 className="slide1 text-4xl font-extrabold mb-8">Featured <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent" >Courses</span></h2>
      </div>

      <div className="slide1 mx-4 mt-8 md:mx-14">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0} // Adjust the space between cards
          slidesPerView={1} // Default number of slides per view
          dot={false}
          // loop={true} // Enables loop mode for continuous sliding
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="swiper-container lg:px-6"
          onSlideChange={handleSlideChange}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            740: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
           {status === 'failed' ? categories[selectedCategory]?.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-[22.5rem] overflow-hidden dark:bg-white/20 dark:border shadow-md rounded-3xl m-2">
                <div className="relative h-[50%]">
                  <img
                    src={slide.banner || 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png'}
                    alt={slide.course}
                    className="w-full h-full object-cover"
                  />
                <div className="absolute top-3 left-4 flex">
                 
                    <span className="text-xs mr-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-3 py-1">
                      Premium
                    </span>
                    <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-3 py-1">
                      Plus
                    </span>
                </div>
                </div>
                <div className="pl-4 h-[45%] flex flex-col justify-between">
                  <div className="">
                    <h3 className="text-xl font-semibold my-2 text-nowrap">{slide.course || slide.courseName} </h3>
                    <p className="text-sm pr-3 text-slate-600">{slide.desc[0].slice(0, 80) + "..."}</p>
                    
                  </div>
                  <button
                    onClick={() => navigate(`/course/${slide.course}/`)}
                    className="bg-gradient-to-r w-fit mb-2 mt-1 rounded-md text-xs from-indigo-700 to-indigo-400 text-white px-4 py-1 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300"
                  >
                  View More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))
          :  featuredCourses?.map((slide, index) => (
            <SwiperSlide key={index}>
  <div className="h-[400px] max-h-[400px] overflow-hidden dark:bg-white/10 dark:border shadow-md rounded-3xl m-2 flex flex-col justify-between">
    {/* Image Container */}
    <div className="relative h-[50%]">
      <img
        src={slide.thumbnail_image}
        alt={slide.title}
        className="w-full h-full object-cover object-top rounded-t-3xl"
      />
      {/* Price and Duration in the same row */}
      <div className="absolute top-3 left-4 flex items-center space-x-3">
        <span className="text-xs bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg px-4 py-1">
          Premium
        </span>
        {/* Plus button */}
        <span className="bg-slate-200 text-gray-800 rounded-lg text-xs px-4 py-1">
          Plus
        </span>
      </div>
    </div>
    <div className="px-4 h-[45%] flex flex-col justify-between">
      {/* Title and Description */}
      <div className="">
        <h3 className="font-bold text-lg text-nowrap">{slide.title}</h3>
        <p className="text-sm pr-3 text-slate-600 dark:text-slate-200">
          {slide.description.slice(0, 98) + "..."}
        </p>
      </div>
      {/* View More Button */}
      <div className="self-end mb-6">
        <button
          onClick={() => navigate(`/course/${slide.title}/${slide.id}`)}
          className="bg-gradient-to-r w-fit rounded-md text-xs from-indigo-700 to-indigo-400 text-white px-4 py-2 font-semibold hover:bg-gradient-to-l transition-all ease-in-out duration-300"
        >
          View More
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>

          
          
          ))
           } 

         
        </Swiper>
      </div>

      {/* Custom Navigation Buttons Positioned on the Sliders */}
      <div className="absolute top-[60%] left-2 transform z-10">
        <button className="swiper-button-prev text-indigo-600 transition"></button>
      </div>
      <div className="absolute top-[60%] right-2 transform z-10">
        <button className="swiper-button-next text-indigo-500 transition"></button>
      </div>
    </div>
  );
}
