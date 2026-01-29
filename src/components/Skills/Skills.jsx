import "./Skills.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
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
        <motion.p className="section-transition" variants={itemVariants}>
          Here's what I work with.
        </motion.p>
        
        <motion.h2 variants={itemVariants}>What I work with</motion.h2>

        <motion.div
          className="skills-container"
          variants={containerVariants}
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
