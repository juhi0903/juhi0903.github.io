import React from 'react';
import phone from '../../../assets/phone.png';
import email from '../../../assets/email.png';
import github from '../../../assets/github.png';
import location from '../../../assets/location.png';
import './style.scss';

const Contact = () => (
  <div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={phone} alt="Phone" />
      </div>
      <div className="content">+91 9743305745</div>
    </div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={email} alt="Email" />
      </div>
      <div className="content">juhisingh904@gmail.com</div>
    </div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={github} alt="Github" />
      </div>
      <div className="content">https://github.com/juhi0903</div>
    </div>
    <div className="contact-section">
      <div className="icon">
        <img className="skill-logo" src={location} alt="Phone" />
      </div>
      <div className="content">Mumbai, Maharashtra, India</div>
    </div>
  </div>
);

export default Contact;
