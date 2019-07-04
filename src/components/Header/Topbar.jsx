import React from 'react';
import mainLogo from'../../images/logo.svg';

const TopBar = () => {
  return (
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
  )
};

export default TopBar;
