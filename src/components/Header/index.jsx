import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import TopBar from './Topbar';
import Bigx from'./Bigx';

import './header.scss';

const Header = props => {
	const width = window.innerWidth;
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
      {width > 800 ? (
    		<Bigx />  		
      	) : ''
    	}
    </section>
  )
};

export default Header;
