import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import FormLogin from './FormLogin';
// import FormSuccess from './FormSuccess';
import { Redirect } from 'react-router';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>
          <Link to="/">x</Link>
        </span>
        <div className='form-content-left'>
          <div className="form-title">CrossAmazon</div>
          <img className='form-img' src='img/img-2.svg' alt='leaf' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          // <FormSuccess />
          <Redirect to='/' />
        )}
      </div>
    </>
  );
};

export default Form;