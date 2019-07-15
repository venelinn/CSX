import React from 'react';
import Arrow from'../../images/arrow.svg';

import './xshape.scss';

const XShape = () => {
  return (
    <div className="arrows">
      <div className="arrow arrow--left"></div>
      <div className="arrow arrow--right"></div>
      <div className="arrow__top"><img src={Arrow} alt="CSX"/></div>
      <div className="arrow__bottom"><img src={Arrow} alt="CSX"/></div>
    </div>

  )
};

export default XShape;
