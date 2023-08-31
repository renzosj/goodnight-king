import React from 'react';

import Footerimage from '../images/GitHub_Invertocat_Logo.svg.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Goodnight, King</p>
      <a href="https://github.com/renzosj/goodnight-king" target="_blank" rel="noopener noreferrer">
        <img
          src={Footerimage}
          alt="Link to Example Website"
          className="footer-image"
        />
      </a>
    </footer>
  );
};

export default Footer;
