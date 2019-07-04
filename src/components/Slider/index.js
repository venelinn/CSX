import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Arrow from'../../images/arrow.svg';

import ReactIdSwiper from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { Swiper, Navigation} from 'swiper/dist/js/swiper.esm.js';
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
    const params = {
      // Provide Swiper class as props
      Swiper,
      // Add modules you need
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 0
    }

    return (
      <div class="slider__root">
        <ReactIdSwiper {...params}>
          {items.images.map((item, index) => (
            <div className='slide' key={index}>
              <Img fluid={item.fluid} />
              <Fade bottom delay={500}>
                <div className="slide__content">
                  <h3 className="slide__content__title">{item.title}</h3>
                </div>
              </Fade>
            </div>
          ))}
        </ReactIdSwiper>
        <Slide delay={500} top>
          <div className="slide__arrow slide__arrow--top">
            <img src={Arrow} alt="CSX"/>
          </div>
        </Slide>
        <Slide delay={700} bottom>
          <div className="slide__arrow slide__arrow--bottom">
            <img src={Arrow} alt="CSX"/>
          </div>
        </Slide>
      </div>
    );
  }
}


export default Slider;
