import './Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <p>
      <a href="https://github.com/GeorgeBall9">
        <img src="/images/icons/social.svg" alt="GitHub Icon" className="footer-icon" />
        GitHub
      </a>
      {' | '}
      <a href="https://www.linkedin.com/in/george-ball-513b6b202">
        <img src="/images/icons/linkedin.svg" alt="LinkedIn Icon" className="footer-icon" />
        LinkedIn
      </a>
    </p>
  </footer>
);

export default Footer;
