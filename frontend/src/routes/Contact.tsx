import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../styles/Contact.css'; // Import the CSS file for styling

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-row">
          <a
            href="https://www.linkedin.com/in/rxzhik"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <span className="contact-text">linkedin.com/in/rxzhik</span>
        </div>
        <div className="contact-row">
          <a href="mailto:rajrashik@outlook.com" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <span className="contact-text">rajrashik@outlook.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;