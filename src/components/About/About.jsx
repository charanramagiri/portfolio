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
        <AnimatedText text="Let me tell you a bit about myself." as="p" className="section-transition" />
        
        <AnimatedText text="A little about me" as="h2" />

        <motion.p variants={itemVariant}>
          I'm a final-year Computer Science student (B.Tech) focused on full stack web development. I build projects using React, JavaScript, Node.js, SQL, and occasionally explore Machine Learning.
        </motion.p>

        <motion.p variants={itemVariant}>
          I'm actively seeking internship and entry-level full stack developer opportunities where I can apply what I've learned and continue growing.
        </motion.p>

      </div>
    </motion.section>
  );
}

export default About;
