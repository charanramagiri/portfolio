import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Charan</span>
        </h1>

        <h2>B.Tech Final Year Student | React Developer</h2>

        <p>
          I am a passionate frontend developer skilled in React, JavaScript,
          HTML, and CSS. I love building clean and responsive web applications.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">View Resume</button>
          <button className="btn secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
