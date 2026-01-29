import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/charan-ramagiri/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <span>in</span>
            </a>
            <a href="https://github.com/charanramagiri" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <span>gh</span>
            </a>
            <a href="mailto:charanramagiri2004@gmail.com" className="social-icon" aria-label="Email">
              <span>@</span>
            </a>
          </div>

          <div className="hero-content">
            <h1>
              Hi, I'm <span>Charan</span>.
            </h1>

            <h2>Final-year CS Student, Full Stack Developer</h2>

            <p>
              I build web applications using React, JavaScript, Python, and Node.js. Currently looking for internship and entry-level full stack developer roles.
            </p>

            <div className="hero-buttons">
              <a href="/Charan_Ramagiri.pdf" target="_blank" rel="noopener noreferrer" className="btn primary">
                Resume
              </a>
              <button className="btn secondary">Contact</button>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-blob"></div>
            <img src={profile} alt="Charan Ramagiri" className="hero-img" />
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll to continue</span>
      </div>
    </section>
  );
}

export default Hero;
