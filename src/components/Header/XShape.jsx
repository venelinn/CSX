import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import bigx from'../../images/x.svg';

import './bigx.scss';

const ArrowTop = styled.div`
  --size: 100px;
  width: 0;
  height: 0;
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid #2e49ce;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 1;
`

const ArrowRight = styled.div`
  --size: 200px;
  width: 0;
  height: 0;
  border-top: var(--size) solid transparent;
  border-right: var(--size) solid #2e49ce;
  border-bottom: var(--size) solid transparent;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`
const ArrowBottom = styled.div`
  --size: 100vw;
  width: 0;
  height: 0;
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid #2e49ce;
  position: absolute;
  left: 50%;
  bottom: -120%;
  transform: translateX(-50%);
  z-index: 1;
`


const ArrowLeft = styled.div`
  --size: 200px;
  width: 0;
  height: 0;
  border-top: var(--size) solid transparent;
  border-left: var(--size) solid #2e49ce;
  border-bottom: var(--size) solid transparent;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`


const XShape = props => {
  return (
    <div className="xshape">
      <ArrowTop />
      <ArrowRight />
      <ArrowBottom />
      <ArrowLeft />
    </div>

  )
};

export default XShape;
