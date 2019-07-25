import React from 'react';
import fbIcon from '../../images/facebook.svg';
import twitterIcon from '../../images/twitter.svg';
import linkedInIcon from '../../images/linkedin.svg';
import emailIcon from '../../images/email.svg';

function Footer() {
  return (
    <footer className="Footer">
      <div className="icon-container">
        <h3>Talk to our community</h3>
        <a href="https://www.facebook.com/CoderDojo">
          <img src={fbIcon} alt="facebook" />
        </a>
        <a href="https://twitter.com/CoderDojo">
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/company/coderdojo/">
          <img src={linkedInIcon} alt="linked in" />
        </a>
        <img src={emailIcon} alt="contact" />
      </div>
    </footer>

  );
}

export default Footer;
