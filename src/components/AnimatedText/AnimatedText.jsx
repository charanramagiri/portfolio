import { motion, useReducedMotion } from "framer-motion";
import {
  wordVariants,
  wordVariantsReduced,
  textContainerVariants,
  textContainerVariantsReduced,
} from "../../utils/animations";

function AnimatedText({ text, className, as: Component = "span", ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const wordVariant = shouldReduceMotion ? wordVariantsReduced : wordVariants;
  const containerVariant = shouldReduceMotion ? textContainerVariantsReduced : textContainerVariants;

  return (
    <Component className={className} {...props}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
        style={{ display: "inline-block" }}
      >
        {words.map((word, index) => (
          <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
            <motion.span variants={wordVariant} style={{ display: "inline-block" }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

export default AnimatedText;

