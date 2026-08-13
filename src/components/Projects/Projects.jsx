import "./Projects.css";
import projects from "../../data/projects";
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SWIPER_MODULES = [Pagination, A11y, Navigation, Autoplay];

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1];

const ROW_VARIANTS_REDUCED = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

const ROW_VARIANTS_DEFAULT_BASE = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_CUBIC,
      staggerChildren: 0.1,
    },
  },
};

const MEDIA_VARIANTS_REDUCED = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const MEDIA_VARIANTS_DEFAULT = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_CUBIC,
    },
  },
};

const CONTENT_ITEM_VARIANTS_REDUCED = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const CONTENT_ITEM_VARIANTS_DEFAULT = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT_CUBIC,
    },
  },
};

function getRowVariants(index) {
  return {
    ...ROW_VARIANTS_DEFAULT_BASE,
    visible: {
      ...ROW_VARIANTS_DEFAULT_BASE.visible,
      transition: {
        ...ROW_VARIANTS_DEFAULT_BASE.visible.transition,
        delayChildren: index * 0.08,
      },
    },
  };
}

function getMediaVariants(reverse) {
  return {
    hidden: { opacity: 0, x: reverse ? 30 : -30 },
    ...MEDIA_VARIANTS_DEFAULT,
  };
}

const ProjectShowcase = memo(function ProjectShowcase({ project, index }) {
  const shouldReduceMotion = useReducedMotion();
  const rowVariants = shouldReduceMotion ? ROW_VARIANTS_REDUCED : getRowVariants(index);
  const mediaVariants = shouldReduceMotion ? MEDIA_VARIANTS_REDUCED : getMediaVariants(project.reverse);
  const contentItemVariants = shouldReduceMotion ? CONTENT_ITEM_VARIANTS_REDUCED : CONTENT_ITEM_VARIANTS_DEFAULT;

  return (
    <motion.article
      className={`project-cinematic ${project.reverse ? "is-reversed" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={rowVariants}
    >
      <motion.div className="project-media" variants={mediaVariants}>
        <Swiper
          modules={SWIPER_MODULES}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={550}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: `.project-nav-prev-${project.id}`,
            nextEl: `.project-nav-next-${project.id}`,
          }}
        >
          {project.images.map((image, slideIndex) => (
            <SwiperSlide key={`${project.id}-slide-${slideIndex}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`project-nav project-nav-prev project-nav-prev-${project.id}`}
          type="button"
          aria-label={`Previous screenshot for ${project.title}`}
        >
          &#8249;
        </button>
        <button
          className={`project-nav project-nav-next project-nav-next-${project.id}`}
          type="button"
          aria-label={`Next screenshot for ${project.title}`}
        >
          &#8250;
        </button>

        <div className="project-tech-overlay" aria-hidden="true">
          {project.techStack.map((tech) => (
            <span className="project-badge" key={`${project.id}-overlay-${tech}`}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div className="project-content">
        {project.featured && (
          <motion.p className="project-featured-label" variants={contentItemVariants}>
            {project.featuredLabel}
          </motion.p>
        )}
        <motion.h3 variants={contentItemVariants}>{project.title}</motion.h3>

        <motion.p className="project-description" variants={contentItemVariants}>
          {project.description}
        </motion.p>

        <motion.p className="project-description project-description--extra" variants={contentItemVariants}>
          {project.extraDescription}
        </motion.p>

        <p className="sr-only">Tech stack: {project.techStack.join(", ")}</p>

        <motion.div className="project-actions" variants={contentItemVariants}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn--primary"
            aria-label={`View ${project.title} project on GitHub`}
          >
            GitHub Repository
          </a>

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--secondary"
              aria-label={`View live demo for ${project.title}`}
            >
              Live Demo
            </a>
          ) : (
            <button
              className="project-btn project-btn--secondary project-btn--disabled"
              type="button"
              disabled
              aria-label={`Live demo for ${project.title} coming soon`}
            >
              Coming Soon
            </button>
          )}
        </motion.div>
      </motion.div>
    </motion.article>
  );
});

function Projects() {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  return (
    <MotionSection className="projects" id="projects">
      <div className="projects-wrapper">
        <h2>PROJECTS</h2>
        <p className="projects-intro">A selection of projects focused on practical problem-solving and clean user experiences.</p>

        <MotionDiv className="projects-cinematic-list">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default Projects;
