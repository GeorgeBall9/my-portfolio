import Link from "next/link";
import Image from "next/image";
import "./Header.css";

const Header = () => (
  <header className="header-container">
    <nav>
      <Link href="/" legacyBehavior>
        <a className="nav-link">
          <Image
            src="/images/icons/house.svg"
            alt="Home Icon"
            className="nav-icon"
            width={200}
            height={200}
          />{" "}
          Home
        </a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className="nav-link">
          <Image
            src="/images/icons/question.svg"
            alt="About Icon"
            className="nav-icon"
            width={200}
            height={200}
          />{" "}
          About
        </a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className="nav-link">
          <Image
            src="/images/icons/mail.svg"
            alt="About Icon"
            width={200}
            height={200}
            className="nav-icon"
          />{" "}
          Contact
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;
