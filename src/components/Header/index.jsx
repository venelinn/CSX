import React from 'react';
import Fade from 'react-reveal/Fade';
import mainLogo from'../../images/logo.svg';

import './header.scss';

const Header = props => {
  return (
    <section>
      <header className="header">
        <div className="header__logo">
          <img src={mainLogo} alt="CSX"/>
        </div>
        <div className="header__cta">
        <a
            className='button jsSmoothScroll'
            href='#contacts'
            title='Get Quote'
          >
          Get Quote
        </a>
        </div>
      </header>
      <div>
        <Fade>
          <h1>{props.data.title}</h1>
        </Fade>
        <Fade delay={500}>
          <p>{props.data.description}</p>
        </Fade>
      </div>
    </section>
  )
};

export default Header;
