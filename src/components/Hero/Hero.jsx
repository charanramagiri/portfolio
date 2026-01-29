import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

function Hero() {
  const h1Words = ["Hi,", "I'm"];
  const h2Words = "Final-year CS Student, Full Stack Developer".split(" ");

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
              <motion.span
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ display: "inline-block" }}
              >
                {h1Words.map((word, index) => (
                  <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
                    <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
                      {word}
                    </motion.span>
                  </span>
                ))}
                <span style={{ display: "inline-block", marginRight: "0.25em" }}>
                  <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
                    <span style={{ color: "#38bdf8" }}>Charan</span>
                  </motion.span>
                </span>
                <span style={{ display: "inline-block" }}>
                  <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
                    .
                  </motion.span>
                </span>
              </motion.span>
            </h1>

            <h2>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ display: "inline-block" }}
              >
                {h2Words.map((word, index) => (
                  <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
                    <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.span>
            </h2>

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
