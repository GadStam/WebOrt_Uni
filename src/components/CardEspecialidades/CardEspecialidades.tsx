'use client';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'; 
import SwiperCore, { FreeMode, Pagination, Navigation } from 'swiper/modules'; 
import {RxArrowTopRight} from 'react-icons/rx';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import {InfoEspecialidades} from '../../constants/index'; 

import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/free-mode'; 


export const CardEspecialidades = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-[#F3F3F3]'>
      <h1 className='font-semibold text-black text-4xl lg:text-5xl pb-8'>Especialidades</h1>

      <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2, 
          spaceBetween: 25
        }, 
        700: {
          slidesPerView: 3, 
          spaceBetween: 100, 
        }
      }}

      freeMode={true}
      pagination={{
        clickable: true
      }}

      modules={[FreeMode, Pagination]}
      className='max-w-[90%] lg:max-w-[90%]'
      >

        {InfoEspecialidades.map((item) => (
          <SwiperSlide key={item.title}>
            <div className='flex flex-col rounded-xl overflow-hidden gap-10 mb-20 group relative shadow-lg text-white px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
              
              <div
                className='absolute inset-0 bg-cover bg-center'
                style={{backgroundImage: `url(${item.backgroundImage})`}}
              />

              <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>

              <div className='relative flex flex-col gap-3'>
                <h1 className='text-xl lg:text-2xl'>{item.title}</h1>
              </div>

              <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100'/>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}
