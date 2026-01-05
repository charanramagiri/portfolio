import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Charan Ramagiri
      </p>
      <p className="footer-built">
        Built with React & Vite
      </p>
    </footer>
  );
}

export default Footer;
