import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import "./Contacts.scss"

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`


const Modal = styled.div`
  background: #f1f1f1;
  color: #000;
  padding: 2em;
  border-radius: 2px;
  transition: 0.2s all;
  text-align: center;
  margin-top: 2rem;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('http://www.pages04.net/csxprod/TruckBusterForm/TruckBuster', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <>
      <div className="contact">
        <Fade duration={1000} delay={400}>
          <h2 className="contact__title">{this.props.data.title}</h2>
        </Fade>
        <Fade duration={2000} delay={500}>
          <div
            className="contact__desc"
            dangerouslySetInnerHTML={{
              __html: this.props.data.description.childMarkdownRemark.html
            }}
          />
        </Fade>
      </div>
      <div className="contact-form">
      <Form
          name="contact"
          onSubmit={this.handleSubmit}
          overlay={this.state.showModal}
          onClick={this.closeModal}
          pageId="23288825" 
          siteId="573838" 
          parentPageId="23288823"
        >
	        <div id="container_COLUMN125">
	          <div class="fieldLabel">Full Name</div>
	          <input type="text" name="Full Name" id="control_COLUMN125" label="Full Name" class="textInput defaultText" />
	        </div>
         	<div id="container_EMAIL">
          	<div class="fieldLabel">Email</div>
            <input type="text" name="Email" id="control_EMAIL" label="Email" class="textInput defaultText" />
          </div>
          <div id="container_COLUMN60">
            <div class="fieldLabel">Phone Number</div>
            <input type="text" name="Phone Number" id="control_COLUMN60" label="Phone Number" />
          </div>
          <div id="container_COLUMN11">
            <div class="fieldLabel">Company Name</div>
          	<input type="text" name="Company Name" id="control_COLUMN11" label="Company Name" class="textInput defaultText" />
          </div>
          <div id="container_COLUMN124">
            <div class="fieldLabel">Commodity or STCC</div>
            <input type="text" name="Commodity or STCC" id="control_COLUMN124" label="Commodity or STCC" class="textInput defaultText" />
          </div>
          <div id="container_COLUMN123">
              <div class="fieldLabel">Lanes to quote</div>
              <input type="text" name="Lanes to quote" id="control_COLUMN123" label="Lanes to quote" class="textInput defaultText" />
	        </div>
          <div id="errorMessageContainerId" class="formErrorMessages" style={{display: `none`}}></div>
          <div>
          	<input type="submit" class="defaultText buttonStyle" value="Submit" />
          </div>
          <input type="hidden" name="formSourceName" value="StandardForm" />
          {/*DO NOT REMOVE HIDDEN FIELD sp_exp*/}
          <input type="hidden" name="sp_exp" value="yes" />
      	</Form>
			
				{/*<Form
          name="contact"
          onSubmit={this.handleSubmit}
          overlay={this.state.showModal}
          onClick={this.closeModal}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot" onChange={this.handleInputChange} />
            </label>
          </p>
          <Fade bottom>
          <p className="form-field">
            <label>
              <span>Name</span>
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                name="name"
                type="text"
                placeholder="Name" minLength="2" />
            </label>
          </p>
          <p className="form-field">
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
                placeholder="Email"  />
              </label>
          </p>
          <p className="form-field">
            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
                rows="5"
                cols="5"></textarea>
            </label>
          </p>
          <p className="form-field form-field--btn">
            <button className="button submitform" type="submit">Send</button>
          </p>
          </Fade>
        </Form>*/}
       
      </div>
      <Modal visible={this.state.showModal}>
            <p>
              Thank you for reaching out. I will get back to you as soon as
              possible.
            </p>
          </Modal>
      </>
    )
  }
}

export default Contacts
