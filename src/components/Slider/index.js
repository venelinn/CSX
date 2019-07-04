import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import ReactIdSwiper from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/dist/js/swiper.esm.js';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import './slider.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
    };
  }

  render() {
    const items = this.props.data;
    console.log(items);
    const params = {
      // Provide Swiper class as props
      Swiper,
      // Add modules you need
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return (
      <>
        <div className='portfolio-content'>
          <ReactIdSwiper {...params}>
            {items.images.map((item, index) => (
              <div className='slide' key={index}>
                <Img fluid={item.fluid} />
                <Fade bottom>
                  <div className="slide__content">
                    <h3>{item.title}</h3>
                  </div>
                </Fade>
              </div>
            ))}
          </ReactIdSwiper>
        </div>
      </>
    );
  }
}


export default Slider;
