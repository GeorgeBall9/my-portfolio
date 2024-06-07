import Link from 'next/link';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header className="header-container">
    <nav>
      <Link href="/" legacyBehavior>
        <a className="nav-link">
          <FaHome className="nav-icon" /> Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="nav-link">
          <FaInfoCircle className="nav-icon" /> About
        </a>
      </Link>
      <Link href="/#projects" legacyBehavior>
        <a className="nav-link">
          <FaProjectDiagram className="nav-icon" /> Projects
        </a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="nav-link">
          <FaEnvelope className="nav-icon" /> Contact
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;
