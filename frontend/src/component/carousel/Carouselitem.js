import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carouselitem = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Carousel afterChange={onChange}>
        <div>
          <img src="/images/caro.jpg" alt="carousel" style={contentStyle} />
        </div>
        <div>
          <img src="/images/caro.jpg" alt="carousel" style={contentStyle} />
        </div>
        <div>
          <img src="/images/caro.jpg" alt="carousel" style={contentStyle} />
        </div>
        <div>
          <img src="/images/caro.jpg" alt="carousel" style={contentStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselitem;
