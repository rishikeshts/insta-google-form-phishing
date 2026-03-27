import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      {['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Instagram Lite', 'Meta AI', 'Threads', 'Contact Uploading & Non-Users', 'Meta Verified'].map((link, index) => (
        <a href="#!" key={index}>{link}</a>
      ))}
    </div>
    <div className="footer-copyright">
      <span>English (UK) <span className="chevron-down"></span></span>
      <span>© 2026 Instagram from Meta</span>
    </div>
  </footer>
);

export default Footer;
