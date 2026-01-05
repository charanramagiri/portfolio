import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profile} alt="Charan Ramagiri" className="hero-img" />
        <h1>
          Hi, I'm <span>Charan</span>.
        </h1>

        <h2>Final-year CS Student, Full Stack Developer</h2>

        <p>
        Aspiring Full Stack Developer with hands-on experience in React, JavaScript, Python, and Node.js. Passionate about building clean, scalable, and user-focused web applications.
        </p>

        <div className="hero-buttons">
          <a href="/Charan_Ramagiri.pdf" target="_blank" rel="noopener noreferrer" className="btn primary">
            Resume
          </a>
          <button className="btn secondary">Contact</button>
        </div>

        <div className="scroll-hint">
          <span>Scroll to continue</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
