import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import ReactIdSwiper from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { Swiper, Mousewheel, Keyboard, EffectFade} from 'swiper/dist/js/swiper.esm.js';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

const CSlider = (props) => {
    const params = {
      Swiper,
      modules: [Mousewheel, Keyboard, EffectFade],
      direction: 'vertical',
      speed: 1000,
      effect: 'fade',
      mousewheel: false,
      keyboard: true,
      spaceBetween: 0,
      on: {
      	slideChange: function() {
      		console.log('slide change')
      		   
      	}
      }
    }
    const items = props.data;
       
    return (
      <ReactIdSwiper {...params}>
      	{items.images.map((item, index) => (
            <div className='slide' key={index}>
              <Img fluid={item.fluid} />
              <Fade bottom delay={500}>
                <div className="slide__content">
                  <h2 className="slide__content__title">{item.title}</h2>
                </div>
              </Fade>
            </div>
          ))}
      </ReactIdSwiper>
    )
  };
export default CSlider
