import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <p className="projects-intro"> Below are some of the projects I’ve built to apply my skills in real-world scenarios. </p>


      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
