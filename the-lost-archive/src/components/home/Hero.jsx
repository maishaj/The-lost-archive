"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image'; // Import Next.js Image component
import slide1Img from '../../../public/assets/lost-archivebg1.jpg';
import slide2Img from '../../../public/assets/lost-archivebg2.jpg';
import slide3Img from '../../../public/assets/lost-archivebg3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const Hero = () => {
  const slides = [
    {
      id: 1,
      headline: "Unearth Forgotten Histories",
      subtitle: "Journey through the digital vaults of the Lost Archive to discover stories time has left behind.",
      cta: "Explore the Vault",
      image: slide1Img
    },
    {
      id: 2,
      headline: "The Anatomy of the Past",
      subtitle: "A curated collection of primary sources, rare manuscripts, and echoes from the 18th century.",
      cta: "Read the Chronicles",
      image: slide2Img
    },
    {
    id: 3,
    headline: "Echoes in the Ink",
    subtitle: "Deciphering the handwritten secrets of the 18th century. Where every blot of ink tells a forgotten story.",
    cta: "Consult the Records",
    image: slide3Img
    }
  ];

  return (
    <div className="w-full h-[85vh] min-h-[600px] relative overflow-hidden bg-stone-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              
              <div className="absolute inset-0 z-0">
                <Image 
                  src={slide.image} 
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
               
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
              </div>

              {/* Content Section */}
              <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto backdrop-blur-sm bg-stone-900/40 p-10 md:p-16 rounded-xl border border-white/10 shadow-2xl">
                  {/* Headline with Libre Baskerville feel */}
                  <h1 className="text-3xl md:text-5xl font-serif text-stone-50 mb-6 leading-tight tracking-tight">
                    {slide.headline}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-stone-200 mb-10 font-light italic">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap justify-center gap-6">
                    <Link href={"/ExploreArticles"}>
                      <button className="btn btn-outline text-white border-white rounded-none hover:bg-white hover:text-black">
                      {slide.cta}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global CSS for the Antique Aesthetic */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: rgba(255, 255, 255, 0.6) !important;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: white !important;
          transform: scale(1.1);
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #d4d4d8 !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Hero;