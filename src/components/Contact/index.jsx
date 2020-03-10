import React from 'react';
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div
      className="input"
      data-touched={meta.touched}
      data-value={!!meta.value}
      data-valid={!meta.error}
    >
      <label className='input__label'>{label}</label>
      <Field {...field} {...props} className="input__control" />
      {meta.error ? (
      <span className="input__msg">{errorText}</span>
      ) : null }
    </div>
  )
};

const Checkbox = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (

    <label className="checkbox-wrapper">
      <span className="checkbox" data-checked={!meta.value}>
        <Field {...field} {...props} className="checkbox__control" />
        <span className="checkbox__inner"></span>
      </span>
      <span>{label}</span>
    </label>
  )
}


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
      initialValues={{ fullName: '', email: '', isTall: '', cookies: [], yogurt: ''}}
      onSubmit={({ setSubmitting, resetForm }) => {
        setSubmitting(true);
        resetForm();
      }}
      validationSchema={validationSchema}
      >
      {({values, dirty, isSubmitting}) => (
        <Form>
          <Input label="Full Name" name="fullName" type="text"  />
          <Input label="E-mail" name="email" type="email"  />
          <Input label="Phone Number" name="phone" type="text"  />

          <div className='input__container'>
            <Checkbox label="Is it tall?" name="isTall" type="checkbox" />
          </div>
          <div className='input__container'>
            <Field name="yogurt" type='radio' value="skyr" />
            <Field name="yogurt" type='radio' value="kefir" />
          </div>
          <div className="input__container form__submit">
            <button disabled={!dirty || isSubmitting} type="submit">submit</button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm
