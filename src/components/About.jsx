import React from 'react';
import Fade from 'react-reveal/Fade';
//import { CSSTransition } from 'react-transition-group';


//import './header.scss';

const About = props => {
  return (
    <section>
      <div>
        <Fade duration={1000} delay={500}>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.description.description
          }}
          />
        </Fade>
      </div>
    </section>
  )
};

export default About;
