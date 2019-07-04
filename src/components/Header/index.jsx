import React from 'react';
import Fade from 'react-reveal/Fade';
import TopBar from './Topbar';
import Plx from 'react-plx';
import bigx from'../../images/x.svg';

import './header.scss';
const parallaxData = [
  {
    start: '0',
    end: '150vh',
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
        <Fade>
          <h1>{props.data.title}</h1>
        </Fade>
        <Fade delay={500}>
          <div className="intro__desc">{props.data.description}</div>
        </Fade>
      </div>
      <Plx
        className="bigx"
        parallaxData={parallaxData}
      ><img src={bigx} alt="CSX"/></Plx>
    </section>
  )
};

export default Header;
