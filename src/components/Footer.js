import { SiGithub, SiLinkedin } from 'react-icons/si';
import './Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <p>
      <a href="https://github.com/GeorgeBall9">
        <SiGithub className="icon" />
        GitHub
      </a>
      {' | '}
      <a href="https://www.linkedin.com/in/george-ball-513b6b202">
        <SiLinkedin className="icon" />
        LinkedIn
      </a>
    </p>
  </footer>
);

export default Footer;
