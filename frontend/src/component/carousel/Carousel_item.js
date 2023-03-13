import React from 'react';
import { Carousel } from 'antd';
import { useMediaQuery } from 'react-responsive';
import './carousel_item.css';

const contentStyle_Mobile = {
  margin: 0,
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const contentStyle_Computer = {
  margin: 0,
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carouselitem = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      {isTabletOrMobile && (
        <div>
          <Carousel afterChange={onChange}>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Mobile}
              />
            </div>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Mobile}
              />
            </div>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Mobile}
              />
            </div>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Mobile}
              />
            </div>
          </Carousel>
        </div>
      )}

      {isDesktopOrLaptop && (
        <div className="container">
          <Carousel afterChange={onChange}>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Computer}
              />
            </div>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Computer}
              />
            </div>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Computer}
              />
            </div>
            <div>
              <img
                src="/images/caro.jpg"
                alt="carousel"
                style={contentStyle_Computer}
              />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Carouselitem;
