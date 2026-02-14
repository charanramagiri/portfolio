import "./About.css";
import { motion, useReducedMotion } from "framer-motion";
import { FaAward, FaCode, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedText from "../AnimatedText/AnimatedText";
import {
  sectionContainerVariants,
  sectionContainerVariantsReduced,
  sectionItemVariants,
  sectionItemVariantsReduced,
} from "../../utils/animations";

function About() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariant = shouldReduceMotion ? sectionContainerVariantsReduced : sectionContainerVariants;
  const itemVariant = shouldReduceMotion ? sectionItemVariantsReduced : sectionItemVariants;
  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="about-layout">
        <motion.div className="cards-container" variants={itemVariant}>
          <motion.div
            className="about-card about-card--education about-card--full"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.0 }}
          >
            <div className="about-card-header">
              <FaGraduationCap className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Education</p>
            </div>
            <h3 className="about-card-title">B.Tech CSE, ACE Engineering College</h3>
            <p className="about-card-meta">CGPA: 8.34</p>
          </motion.div>

          <motion.div
            className="about-card about-card--projects about-card--full"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.06 }}
          >
            <div className="about-card-header">
              <FaCode className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Projects</p>
            </div>
            <p className="about-card-value">
              <span className="about-card-value-number">5</span>
              <span className="about-card-value-label">Projects</span>
            </p>
          </motion.div>

          <motion.div
            className="about-card about-card--certifications"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.12 }}
          >
            <div className="about-card-header">
              <FaAward className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Certifications</p>
            </div>
            <p className="about-card-value">
              <span className="about-card-value-number">5</span>
              <span className="about-card-value-label">Certifications</span>
            </p>
          </motion.div>

          <motion.div
            className="about-card about-card--feature"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.18 }}
          >
            <div className="about-card-header">
              <FaMapMarkerAlt className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Location</p>
            </div>
            <p className="about-card-value">Hyderabad</p>
          </motion.div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariant}>
          <AnimatedText text="A little about me" as="h2" />

          <motion.p variants={itemVariant}>
            I am a B.Tech Final Year Computer Science student with a strong foundation in <span className="highlight">Java</span>, <span className="highlight">Object-Oriented Programming</span>, and <span className="highlight">Data Structures & Algorithms</span>.
          </motion.p>

          <motion.p variants={itemVariant}>
            I have hands-on experience building web applications using HTML, CSS, JavaScript, <span className="highlight">React</span>, SQL, and REST APIs. I enjoy solving complex problems and writing efficient solutions with optimized time and space complexity.
          </motion.p>

          <motion.p variants={itemVariant}>
            I am a disciplined and hardworking individual who ensures tasks are completed within deadlines. Currently, I am seeking opportunities where I can contribute to real-world projects while continuously learning and growing as a <span className="highlight">Software Developer</span>.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
