import React from 'react';
import './Banner.css';


function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="banner__card banner__card--inProgress">
        <h3 className="banner__title">In‑Progress</h3>
        <p className="banner__count">{inProgressCount}</p>
      </div>
      <div className="banner__card banner__card--resolved">
        <h3 className="banner__title">Resolved</h3>
        <p className="banner__count">{resolvedCount}</p>
      </div>
    </section>
  );
}

export default Banner;