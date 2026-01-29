import "./Contact.css";
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

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="contact-wrapper">
        <AnimatedText text="Let's connect." as="p" className="section-transition" />

        <motion.p className="contact-intro" variants={itemVariants}>
          I'm actively seeking internship and entry-level full stack developer roles. If you think my work aligns with what you're looking for, I'd be happy to connect.
        </motion.p>

        <motion.p className="contact-closing" variants={itemVariants}>
          Feel free to reach out through any of these channels.
        </motion.p>

        <motion.div className="contact-links" variants={itemVariants}>
          <a href="mailto:charanramagiri2004@gmail.com">
            📧 charanramagiri2004@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/charan-ramagiri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/charanramagiri"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
