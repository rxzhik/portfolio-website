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
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:rajrashik@outlook.com?subject=Hello%20There&body=I%20wanted%20to%20reach%20out..." className="icon-link">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;