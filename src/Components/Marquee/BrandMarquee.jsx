import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import gsap from 'gsap'

const BrandMarquee = ({array}) => {
    const arrayDoubled=[...array,...array,...array,...array];


useEffect(() => {

gsap.fromTo('.marq',{opacity:0,y:30},{
    opacity:1,
    y:0,
    duration:1,
    ease:'back.inOut',
    scrollTrigger:{
        trigger:'.marqdiv1',
        start:'top 90%',
        end:'bottom 90%'
    }
})

},[])



    return (
        <div className="marqdiv1 marq flex w-11/12 my-4 mx-auto">

        <Marquee speed={100} className='flex gap-4'>{
            arrayDoubled.map((item, index) => (
                <div key={index} className="flex-shrink-0 mx-8 h-fit w-16 md:w-28">
                    <img
                        src={item}
                        alt={`Image `}
                        className=" mx-auto bg-white rounded-full p-2 object-cover"
                        />
                </div>
            ))
        }</Marquee>
        </div>
    )
}

export default BrandMarquee