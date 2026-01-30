import "./Skills.css";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5,
    },
  },
};

const containerVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const skillsContainerVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariant = shouldReduceMotion ? containerVariantsReduced : containerVariants;
  const itemVariant = shouldReduceMotion ? itemVariantsReduced : itemVariants;
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
