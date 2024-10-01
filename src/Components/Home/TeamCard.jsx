import React from 'react'
import { swiperData } from '../OurTeam Components/teamData'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img from './../../assets/Home/default_user.png'
import {
    Autoplay,
    Pagination,
    Navigation,
    Keyboard,
    Scrollbar,
} from "swiper/modules";

const TeamCard = () => {
    return (
        <div>
            <div className="sec5 text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold">
                Our <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Team</span>
            </div>
            <Swiper
                keyboard={{ enabled: true }}
                navigation={true}
                scrollbar={{ draggable: true }}
                modules={[Keyboard, Pagination, Navigation, Scrollbar]}
                spaceBetween={24}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className=""
            >
                {swiperData.map((el, i) => {
                    return <SwiperSlide key={i} className="flex justify-center items-center dark:bg-black group">
                        <div className=" bg-white dark:bg-white/10 p-2 rounded-3xl shadow-lg border dark:border-white">

                            {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-[65%] w-[60%] transition-all duration-500 group-hover:top-[-50px] group-hover:h-32 group-hover:w-32"> */}
                            <div className="w-[90%]">

                                <img
                                    className="object-cover w-full h-full"
                                    src={img}
                                    alt={el.name}
                                />

                                <div className="text-center mt-4 transition-all duration-500">
                                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">{el.name}</h2>
                                    <h3 className=" text-gray-600 dark:text-gray-200 text-nowrap mt-2">{el.role}</h3>
                                </div>
                            </div>

                            {/* <div className="absolute left-0 right-0 top-[60%] px-4">
                                <p className="text-gray-600 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-xs lg:text-sm">
                                     {el.desc}
                                </p>
                            </div> */}
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default TeamCard