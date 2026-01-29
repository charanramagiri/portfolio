import "./About.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="about-container">
        <motion.p className="section-transition" variants={itemVariants}>
          Let me tell you a bit about myself.
        </motion.p>
        
        <motion.h2 variants={itemVariants}>A little about me</motion.h2>

        <motion.p variants={itemVariants}>
          I'm a final-year Computer Science student (B.Tech) focused on full stack web development. I build projects using React, JavaScript, Node.js, SQL, and occasionally explore Machine Learning.
        </motion.p>

        <motion.p variants={itemVariants}>
          I'm actively seeking internship and entry-level full stack developer opportunities where I can apply what I've learned and continue growing.
        </motion.p>

      </div>
    </motion.section>
  );
}

export default About;
