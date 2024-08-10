// contact

import React from 'react';
import '../../styles/Contact/Contact.scss';
import contactPhoto from '../../assets/contact.png';

export default function Contact() {
  return (
    <div className="contact-inner">
      <div className="contact-title">Contact</div>
      <div className="contact-content">
        <div className="contact-photo">
          <img src={contactPhoto} alt="contact" className="phone" />
        </div>
        <div className="contact-text">
          <div className="contact-item">
            <p className="contact-key">Email</p>
            <a
              href="mailto:hjc3790@gmail.com"
              alt="send email"
              aria-label="send email"
              className="contact-link"
            >
              hjc3790@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <p className="contact-key">GitHub</p>
            <a
              href="https://github.com/hjinn0813"
              alt="github"
              aria-label="to github"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/hjinn0813
            </a>
          </div>
          <div className="contact-item">
            <p className="contact-key">Tech Blog</p>
            <a
              href="https://hjinn0813.tistory.com"
              alt="tistory"
              aria-label="to tistory"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://hjinn0813.tistory.com
            </a>
          </div>
          <div className="contact-item">
            <p className="contact-key">CodePen</p>
            <a
              href="https://codepen.io/hjinn0813"
              alt="codepen"
              aria-label="to codepen"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codepen.io/hjinn0813
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
