import React from 'react';
import ScrollMagic from "scrollmagic";
import {Linear, TimelineMax} from 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import TopBar from './Topbar';
import Arrow from'../../images/arrow.svg';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();

    var arrowSize = document.documentElement.clientWidth > 800 ? '300px' : '100px';
    tl.fromTo('.arrow--left', 1, { opacity: 0, transformOrigin:"top", scale: 5, ease: Linear.easeNone }, { opacity: 1, scale: 1, transformOrigin:"left", ease: Linear.easeNone }, 0.05);
    tl.fromTo('.arrow--right', 1, { opacity: 0, transformOrigin:"top", scale: 5, ease: Linear.easeNone }, { opacity: 1, scale: 1, transformOrigin:"right", ease: Linear.easeNone }, 0.05);
    tl.fromTo('.arrow__top', 1, { opacity: 0, marginTop: '-300px', ease: Linear.easeNone }, { opacity: 1, marginTop: '-20px', ease: Linear.easeNone }, 0.05);
    tl.fromTo('.arrow__bottom', 1, { opacity: 0, y: '300px', x: '-50%', ease: Linear.easeNone }, { opacity: 1, y: '30px', x: '-50%', ease: Linear.easeNone }, 0.05);

    tl.from('.page__title', 1, { opacity: 0, y: 10, ease: Linear.easeNone }, '+=0.05');
    tl.from('.page__subtitle', 1, { opacity: 0, y: 50, ease: Linear.easeNone }, '-=0.5');
    tl.fromTo('.header', 1, { opacity: 0, ease: Linear.easeNone }, { opacity: 1,  y: -10, ease: Linear.easeNone }, '+=0.05');

    new ScrollMagic.Scene({
      triggerElement: ".trigger1",
      triggerHook: "onLeave",
    })
    .setTween(tl)
    .addTo(controller)
    // .addIndicators({
    //   colorTrigger: "white",
    //   colorStart: "white",
    //   colorEnd: "white",
    //   indent: 40
    // });

    // Section One inside

    var first = new TimelineMax();
    first.to('.intro', 1, { opacity: 0, y: 50}, 0.05);
    first.to('.arrows', 1, { opacity: 0, top:200 }, 0.05);
    first.to('.arrow__bottom', 0.5, { opacity: 0}, 0.05);

    var controller1 = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.trigger1',
      triggerHook: 0,
      duration: '100%'
    })

    .setTween(first)
    //.addIndicators()
    .addTo(controller1);
  }
  render() {
    return (
      <section className="hero trigger1">
        <TopBar />
        <div className="arrows">
          <div className="arrow arrow--left"></div>
          <div className="arrow arrow--right"></div>
          <div className="arrow__top"><img src={Arrow} alt="CSX"/></div>
          <div className="arrow__bottom"><img src={Arrow} alt="CSX"/></div>
        </div>
        <div className="intro">
          <h1 className="page__title">{this.props.data.title}</h1>
          <div className="page__subtitle">{this.props.data.description}</div>
        </div>
      </section>
    )
  };
}

export default Header;
