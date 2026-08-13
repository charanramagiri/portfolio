import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home" aria-label="Go to the top of the page">Charan</a>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
