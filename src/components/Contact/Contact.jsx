import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        I’m currently open to internship and entry-level opportunities.
        Feel free to reach out if you’d like to connect or discuss opportunities.
      </p>

      <div className="contact-links">
        <a href="mailto:charanramagiri2004@gmail.com">
          📧 charanramagiri2004@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
