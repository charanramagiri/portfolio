import "./About.css";
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

function About() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariant = shouldReduceMotion ? containerVariantsReduced : containerVariants;
  const itemVariant = shouldReduceMotion ? itemVariantsReduced : itemVariants;
  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="about-container">
        
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

      </div>
    </motion.section>
  );
}

export default About;
