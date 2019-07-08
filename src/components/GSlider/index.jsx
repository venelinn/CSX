// @flow
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Fade from 'react-reveal/Fade';

import './gslider.scss';

const SectionWipes2Styled = styled.div`
  overflow: hidden;

  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

`;

const GSlider = (props) => {
  const items = props.data;
  const firstItem = items.images.splice(0, 1);
  console.log(items);
     
return (
  <SectionWipes2Styled>
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
  </SectionWipes2Styled>
)};

export default GSlider;