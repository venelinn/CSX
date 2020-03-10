import React from 'react';
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';
import {Input, Checkbox, Radio} from '../DataEntries'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
});

const ContactForm = () => {
  return (
    <Formik
      validateOnChange={true}
      initialValues={{ fullName: '', email: '', phone: '', password: '', agree: '', cookies: [], yogurt: ''}}
      onSubmit={({ setSubmitting, resetForm }) => {
        setSubmitting(true);
        resetForm();
      }}
      validationSchema={validationSchema}
      >
      {({values, dirty, isSubmitting}) => (
        <Form>
          <Input label="Full Name" name="fullName" type="text"  />
          <Input label="E-mail" name="email" type="email" autoComplete="off"  />
          <Input label="Phone Number" name="phone" type="text"  />
          <Input label="Subject" name="password" type="text"  />

          <div className='input__container'>
            <Checkbox label="Agree?" name="agree" type="checkbox" />
          </div>
          <div className='input__container'>
            <Radio label="Skyr" name="yogurt" value="skyr" type="radio" />
            <Radio label="Kefir" name="yogurt" value="kefir" type="radio" />
            <Radio label="Vanilla" name="yogurt" value="vanila" type="radio" />

          </div>
          <div className="input__container form__submit">
            <button disabled={!dirty || isSubmitting} type="submit">submit</button>
          </div>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm
