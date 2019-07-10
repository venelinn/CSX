import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import handleViewport from 'react-in-viewport';
import Arrow from'../../images/arrow.svg';
import CSlider from'./Swiper';

import './slider.scss';

class SliderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
  }


  render() {
    const items = this.props.data;
    const { inViewport } = this.props;
    if(inViewport) {
      document.body.classList.add('slider__on');

      //this.fixedSlider()
    }
    return (
      <div className="slider__root">
        <CSlider data={items} />
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

const Slider = handleViewport(SliderSection, { rootMargin: '-1.0px', threshold: 0.99 });

export default Slider;
