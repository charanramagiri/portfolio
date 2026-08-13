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
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const MotionAnchor = motion.a;
  const MotionP = motion.p;
  const containerVariant = shouldReduceMotion ? sectionContainerVariantsReduced : sectionContainerVariants;
  const itemVariant = shouldReduceMotion ? sectionItemVariantsReduced : sectionItemVariants;
  return (
    <MotionSection
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="about-layout">
        <MotionDiv className="cards-container" variants={itemVariant}>
          <MotionDiv
            className="about-card about-card--education about-card--full"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.0 }}
          >
            <div className="about-card-header">
              <FaGraduationCap className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Education</p>
            </div>
            <h3 className="about-card-title">B.Tech in Computer Science and Engineering</h3>
            <p className="about-card-school">ACE Engineering College</p>
            <p className="about-card-meta">Graduation: 2026 · CGPA: 8.50</p>
          </MotionDiv>

          <MotionDiv
            className="about-card about-card--projects about-card--full"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.06 }}
          >
            <div className="about-card-header">
              <FaCode className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Projects</p>
            </div>
            <p className="about-card-value">
              <span className="about-card-value-number">3</span>
              <span className="about-card-value-label">Projects</span>
            </p>
          </MotionDiv>

          <MotionAnchor
            className="about-card about-card--certifications"
            href="#certifications"
            aria-label="View all 8 certifications"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.12 }}
          >
            <div className="about-card-header">
              <FaAward className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Certifications</p>
            </div>
            <p className="about-card-value">
              <span className="about-card-value-number">8</span>
              <span className="about-card-value-label">Certifications</span>
            </p>
          </MotionAnchor>

          <MotionDiv
            className="about-card about-card--feature"
            variants={itemVariant}
            transition={shouldReduceMotion ? undefined : { delay: 0.18 }}
          >
            <div className="about-card-header">
              <FaMapMarkerAlt className="about-card-icon" aria-hidden="true" focusable="false" />
              <p className="about-card-label">Location</p>
            </div>
            <p className="about-card-value">Hyderabad</p>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv className="about-content" variants={itemVariant}>
          <AnimatedText text="A little about me" as="h2" />

          <MotionP variants={itemVariant}>
            I am a 2026 B.Tech Computer Science and Engineering graduate with a strong foundation in <span className="highlight">Java</span>, <span className="highlight">Object-Oriented Programming</span>, and <span className="highlight">Data Structures & Algorithms</span>.
          </MotionP>

          <MotionP variants={itemVariant}>
            I have hands-on experience building web applications using HTML, CSS, JavaScript, <span className="highlight">React</span>, SQL, and REST APIs. I enjoy solving complex problems and writing efficient solutions with optimized time and space complexity.
          </MotionP>

          <MotionP variants={itemVariant}>
            I am a disciplined and hardworking individual who ensures tasks are completed within deadlines. Currently, I am seeking opportunities where I can contribute to real-world projects while continuously learning and growing as a <span className="highlight">Software Developer</span>.
          </MotionP>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default About;
