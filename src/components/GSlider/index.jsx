// @flow
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Arrow from'../../images/arrow.svg';

import './gslider.scss';

const SectionWipes = styled.div`
  overflow: hidden;
  position: relative;
  
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

`;

const GSlider = (props) => {
  const items = props.data;
  const firstItem = items.images.splice(0, 1);
     
return (
  <SectionWipes>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="500%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <div className="gpanel" id="first">
            <Img fluid={firstItem[0].fluid} />
            <Fade bottom duration={2000} delay={500}>
              <div className="slide__content">
                <h2 className="slide__content__title">{firstItem[0].title}</h2>
              </div>
            </Fade>
          </div>

          {items.images.map((item, index) => (
            <Tween
              from={{ y: '100%' }}
              to={{ y: '0%' }}
              key={index}
            >
             <div className="gpanel">
                <Img fluid={item.fluid} />
                <Fade bottom duration={2000} delay={500}>
                <div className="slide__content">
                  <h2 className="slide__content__title">{item.title}</h2>
                </div>
                </Fade>
              </div>
            </Tween>
            )
          )}
        </Timeline>
      </Scene>
    </Controller>
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
  </SectionWipes>
)};

export default GSlider;