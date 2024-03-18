'use client';
import React, { useEffect } from 'react';
import { Image } from "@nextui-org/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Swiper from 'swiper';
import './styles.css'



function CardEspecialidades () {
    useEffect(() => {
      const trandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
      return () => {
        trandingSlider.destroy();
      };
    }, []);
    
  
    return (
    <section id="tranding">
        <div className="container">
          <h3 className="text-center section-subheading">- popular Delivery -</h3>
          <h1 className="text-center section-heading">Tranding food</h1>
        </div>


        <div className="container">
          <div className="swiper tranding-slider">
            <div className="swiper-wrapper">
            
            {/*ARRANCA CARD GESTION*/}
            <div className="swiper-slide tranding-slide">
                
                <div className="tranding-slide-img">
                    <Image/>
                </div>
                
                <div className="tranding-slide-content">
                    <h1 className="food-price">$20</h1>
                    <div className="tranding-slide-content-bottom">
                        <h2 className="food-name">
                            Special Pizza
                        </h2>
                        <h3 className="food-rating">
                            <span>4.5</span>
                        </h3>
                    </div>
                </div>
              
            </div>
            {/*CIERRA CARD*/}

            </div>
            </div>


            <div className="tranding-slider-control">
              <div className="swiper-button-prev slider-arrow">
                <FaArrowLeft/>
              </div>
              <div className="swiper-button-next slider-arrow">
                <FaArrowRight/>    
              </div>
              <div className="swiper-pagination"></div>
            </div>
        </div>
    </section>

    );
  }
  
export default CardEspecialidades;
