import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa'; // Importing icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Column 1 - Company Description */}
        <div className="footer__column">
          <h4 className="footer__title">CS — Ticket System</h4>
          <p className="footer__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Column 2 - Company Links */}
        <div className="footer__column">
          <h5 className="footer__subtitle">Company</h5>
          <ul className="footer__list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="footer__column">
          <h5 className="footer__subtitle">Services</h5>
          <ul className="footer__list">
            <li><a href="#">Products &amp; Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>

        {/* Column 4 - Information */}
        <div className="footer__column">
          <h5 className="footer__subtitle">Information</h5>
          <ul className="footer__list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>

        {/* Column 5 - Social Links */}
        <div className="footer__column">
          <h5 className="footer__subtitle">Social Links</h5>
          <ul className="footer__list footer__list--social">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
                <FaTwitter size={24} /> {/* Twitter Icon */}
              </a>
              <a href=''>  @CS — Ticket System </a> 
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
                <FaLinkedinIn size={24} /> {/* LinkedIn Icon */}
              </a>
             <a href=''>  @CS — Ticket System </a> 
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__icon">
                <FaFacebookF size={24} /> {/* Facebook Icon */}
              </a>
              <a href=''>  @CS — Ticket System </a> 
            </li>
            <li>
              <a href="mailto:support@cst.com" className="footer__icon">
                <FaEnvelope size={24} /> {/* Email Icon */}
              </a>
             <a href=''>  support@cst.com </a>  
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
