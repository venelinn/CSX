import React from 'react'
import ScrollMagic from "scrollmagic";
import {Linear, TimelineMax} from 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

import { ContactForm } from './Contact';
import CustomForm from './Contact/CustomForm';
import Footer from './Footer';

import "./Contacts.scss"


class Contacts extends React.Component {
  constructor(props) {
    super(props);
	}


  componentDidMount() {
    let second = new TimelineMax();
    let controller2 = new ScrollMagic.Controller();
    var animation = Power2.easeInOut;

    second.from('.contact__title', 1, { opacity: 0, y: 10, ease: animation }, 0.05);
    second.from('.contact__desc', 1, { opacity: 0, y: 50, ease: animation }, '-=0.5');
   	second.addLabel("form")
    let elems = Array.from(document.querySelectorAll('.input__container'));
    elems.forEach(function(slide, index) {
      second.from(slide, 0.8, { opacity: 0, y: 20, ease: animation}, 'form+='+index/10);
    });

    second.from('.button--submit', 1, { opacity: 0, ease: animation}, '+=0.01');
    second.from('footer', 1, { opacity: 0, ease: animation}, '+=0.05');
    let scene2 = new ScrollMagic.Scene({
	    triggerElement: ".trigger2",
	    triggerHook: 1,
    })

    .setTween(second)
    //.addIndicators()
    .addTo(controller2);
  }

  render() {
    return (
      <section id="contacts">
        <div className="section__inner trigger2">
          <div className="contact">
            <h2 className="contact__title">{this.props.data.title}</h2>
            <div
              className="contact__desc"
              dangerouslySetInnerHTML={{
                __html: this.props.data.description.childMarkdownRemark.html
              }}
            />
          </div>
          <div className="contact-form">
          <CustomForm />
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default Contacts
