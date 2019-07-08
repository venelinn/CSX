// @flow
import React from 'react';
import Img from 'gatsby-image';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Fade from 'react-reveal/Fade';


import './gslider.scss';

const GSlider = (props) => {
  const items = props.data;
  return (
    <div className="gslider">
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <div id="trigger" />
        {items.images.map((item, index) => {
          // const last = item.length === index + 1;
          // console.log(last);
          return (
            <Scene
              pin={true}
              indicators={true}
              key={index}
              >
              {(progress, event) => {
                console.log(event);
                return (
                  <div className="gpanel">
                    <Img fluid={item.fluid} />
                    <Fade bottom delay={500}>
                    <div className="slide__content">
                      <h2 className="slide__content__title">{item.title}</h2>
                    </div>
                    </Fade>
                  </div>
                )
              }
            }
            </Scene>
          )
        })
        }


      </Controller>
    </div>
  );
}

export default GSlider;