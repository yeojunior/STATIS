import React from 'react'
import './Header.css'
import food1 from "../../../Images/food1.jpg"
import Card_food from '../Card_food/Card_food'
import Footer from '../FOOTER/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay, EffectFade } from 'swiper/modules';
import Navbar from '../HEADER/Navbar/Navbar'

function Header() {
  return (
    <>
     <div>
     
        <Navbar/>

        <div className='home_title'>
            <h1>Discover our most exquisite dishes</h1>
        </div>

        <div className='search_bar'>
        <i  class="fas fa-search"></i>
            <input type='text' placeholder='Search '  />
            
        </div>

        <div className='menu'>
            <div className='plats'><h3>Nos Plats</h3></div>
            <div className='boisson'><h3>boisson</h3></div>
            <div className='dessert'><h3>Dessert</h3></div>
        </div>

        <div className='image2'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={food1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={food1} />
        </SwiperSlide>
      </Swiper>
            <p>Lycoris blue de retour au bonheur de vos papilles</p>
        </div>
     </div>
     <div>
        <Card_food/>
     </div>
     <div>   
     <Footer/>
     </div>
    </>
  )
}

export default Header


