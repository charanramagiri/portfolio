import "./Skills.css";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";
import {
  sectionContainerVariants,
  sectionContainerVariantsReduced,
  cardVariants,
  cardVariantsReduced,
  skillsContainerVariants,
  skillsContainerVariantsReduced,
} from "../../utils/animations";

function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariant = shouldReduceMotion ? sectionContainerVariantsReduced : sectionContainerVariants;
  const cardVariant = shouldReduceMotion ? cardVariantsReduced : cardVariants;
  const skillsContainerVariant = shouldReduceMotion ? skillsContainerVariantsReduced : skillsContainerVariants;
  return (
    <motion.section
      className="skills"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="skills-wrapper">
        <AnimatedText text="Here's what I work with." as="p" className="section-transition" />
        
        <AnimatedText text="What I work with" as="h2" />

        <motion.div
          className="skills-container"
          variants={skillsContainerVariant}
        >
          <motion.div className="skill-card" variants={cardVariant}>
            <h3>Programming & DSA</h3>
            <div className="skill-content">
              <p>Java (Core, OOPs, Collections)</p>
              <p>Arrays, Strings, Recursion</p>
              <p>Trees, Graphs, Dynamic Programming</p>
              <p>Time & Space Complexity</p>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariant}>
            <h3>Web Development</h3>
            <div className="skill-content">
              <p>HTML, CSS, JavaScript</p>
              <p>React.js</p>
              <p>REST APIs</p>
              <p>Authentication (Basics)</p>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariant}>
            <h3>Backend & Databases</h3>
            <div className="skill-content">
              <p>SQL & CRUD Operations</p>
              <p>PostgreSQL, SQLite</p>
              <p>MongoDB</p>
              <p>JSON Handling</p>
            </div>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariant}>
            <h3>Tools & Other Skills</h3>
            <div className="skill-content">
              <p>Git & GitHub</p>
              <p>MERN Stack (Conceptual)</p>
              <p>Problem Solving</p>
              <p>Python, C, C++</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
