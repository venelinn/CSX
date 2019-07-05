import React from 'react';
import Fade from 'react-reveal/Fade';
import TopBar from './Topbar';
import Plx from 'react-plx';
import bigx from'../../images/x.svg';

import './header.scss';
const parallaxData = [
  {
    start: '0',
    end: '170vh', // should be dynamic and the same as the css
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
      <Plx
        className="bigx"
        parallaxData={parallaxData}
      >
      	<img src={bigx} alt="CSX"/>
      </Plx>
    </section>
  )
};

export default Header;
