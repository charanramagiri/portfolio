import { motion, useReducedMotion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const wordVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
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

function AnimatedText({ text, className, as: Component = "span", ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const wordVariant = shouldReduceMotion ? wordVariantsReduced : wordVariants;
  const containerVariant = shouldReduceMotion ? containerVariantsReduced : containerVariants;

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

