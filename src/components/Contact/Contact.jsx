import "./Contact.css";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";
import {
  sectionContainerVariants,
  sectionContainerVariantsReduced,
  sectionItemVariants,
  sectionItemVariantsReduced,
} from "../../utils/animations";

function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariant = shouldReduceMotion ? sectionContainerVariantsReduced : sectionContainerVariants;
  const itemVariant = shouldReduceMotion ? sectionItemVariantsReduced : sectionItemVariants;
  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="contact-wrapper">
        <AnimatedText text="Let's connect." as="p" className="section-transition" />

        <motion.p className="contact-intro" variants={itemVariant}>
          I'm actively seeking internship and entry-level full stack developer roles. If you think my work aligns with what you're looking for, I'd be happy to connect.
        </motion.p>

        <motion.p className="contact-closing" variants={itemVariant}>
          Feel free to reach out through any of these channels.
        </motion.p>

        <motion.div className="contact-links" variants={itemVariant}>
          <a href="mailto:charanramagiri2004@gmail.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/charan-ramagiri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/charanramagiri"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
