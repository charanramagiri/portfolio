import { motion, useReducedMotion } from "framer-motion";
import { createElement } from "react";
import {
  wordVariants,
  wordVariantsReduced,
  textContainerVariants,
  textContainerVariantsReduced,
} from "../../utils/animations";

function AnimatedText({ text, className, as: Component = "span", ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionSpan = motion.span;
  const words = text.split(" ");
  const wordVariant = shouldReduceMotion ? wordVariantsReduced : wordVariants;
  const containerVariant = shouldReduceMotion ? textContainerVariantsReduced : textContainerVariants;

  const animatedWords = (
    <MotionSpan
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
      style={{ display: "inline-block" }}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
          <MotionSpan variants={wordVariant} style={{ display: "inline-block" }}>
            {word}
          </MotionSpan>
        </span>
      ))}
    </MotionSpan>
  );

  return createElement(Component, { className, ...props }, animatedWords);
}

export default AnimatedText;

