import React, { useState, useEffect, useRef } from 'react';
// Import necessary dependencies from React Slick
import Slider from 'react-slick';
import NextArrow from '../component/NextArrow';
import PreArrow from '../component/PreArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/slide.css';
// Import components from Material UI
import Card from '@mui/material/Card';

// Import Slide Component
import Slide1 from '../component/slides/Slide1.js';
import Slide2 from '../component/slides/Slide2.js';
import Slide3 from '../component/slides/Slide3.js';
import Slide4 from '../component/slides/Slide4.js';
import Slide5 from '../component/slides/Slide5.js';
import Slide6 from '../component/slides/Slide6.js';
import Slide7 from '../component/slides/Slide7.js';
import Slide8 from '../component/slides/Slide8.js';
import Slide9 from '../component/slides/Slide9.js';
import Slide10 from '../component/slides/Slide10.js';
import Slide11 from '../component/slides/Slide11.js';
import Slide12 from '../component/slides/Slide12.js';



const Slide = () => {
  let settings = {
    dots: true,
    infinite: false,
    lazyLoad: true,
    swipe: false,
    speed: 0,
    // fade: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          fade: true
        }
      }
    ]
  };

  // let slider = 1;
  let slider = useRef();

  let next = () => {
    slider.slickNext();
    // slider.innerSlider.state.currentSlide
  }
  let previous = () => {
    slider.slickPrev();
  }

  window.addEventListener('resize', (e)=>{
    if(e.target.outerWidth >= 1280){
      slider.innerSlider.state.currentSlide%2 === 0 ? slider.slickGoTo(slider.innerSlider.state.currentSlide) : slider.slickGoTo(slider.innerSlider.state.currentSlide-1);
    }
  });

  return (
    <section id='slide-container'>
      <Slider ref={c => (slider = c)} {...settings}>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
      </Slider>
      <div className='arrow-container'>
        <PreArrow onClick = {previous} disabled={false} className='prev arrow-btn' />
        <NextArrow onClick = {next} disabled={false} className='next arrow-btn' />
      </div>
    </section>
  );
}

export default Slide;