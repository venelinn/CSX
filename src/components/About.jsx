import React from 'react';
import Fade from 'react-reveal/Fade';
//import { CSSTransition } from 'react-transition-group';

import './About.scss';

const About = props => {
  return (
    <div>
      <Fade bottom delay={1500}>
      <div
        className="about__content"
        dangerouslySetInnerHTML={{
          __html: props.data.description.childMarkdownRemark.html
        }}
        />
      </Fade>
    </div>
  )
};

export default About;
