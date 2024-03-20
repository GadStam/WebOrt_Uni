"use client";
import React from 'react'
import './styles2020.css'
import {Swiper, SwiperSlide} from "swiper/react"; 
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


import 'swiper/css'; 
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 

export const CardSegunda = () => {
  return (
    <div className="container2020">
      <h1 className="heading">Especialidades</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        <SwiperSlide>
          <img src= "/images/ImagenGestion.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ImagenInfo.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenConstru.webp' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src='/images/ImagenQuimica.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenMusica.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenMeca.webp' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenDiseño.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenMedios.jpg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenTIC.webp' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/ImagenHuman.png' alt="slide_image" />
        </SwiperSlide>
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft className='h-2 w-3'/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowRight/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
