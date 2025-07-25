// src/components/sections/HeroSection.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  { id: 1, image: '/assets/images/templo-lleno-1.jpg', alt: 'Templo de MJA lleno de gente adorando' },
  { id: 2, image: '/assets/images/pastores-predicando.jpg', alt: 'Pastores generales predicando en el altar' },
  { id: 3, image: '/assets/images/templo-lleno-2.jpg', alt: 'Vista panorámica del templo de MJA' },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, A11y]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        a11y={{ enabled: true }}
        className="absolute inset-0 w-full h-full z-0"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center brightness-[0.45] saturate-125"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Filtro oscuro sobre las imágenes */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 px-4 sm:px-6 text-center text-white max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight drop-shadow-lg"
        >
          MJA{' '}
          <span className="text-mja-primary animate-glow">
            Tu Casa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl italic mt-4 font-body drop-shadow-md"
        >
          Casa de Generaciones
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mt-6 font-body max-w-xl mx-auto drop-shadow-sm"
        >
          Un lugar donde cada vida es transformada por el amor de Jesús.
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
