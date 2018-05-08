import './Footers.css'
import React from 'react';
import EmailSignUp from '../forms/EmailSignup';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1>Shop Safely and Securely</h1>
        <h6>XXXXX.com takes great pride in offering a safe and secure online shopping experience.</h6>
        <div className="footer-pay-icons">
          <div className="pay-icon1 pay"></div>
          <div className="pay-icon2 pay"></div>
          <div className="pay-icon3 pay"></div>
          <div className="pay-icon4 pay"></div>
          <div className="pay-icon5 pay"></div>
          <div className="pay-icon6 pay"></div>
        </div>
      </div>
      <EmailSignUp />
      <div className="footer-nav">
        <div className="footer-left-nav">
          <div className="footer-logo">Hombre</div>
          <div className="footer-nav-item">Home</div>
          <div className="footer-nav-item">Shop</div>
          <div className="footer-nav-item">About</div>
          <div className="footer-nav-item">Sales</div>
          <div className="footer-nav-item">Contact</div>
        </div>
        <div className="copyright">
          Copyright &copy; 2018. All rights reserved.
        </div>
      </div>
    </div>
  )
};

export default Footer;