import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section className="projects" id="projects">
      <div className="projects-wrapper">
        <p className="section-transition">Here are some things I've built.</p>
        
        <h2>Selected work</h2>

        <p className="projects-intro">Here's a small selection of things I've built.</p>

        <div className="featured-project">
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
        </div>

        {otherProjects.length > 0 && (
          <div className="other-projects">
            <div className="projects-container">
              {otherProjects.map((project, index) => (
                <div className="project-card secondary" key={index}>
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
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
