import React from 'react';

import { useForm } from '../../utils/validator';

const CustomForm = () => {
  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
    commodity: '',
    lanesQuote:'',
  };
  const customErrorAttribute = {
    className: 'has-error',
    'another-attr': 'look-at-me'
  };

  const { values, useInput, isValid } = useForm(defaultValues, customErrorAttribute);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values)
    const formData = new FormData();
    Object.keys(values).forEach(key => formData.append(key, values[key]));
    //method="post" 
    //action="http://www.pages04.net/csxprod/TruckBusterForm/TruckBuster"

    	// Ajax request
		var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
		xmlhttp.open("POST", "http://www.pages04.net/csxprod/TruckBusterForm/TruckBuster");

		xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		

		xmlhttp.onreadystatechange = function() {
			// if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {				
			if (xmlhttp.status == 200) {				
					var obj = JSON.parse(xmlhttp.responseText);
					console.log('not error: successs', obj);
			}
		}
		xmlhttp.send(formData);
		//onSubmit={handleSubmit}
  };

  return (
    <form
			method="post" 
    	action="http://www.pages04.net/csxprod/TruckBusterForm/TruckBuster"    	
      pageid="23288825"
      siteid="573838"
      parentpageid="23288823"
      
      >
      <div className="input__container" id="container_COLUMN125">
        <input
          type="text"
          required
          id="control_COLUMN125"
          className="input__control"
          {...useInput('name')}
        />
        <label className="input__placeholder">Full Name</label>
      </div>

      <div className="input__container" id="container_EMAIL">
        <input
          type="email"
          required
          id="control_EMAIL"
          className="input__control"
          {...useInput('email', 'isEmail')}
        />
        <label className="input__placeholder">E-mail</label>
      </div>

      <div className="input__container" id="container_COLUMN60">
        <input
          type="tel"
          id="control_COLUMN60" className="input__control" required
          {...useInput('phone')}
          />
        <label className="input__placeholder">Phone Number:</label>
      </div>

      <div className="input__container" id="container_COLUMN11">
        <input type="text" {...useInput('companyName')} id="control_COLUMN11" className="input__control"  required />
        <label className="input__placeholder">Company Name</label>
      </div>
      <div className="input__container" id="container_COLUMN124">
        <input type="text" {...useInput('commodity')} id="control_COLUMN124" className="input__control"  required />
        <label className="input__placeholder">Commodity or STCC</label>
      </div>
      <div className="input__container" id="container_COLUMN123">
        <input type="text" {...useInput('lanesQuote')} id="control_COLUMN123" className="input__control"  required />
        <label className="input__placeholder">Lanes to quote</label>
      </div>


      <div className="form__submit">
        <button type="submit" className="button button--submit">Submit</button>
        {/* <button type="submit" disabled={!isValid}>Submit</button> */}
      </div>
        {/*DO NOT REMOVE HIDDEN FIELD sp_exp*/}
        <input type="hidden" name="sp_exp" value="yes" />
    </form>
  )
};

export default CustomForm;