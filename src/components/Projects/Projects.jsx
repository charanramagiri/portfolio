import "./Projects.css";
import projects from "../../data/projects";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText/AnimatedText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <motion.section
      className="projects"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="projects-wrapper">
        <AnimatedText text="Here are some things I've built." as="p" className="section-transition" />
        
        <AnimatedText text="Selected work" as="h2" />

        <motion.p className="projects-intro" variants={itemVariants}>
          Here's a small selection of things I've built.
        </motion.p>

        <motion.div className="featured-project" variants={itemVariants}>
          <div className="project-card featured">
            <h3>{featuredProject.title}</h3>

            <p className="project-description">
              {featuredProject.description}
            </p>

            <p className="project-tech">
              <strong>Tech Stack:</strong> {featuredProject.tech}
            </p>

            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>

        {otherProjects.length > 0 && (
          <motion.div
            className="other-projects"
            variants={containerVariants}
          >
            <motion.div className="projects-container" variants={containerVariants}>
              {otherProjects.map((project, index) => (
                <motion.div
                  className="project-card secondary"
                  key={index}
                  variants={cardVariants}
                >
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="project-tech">
                    <strong>Tech Stack:</strong> {project.tech}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default Projects;
