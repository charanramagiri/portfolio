import "./Certifications.css";
import { motion, useReducedMotion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import certifications from "../../data/certifications";
import {
  cardVariants,
  cardVariantsReduced,
  sectionContainerVariants,
  sectionContainerVariantsReduced,
} from "../../utils/animations";

function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const MotionSection = motion.section;
  const MotionArticle = motion.article;
  const containerVariant = shouldReduceMotion
    ? sectionContainerVariantsReduced
    : sectionContainerVariants;
  const itemVariant = shouldReduceMotion ? cardVariantsReduced : cardVariants;

  return (
    <MotionSection
      className="certifications"
      id="certifications"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariant}
      aria-labelledby="certifications-heading"
    >
      <div className="certifications-wrapper">
        <h2 id="certifications-heading">Certifications</h2>
        <p className="certifications-intro">
          Credentials that support my foundation in programming, full-stack development, and emerging technologies.
        </p>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <MotionArticle
              className="certification-card"
              key={certification.id}
              variants={itemVariant}
            >
              <FaAward className="certification-icon" aria-hidden="true" focusable="false" />
              <div className="certification-content">
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

export default Certifications;
