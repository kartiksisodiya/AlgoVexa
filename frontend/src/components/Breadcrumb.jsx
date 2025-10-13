import React from 'react';
import '../styles/Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-links">
          <li><a href="#company">Company</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#choose">Why Choose Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
