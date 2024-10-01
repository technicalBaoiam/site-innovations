import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

// Import JSON data
import cards from './cards.json';
import swiperSettings from './SwiperSettings.json';
import { ArtCraft, Creativewriting, CriticalThinking, EnglishPublic, EntrepreneurshipInnovation, FinanceEducation, LifeSkills, PhotographyEditing, SocialMedia, TechnologyDevelopment } from '../../assets/assets';

export default function App() {
  const slider = [ArtCraft, Creativewriting, CriticalThinking, EnglishPublic, EntrepreneurshipInnovation, FinanceEducation, LifeSkills, PhotographyEditing, SocialMedia, TechnologyDevelopment]
  return (
    
      <Swiper
        effect={swiperSettings.effect}
        grabCursor={swiperSettings.grabCursor}
        modules={[EffectCards, Autoplay]}
        autoplay={swiperSettings.autoplay}
        className={`w-72 h-80 md:w-1/2 overflow-hidden`}
      >
        {slider.map((card, index) => (
          <SwiperSlide
            key={index}
            className=" w-full h-full flex items-center justify-center rounded-xl overflow-hidden text-white"
            style={{ height:'100%' ,width:'100%',
              backgroundImage: card ? `url(${card})` : 'none',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    
  );
}

