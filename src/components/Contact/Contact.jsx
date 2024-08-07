// contact

import React from 'react';
import '../../styles/Contact/Contact.scss';

export default function Contact() {
  return (
    <div className="contact-inner">
      <div className="contact-title">Contact</div>
      <div className="contact-content">
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
          >
            https://codepen.io/hjinn0813
          </a>
        </div>
      </div>
    </div>
  );
}
