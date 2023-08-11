import React from 'react';
import { Carousel } from 'antd';
import sliderImg from "../../../assets/images/slider/1.jpg"
import sliderImg2 from "../../../assets/images/slider/1.jpg"
import sliderImg3 from "../../../assets/images/slider/1.jpg"
const contentStyle = {
  height: '600px',
  color: '#fff',
  textAlign: 'center',
  
};
const HomeSlider = () => (
  <Carousel autoplay>
    <div>
      <div className='sliderImg' style={contentStyle}>
            <img src={sliderImg} alt="" />
        </div>
    </div>
    <div>
      <div className='sliderImg' style={contentStyle}>
            <img src={sliderImg2} alt="" />
        </div>
    </div>
    <div>
      <div className='sliderImg' style={contentStyle}>
            <img src={sliderImg3} alt="" />
        </div>
    </div>
  </Carousel>
);
export default HomeSlider;