import React from 'react';
import { Field, useField } from 'formik';
import './DataEntries.scss';

export const Input = ({label, ...props}) => {
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

export const Checkbox = ({label, ...props}) => {
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

export const Radio = ({label, ...props}) => {
  const [field] = useField(props);
  return (
    <label className="radio-wrapper">
      <span className="radio" data-checked={field.checked}>
        <Field {...field} {...props} className="radio__control" />
        <span className="radio__inner"></span>
      </span>
      <span>{label}</span>
    </label>
  )
}