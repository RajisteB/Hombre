import React from 'react';
import SubscribeBtn from '../buttons/SubscribeBtn';
import './Forms.css';

const EmailSignup = () => {
  return (
    <div className="signup-form-container">
      <input type="text" className="email-signup-form" placeholder="Enter Your Email Address"/>
      <SubscribeBtn />
    </div>

  )
};

export default EmailSignup;