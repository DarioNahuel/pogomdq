
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img src="/logo.png" alt="Logo" className="footer-logo" />
      <span className='footer-text'>
        Mar Del Plata - {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;