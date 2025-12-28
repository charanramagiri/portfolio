import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Charan</span>
        </h1>

        <h2>B.Tech Final Year Student | Full Stack Developer</h2>

        <p>
            Aspiring Full Stack Developer with hands-on experience in React, JavaScript, Python, and Flask. Passionate about building clean, scalable, and user-focused web applications.
        </p>


        <div className="hero-buttons">
          <a href="/Charan_Ramagiri" target="_blank" rel="noopener noreferrer" className="btn primary"> View Resume </a>

          <button className="btn secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
