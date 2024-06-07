import Link from 'next/link';
import './Header.css';


const Header = () => (
  <header className="header-container">
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <a>Projects</a>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
