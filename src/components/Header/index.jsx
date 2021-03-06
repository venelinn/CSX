import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import { Linear, Power1, Power2, TimelineMax } from 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TopBar from './Topbar';
import Arrow from '../../images/arrow.svg';

import './header.scss';

const Header = props => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();
    var animation = Power2.easeInOut;
    var animationOut = Power2.easeOut;

    var arrowSize = document.documentElement.clientWidth > 800 ? '300px' : '100px';
    tl.fromTo(
      '.arrow--left',
      1,
      { opacity: 0, transformOrigin: 'top', scale: 2.5, ease: animation },
      { opacity: 1, scale: 1, transformOrigin: 'left', ease: animation },
      0
    );
    tl.fromTo(
      '.arrow--right',
      1,
      { opacity: 0, transformOrigin: 'top', scale: 2.5, ease: animation },
      { opacity: 1, scale: 1, transformOrigin: 'right', ease: animation },
      0
    );
    tl.fromTo(
      '.arrow__top',
      1,
      { opacity: 0, marginTop: '-300px', ease: animation },
      { opacity: 1, marginTop: '-20px', ease: animation },
      0.2
    );
    tl.fromTo(
      '.arrow__bottom',
      1,
      { opacity: 0, y: '300px', x: '-50%', ease: animation },
      { opacity: 1, y: '30px', x: '-50%', ease: animation },
      0.2
    );

    tl.from(
      '.page__title',
      1,
      { opacity: 0, y: 10, ease: animationOut },
      '-=0.3'
    );
    tl.from(
      '.page__subtitle',
      1,
      { opacity: 0, y: 50, ease: animationOut },
      '-=0.7'
    );
    tl.fromTo(
      '.header',
      1,
      { opacity: 0, ease: animationOut },
      { opacity: 1, y: -10, ease: animation },
      '+=0.05'
    );

    new ScrollMagic.Scene({
      triggerElement: '.trigger1',
      triggerHook: 'onLeave'
    })
      .setTween(tl)
      .addTo(controller);
    // .addIndicators({
    //   colorTrigger: "white",
    //   colorStart: "white",
    //   colorEnd: "white",
    //   indent: 40
    // });

    // Section One inside

    var first = new TimelineMax();
    first.to('.intro', 1, { opacity: 0, y: 50, animation }, 0.05);
    first.to('.arrows', 1, { opacity: 0, top: 200, animation }, 0.05);
    first.to('.arrow__bottom', 0.5, { opacity: 0, animation }, 0.05);
    first.set('.hero', { className: '+=hero--blank' }, '-=1');

    var controller1 = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
      triggerElement: '.trigger1',
      triggerHook: 0,
      duration: '100%'
    })

      .setTween(first)
      //.addIndicators()
      .addTo(controller1);
  }, []);

  return (
    <section className='hero trigger1'>
      <TopBar />
      <div className='arrows'>
        <div className='arrow arrow--left'></div>
        <div className='arrow arrow--right'></div>
        <div className='arrow__top'>
          <img src={Arrow} alt='CSX' />
        </div>
        <div className='arrow__bottom'>
          <img src={Arrow} alt='CSX' />
        </div>
      </div>
      <div className='intro'>
        <h1 className='page__title'>{props.data.title}</h1>
        <div className='page__subtitle'>{props.data.description}</div>
      </div>
    </section>
  );
};

export default Header;
