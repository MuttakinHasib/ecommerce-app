import React from 'react';
import './FormInput.scss';
const FormInput = ({ handleChange, label, ...others }) => {
  console.log(others.value);
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...others} />
      {label ? (
        <label
          className={`form-input-label ${others.value.length ? 'shrink' : ''}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
