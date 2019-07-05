import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';
import handleViewport from 'react-in-viewport';

import './About.scss';

class AboutSection extends Component {
	constructor(props) {
    super(props);
  }

  ArrowItem = () => {
    let strongs = document.querySelectorAll('.jsAbout strong');
    strongs.forEach((strong, index) => {
    	setTimeout(() => {
    		strong.classList.add('active', `active-${index}`)
	    }, 1000);
    })
  }
  render() {
    const { enterCount, leaveCount, inViewport } = this.props;
    if(inViewport) {
    	this.ArrowItem();
    }
  	return (
      <div>
      	<Fade bottom>
		      <h2
		      	className="about__content jsAbout"
		        dangerouslySetInnerHTML={{
		          __html: this.props.data.description.childMarkdownRemark.html
		        }}
		      />
      	</Fade>
      </div>
    );
  }
}
const About = handleViewport(AboutSection, { rootMargin: '-1.0px', threshold: 0.4 });

export default About;
