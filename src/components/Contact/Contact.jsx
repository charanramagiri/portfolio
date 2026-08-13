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
  const MotionSection = motion.section;
  const MotionP = motion.p;
  const MotionDiv = motion.div;
  const containerVariant = shouldReduceMotion ? sectionContainerVariantsReduced : sectionContainerVariants;
  const itemVariant = shouldReduceMotion ? sectionItemVariantsReduced : sectionItemVariants;
  return (
    <MotionSection
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
    >
      <div className="contact-wrapper">
        <AnimatedText text="Let's connect." as="p" className="section-transition" />

        <MotionP className="contact-intro" variants={itemVariant}>
          I'm actively seeking internship and entry-level full stack developer roles. If you think my work aligns with what you're looking for, I'd be happy to connect.
        </MotionP>

        <MotionP className="contact-closing" variants={itemVariant}>
          Feel free to reach out through any of these channels.
        </MotionP>

        <MotionDiv className="contact-links" variants={itemVariant}>
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
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default Contact;
