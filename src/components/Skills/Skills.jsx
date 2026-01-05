import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-wrapper">
        <p className="section-transition">Here's what I work with.</p>
        
        <h2>What I work with</h2>

        <div className="skills-container">
        <div className="skill-card">
          <h3>Programming</h3>
          <p>Java, JavaScript, Python</p>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, React</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Node.js, Flask</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>SQLite, MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Skills;
