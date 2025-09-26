import React from 'react';
import './Footer.css';

/**
 * Simple footer component with multiple columns linking to various
 * informational pages and social media handles. The layout is
 * responsive, stacking columns on narrower screens.
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h4 className="footer__title">CS — Ticket System</h4>
          <p className="footer__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="footer__column">
          <h5 className="footer__subtitle">Company</h5>
          <ul className="footer__list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__subtitle">Services</h5>
          <ul className="footer__list">
            <li><a href="#">Products &amp; Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__subtitle">Information</h5>
          <ul className="footer__list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>
        <div className="footer__column">
          <h5 className="footer__subtitle">Social Links</h5>
          <ul className="footer__list footer__list--social">
            <li>
              <span role="img" aria-label="Twitter" className="footer__icon">
                🐦
              </span>
              @CS — Ticket System
            </li>
            <li>
              <span role="img" aria-label="LinkedIn" className="footer__icon">
                💼
              </span>
              @CS — Ticket System
            </li>
            <li>
              <span role="img" aria-label="Facebook" className="footer__icon">
                📘
              </span>
              @CS — Ticket System
            </li>
            <li>
              <span role="img" aria-label="Email" className="footer__icon">
                ✉️
              </span>
              support@cst.com
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