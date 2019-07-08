import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import bigx from'../../images/x.svg';

import './bigx.scss';

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

const ShapeX = styled.div`
	height: 170vh;
`

const Bigx = props => {
  return (
    <Plx
      className="bigx"
      parallaxData={parallaxData}
      >
    	<ShapeX>
  			<img src={bigx} alt="CSX"/>
  		</ShapeX>
    </Plx>
  )
};

export default Bigx;
