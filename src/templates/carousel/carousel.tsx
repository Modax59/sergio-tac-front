import React, { Component } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../public/assets/images/1.png';
import img2 from '../../../public/assets/images/2.png';
import img3 from '../../../public/assets/images/3.png';

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img src={img1.src} alt="image1" />
          </div>
          <div>
            <img src={img2.src} alt="image2" />
          </div>
          <div>
            <img src={img3.src} alt="image3" />
          </div>
        </Carousel>
      </div>
    );
  }
}
