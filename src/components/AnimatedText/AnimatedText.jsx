import { motion } from "framer-motion";

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

function AnimatedText({ text, className, as: Component = "span", ...props }) {
  const words = text.split(" ");

  return (
    <Component className={className} {...props}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ display: "inline-block" }}
      >
        {words.map((word, index) => (
          <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
            <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

export default AnimatedText;

