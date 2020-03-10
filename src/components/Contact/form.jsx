import React from 'react';
import { useInput } from './input-hook';

const ContactForm = props => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput('');
  const {
    value: companyName,
    bind: bindCompanyName,
    reset: resetCompanyName
  } = useInput('');
  const {
    value: commodity,
    bind: bindCommodity,
    reset: resetCommodity
  } = useInput('');
  const {
    value: lanesQuote,
    bind: bindLanesQuote,
    reset: resetLanesQuote
  } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    resetName();
    resetEmail();
    resetPhone();
    resetCompanyName();
    resetCommodity();
    resetLanesQuote();
  };
  return (
    <form
      onSubmit={handleSubmit}
      pageid='23288825'
      siteid='573838'
      parentpageid='23288823'
    >
      <div className='input__container' id='container_COLUMN125'>
        <input
          type='text'
          {...bindFullName}
          id='control_COLUMN125'
          className='input__control'
          required
        />
        <label class='input__placeholder'>Full Name:</label>
      </div>
      <div className='input__container' id='container_EMAIL'>
        <input
          type='email'
          {...bindEmail}
          id='control_EMAIL'
          className='input__control'
          required
        />
        <label class='input__placeholder'>Email:</label>
      </div>
      <div className='input__container' id='container_COLUMN60'>
        <input
          type='tel'
          {...bindPhone}
          id='control_COLUMN60'
          className='input__control'
          required
        />
        <label class='input__placeholder'>Phone Number:</label>
      </div>
      <div className='input__container' id='container_COLUMN11'>
        <input
          type='text'
          {...bindCompanyName}
          id='control_COLUMN11'
          className='input__control'
          required
        />
        <label class='input__placeholder'>Company Name</label>
      </div>
      <div className='input__container' id='container_COLUMN124'>
        <input
          type='text'
          {...bindCommodity}
          id='control_COLUMN124'
          className='input__control'
          required
        />
        <label class='input__placeholder'>Commodity or STCC</label>
      </div>
      <div className='input__container' id='container_COLUMN123'>
        <input
          type='text'
          {...bindLanesQuote}
          id='control_COLUMN123'
          className='input__control'
          required
        />
        <label class='input__placeholder'>Lanes to quote</label>
      </div>
      <div className='form__submit'>
        <input type='submit' value='Submit' />
      </div>
      {/*DO NOT REMOVE HIDDEN FIELD sp_exp*/}
      <input type='hidden' name='sp_exp' value='yes' />
    </form>
  );
};

export default ContactForm;
