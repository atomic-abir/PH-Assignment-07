import React from 'react';
import './Navbar.css';

/**
 * Top navigation bar for the application. Displays the site title on the
 * left and a series of menu items with a call‑to‑action button on the right.
 * Accepts an optional onNewTicket callback that is invoked when the
 * "New Ticket" button is clicked.
 */
function Navbar({ onNewTicket }) {
  return (
    <nav className="navbar">
      <div className="navbar__brand">CS — Ticket System</div>
      <ul className="navbar__menu">
        {['Home', 'FAQ', 'Changelog', 'Blog', 'Download', 'Contact'].map((item) => (
          <li key={item} className="navbar__item">
            <a href="#" onClick={(e) => e.preventDefault()}>
              {item}
            </a>
          </li>
        ))}
        <li>
          <button className="navbar__new" onClick={onNewTicket}>
            <span className="navbar__new-plus">+</span> New Ticket
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;