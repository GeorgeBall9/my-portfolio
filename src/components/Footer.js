import './Footer.css';

import Image from 'next/image';

const Footer = () => (
  <footer className="footer-container">
    <p>
      <a href="https://github.com/GeorgeBall9">
        <Image src="/images/icons/social.svg" alt="GitHub Icon" width={200} height={200} className="footer-icon" />
        GitHub
      </a>
      {' | '}
      <a href="https://www.linkedin.com/in/george-ball-513b6b202">
        <Image src="/images/icons/linkedin.svg" alt="LinkedIn Icon" width={200} height={200} className="footer-icon" />
        LinkedIn
      </a>
    </p>
  </footer>
);

export default Footer;
