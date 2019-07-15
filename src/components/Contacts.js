import React from 'react'
import ScrollMagic from "scrollmagic";
import {Linear, TimelineMax} from 'gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

import Footer from './Footer';

import "./Contacts.scss"


class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			value: '',
			checked: false,
			changeClassInput: false,
			emailErrorMessages: '',
			changeClass: false,
			emailSent: false,
			actives: Array(6).fill(false)
		};
	}

	handleChange = () => {
    this.setState({
			checked: !this.state.checked,
			changeClass: false
		})
  }

  handleChangeInput = (e) => {
		this.setState({
			value: e.target.value,
			changeClassInput: false
		});
  }

  handleFocusInput = (e) => {
  	console.log(this.state.actives);
  	   
  	let index = parseInt(e.target.dataset.index);
  	this.setState(state => {
  		return {
        actives: state.actives[index] = true
      }
    });
  }
	
	handleBlurInput = () => {
		if (this.state.value.trim() === "") {
			this.setState({
				active: false
			});
		}
	}

  componentDidMount() {
    let second = new TimelineMax();
    let controller2 = new ScrollMagic.Controller();

    second.from('.contact__title', 1, { opacity: 0, y: 10, ease: Linear.easeNone }, 0.05);
    second.from('.contact__desc', 1, { opacity: 0, y: 50, ease: Linear.easeNone }, '-=0.5');

    let elems = Array.from(document.querySelectorAll('.input__container'));
    elems.forEach(function(slide, index) {
      second.from(slide, 0.3, { opacity: 0, y: -20, x: -20, ease: Linear.easeNone}, '-=0.01');
    });
    second.from('.button--submit', 1, { opacity: 0, ease: Linear.easeNone}, '+=0.01');
    second.from('footer', 1, { opacity: 0, ease: Linear.easeNone}, '+=0.05');
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
          <form
              name="contact"
              onSubmit={this.handleSubmit}
              onClick={this.closeModal}
              pageid="23288825"
              siteid="573838"
              parentpageid="23288823"
            >
              <div id="container_COLUMN125" className="input__container">
                <label className={this.state.active ? 'active' : ''}>
                  <span className="input__placeholder">Full Name</span>
                  <input type="text" name="Full Name" data-index="0" id="control_COLUMN125" label="Full Name" className="textInput defaultText"
                    value={this.state.value}
                    onChange={this.handleChangeInput}
                    onFocus={this.handleFocusInput}
                    onBlur={this.handleBlurInput}
                  />
                </label>
              </div>
              <div id="container_EMAIL" className="input__container">
                <label className={this.state.active ? 'active' : ''}>
                	<span className="input__placeholder">Email</span>
                	<input type="text" name="Email" data-index="1" id="control_EMAIL" label="Email" className="textInput defaultText" 
                		value={this.state.value}
                    onChange={this.handleChangeInput}
                    onFocus={this.handleFocusInput}
                    onBlur={this.handleBlurInput}
                	 />
                </label>
              </div>
              <div id="container_COLUMN60" className="input__container">
                <label className={this.state.active ? 'active' : ''}>
                	<span className="input__placeholder">Phone Number</span>
                	<input type="text" name="Phone Number" id="control_COLUMN60" label="Phone Number" 
                		 value={this.state.value}
                    onChange={this.handleChangeInput}
                    onFocus={this.handleFocusInput}
                    onBlur={this.handleBlurInput}
                	 />
                </label>
              </div>
              <div id="container_COLUMN11" className="input__container">
                <label className={this.state.active ? 'active' : ''}>
                	<span className="input__placeholder">Company Name</span>
                	<input type="text" name="Company Name" id="control_COLUMN11" label="Company Name" className="textInput defaultText" 
                		 value={this.state.value}
                    onChange={this.handleChangeInput}
                    onFocus={this.handleFocusInput}
                    onBlur={this.handleBlurInput}
                	 />
                </label>
              </div>
              <div id="container_COLUMN124" className="input__container">
                <label className={this.state.active ? 'active' : ''}>
	                <span className="input__placeholder">Commodity or STCC</span>
                	<input type="text" name="Commodity or STCC" id="control_COLUMN124" label="Commodity or STCC" className="textInput defaultText" 
                		 value={this.state.value}
                    onChange={this.handleChangeInput}
                    onFocus={this.handleFocusInput}
                    onBlur={this.handleBlurInput}
                	 />
                </label>
              </div>
              <div id="container_COLUMN123" className="input__container">
                <label className={this.state.active ? 'active' : ''}>
                	<span className="input__placeholder">Lanes to quote</span>
                	<input type="text" name="Lanes to quote" id="control_COLUMN123" label="Lanes to quote" className="textInput defaultText" 
                		 value={this.state.value}
                    onChange={this.handleChangeInput}
                    onFocus={this.handleFocusInput}
                    onBlur={this.handleBlurInput}
                	 />
                </label>
              </div>
              <div className="form__submit" >
                <div id="errorMessageContainerId" className="formErrorMessages" style={{display: `none`}}></div>
                <input type="submit" className="button button--submit defaultText buttonStyle" value="Submit" />
              </div>
              <input type="hidden" name="formSourceName" value="StandardForm" />
              {/*DO NOT REMOVE HIDDEN FIELD sp_exp*/}
              <input type="hidden" name="sp_exp" value="yes" />
            </form>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default Contacts
