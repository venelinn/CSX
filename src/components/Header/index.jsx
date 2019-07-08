import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import TopBar from './Topbar';
import Plx from 'react-plx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import bigx from'../../images/x.svg';

import './header.scss';
const parallaxData = [
  {
    start: '0',
    end: '220vh', // should be dynamic and the same as the css
    easing: "easeInOut",
    animateWhenNotInViewport: true,
    properties: [
      {
        startValue: 0,
        endValue: -200,
        unit: '%',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

const BigX = styled.div`
	height: 220vh;
`

const Header = props => {
  return (
    <section className="hero">
      <TopBar />
      <div className="intro">
        <Fade delay={500}>
          <h1>{props.data.title}</h1>
        </Fade>
        <Fade delay={1000}>
          <div className="intro__desc">{props.data.description}</div>
        </Fade>
      </div>
      {/*<ParallaxProvider>
       <Parallax
          y={['45%', '-100%']}
          className='bigx'
      >
          <img src={bigx} alt="CSX"/>
      </Parallax>
      </ParallaxProvider>*/}
      <Plx
        className="bigx"
        parallaxData={parallaxData}
      >
    	<BigX>
  			<img src={bigx} alt="CSX"/>
  		</BigX>
      </Plx>
    </section>
  )
};

export default Header;
