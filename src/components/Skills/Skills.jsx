import "./Skills.css";
import { motion } from "framer-motion";
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

function Skills() {
  return (
    <motion.section
      className="skills"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="skills-wrapper">
        <AnimatedText text="Here's what I work with." as="p" className="section-transition" />
        
        <AnimatedText text="What I work with" as="h2" />

        <motion.div
          className="skills-container"
          variants={skillsContainerVariants}
        >
          <motion.div className="skill-card" variants={cardVariants}>
            <h3>Programming</h3>
            <p>Java, JavaScript, Python</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariants}>
            <h3>Frontend</h3>
            <p>HTML, CSS, React</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariants}>
            <h3>Backend</h3>
            <p>Node.js, Flask</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariants}>
            <h3>Database</h3>
            <p>SQLite, MySQL</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariants}>
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
