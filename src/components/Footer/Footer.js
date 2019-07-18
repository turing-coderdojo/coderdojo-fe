import React from 'react';
import globeImage from '../../images/CD-footer-globe.png';
import fbIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import linkedInIcon from '../../images/linkedin.svg';
import emailIcon from '../../images/email.svg';

function Footer() {
  return (
    <footer className="Footer">
      <section className="social-media">
        <div className="icon-container">
          <h3>Talk to our community</h3>
          <a href="google.com">
            <img src={fbIcon} alt="facebook" />
            <img src={twitterIcon} alt="facebook" />
            <img src={linkedInIcon} alt="facebook" />
            <img src={emailIcon} alt="facebook" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
