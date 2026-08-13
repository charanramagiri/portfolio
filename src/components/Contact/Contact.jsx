import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import {
  sectionContainerVariants,
  sectionContainerVariantsReduced,
  sectionItemVariants,
  sectionItemVariantsReduced,
} from "../../utils/animations";
import "./Contact.css";

const CONTACT_LINKS = [
  {
    label: "Email",
    detail: "charanramagiri2004@gmail.com",
    href: "mailto:charanramagiri2004@gmail.com",
    Icon: FaEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    detail: "Connect with me",
    href: "https://www.linkedin.com/in/charan-ramagiri/",
    Icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    detail: "Explore my repositories",
    href: "https://github.com/charanramagiri",
    Icon: FaGithub,
    external: true,
  },
];

function Contact() {
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });
  const shouldReduceMotion = useReducedMotion();
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const containerVariant = shouldReduceMotion
    ? sectionContainerVariantsReduced
    : sectionContainerVariants;
  const itemVariant = shouldReduceMotion ? sectionItemVariantsReduced : sectionItemVariants;
  const isSubmitting = formStatus.type === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

    if (!name || !message) {
      setFormStatus({
        type: "error",
        message: "Please provide your name and a meaningful message.",
      });
      return;
    }

    if (!endpoint) {
      console.warn("The contact form endpoint is not configured.");
      setFormStatus({
        type: "error",
        message: "Contact form is temporarily unavailable. Please reach out by email instead.",
      });
      return;
    }

    setFormStatus({ type: "submitting", message: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact me directly by email.",
      });
    }
  };

  return (
    <MotionSection
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
      aria-labelledby="contact-heading"
    >
      <div className="contact-wrapper">
        <MotionDiv className="contact-info" variants={itemVariant}>
          <p className="contact-status"><span aria-hidden="true" />Open to opportunities</p>
          <h2 id="contact-heading">Let&apos;s build something <span>meaningful.</span></h2>
          <p className="contact-intro">
            I&apos;m a 2026 Computer Science graduate seeking entry-level Software Developer and Full Stack Developer opportunities. Feel free to reach out about roles, projects, or collaboration.
          </p>

          <div className="contact-links" aria-label="Direct contact options">
            {CONTACT_LINKS.map((contactLink) => {
              const ContactIcon = contactLink.Icon;

              return (
                <a
                  href={contactLink.href}
                  key={contactLink.label}
                  {...(contactLink.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="contact-link-icon" aria-hidden="true"><ContactIcon /></span>
                  <span className="contact-link-copy"><strong>{contactLink.label}</strong><small>{contactLink.detail}</small></span>
                  {contactLink.external && <FaExternalLinkAlt className="contact-link-arrow" aria-hidden="true" />}
                </a>
              );
            })}
          </div>
        </MotionDiv>

        <MotionDiv className="contact-form-card" variants={itemVariant}>
          <h3>Send a Message</h3>
          <p className="contact-form-intro">Share a role, project, or idea you&apos;d like to discuss.</p>

          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject <span>(optional)</span></label>
              <input id="contact-subject" name="subject" type="text" placeholder="What&apos;s this about?" />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about the opportunity, project, or message..."
                minLength="10"
                required
              />
            </div>

            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company">Leave this field empty</label>
              <input id="contact-company" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
            </div>

            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              <FaPaperPlane aria-hidden="true" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <p
              className={`contact-form-status contact-form-status--${formStatus.type}`}
              aria-live="polite"
            >
              {formStatus.message}
            </p>
          </form>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

export default Contact;
