import Carousel from 'react-bootstrap/Carousel';

import React from 'react';

function CategorySlider() {
  return (
    <div className='maincrouser  '>
      <div className='innercraouser '>
        <Carousel>
          <Carousel.Item>
            <img src='/Untitled design.png' alt='' className='craouseimg' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/Untitled design.png' alt='' className='craouseimg' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/Untitled design.png' alt='' className='craouseimg' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/Untitled design.png' alt='' className='craouseimg' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CategorySlider;
