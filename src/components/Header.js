import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.css";

const Header = () => (
  <header className="header-container">
    <nav>
      <Link href="/" legacyBehavior>
        <a className="nav-link">
          <img
            src="/images/icons/house.svg"
            alt="Home Icon"
            className="nav-icon"
          />{" "}
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="nav-link">
          <img
            src="/images/icons/question.svg"
            alt="About Icon"
            className="nav-icon"
          />{" "}
          About
        </a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="nav-link">
        <img src="/images/icons/mail.svg" alt="About Icon" className="nav-icon" /> Contact
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;
