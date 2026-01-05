import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <p className="section-transition">Let's connect.</p>

        <p className="contact-intro">
          If you think my work aligns with what you're looking for, I'd be happy to connect. I'm open to internship and entry-level opportunities where I can contribute and continue learning.
        </p>

        <p className="contact-closing">
          Feel free to reach out through any of these channels.
        </p>

        <div className="contact-links">
          <a href="mailto:charanramagiri2004@gmail.com">
            📧 charanramagiri2004@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/charan-ramagiri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/charanramagiri"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
