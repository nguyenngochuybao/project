import { Carousel } from 'antd';
import slide1 from '../../../images/slide-1.jpg'
import slide2 from '../../../images/slide-3.jpg'
import slide3 from '../../../images/slide.jpg'

import React, { Component } from "react";
import Slider from "react-slick";

import './style.css'

const contentStyle = {
  height: '550px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'white',
  margin: '0px'
};


function CarouselImg() {
    return (
        <>
           <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img className='slide-img' src={ slide1 } />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img className='slide-img' src={ slide2 } />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img className='slide-img' src={ slide3 } />
              </h3>
            </div>
            </Carousel>
        </>
  );
}

export default CarouselImg;
