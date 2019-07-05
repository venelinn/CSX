import React from 'react';
import mainLogo from'../../images/logo.svg';
import Fade from 'react-reveal/Fade';

const TopBar = () => {
  return (
    <Fade>
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
    </Fade>
  )
};

export default TopBar;
