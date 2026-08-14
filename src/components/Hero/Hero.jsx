import "./Hero.css";
import profile from "../../assets/images/profile.jpg";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TypingText from "./TypingText";
import {
  textContainerVariants,
  textContainerVariantsReduced,
} from "../../utils/animations";

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const MotionSpan = motion.span;
  const MotionH1 = motion.h1;
  const MotionDiv = motion.div;
  const MotionImg = motion.img;
  const containerVariant = shouldReduceMotion ? textContainerVariantsReduced : textContainerVariants;

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/charan-ramagiri/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn size={18} aria-hidden="true" focusable="false" />
            </a>
            <a href="https://github.com/charanramagiri" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={18} aria-hidden="true" focusable="false" />
            </a>
            <a href="mailto:charanramagiri2004@gmail.com" className="social-icon" aria-label="Email">
              <MdEmail size={18} aria-hidden="true" focusable="false" />
            </a>
          </div>

          <div className="hero-content">
            <MotionH1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="hero-heading-text">Hi, I’m Charan.</span>
            </MotionH1>

            <h2>
              <MotionSpan
                initial="hidden"
                animate="visible"
                variants={containerVariant}
                style={{ display: "inline-block" }}
              >
                
                <TypingText />
              </MotionSpan>
            </h2>

            <p>
              I build web applications using React, JavaScript, Python, and Node.js. As a 2026 Computer Science graduate, I am currently targeting entry-level software and full stack developer roles.
            </p>

            <div className="hero-buttons">
              <a href="/Charan_Ramagiri.pdf" target="_blank" rel="noopener noreferrer" className="btn primary">
                Resume
              </a>
              <a href="#contact" className="btn secondary">Contact</a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <MotionDiv
              className="hero-blob"
              initial={shouldReduceMotion ? { opacity: 0 } : { y: 40, opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: 0.9,
                      ease: [0.25, 0.1, 0.25, 1],
                    }
              }
            />

            <MotionImg
              src={profile}
              alt="Charan Ramagiri"
              width="800"
              height="800"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="hero-img"
              initial={shouldReduceMotion ? { opacity: 0 } : { y: 50, opacity: 0 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: 1.0,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: 0.15,
                    }
              }
            />
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
