import React, { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { resumeData } from "../data/resume";

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section id="resume" className="resume-section" ref={sectionRef}>
      <div className="resume-container">
        {/* Left Column - Fixed */}
        <aside className={`resume-sidebar ${isVisible ? "fade-in" : ""}`}>
          <div className="sidebar-content">
            <header className="resume-header">
              <h1 className="resume-name">{resumeData.contactInfo.name}</h1>
              <div className="print-button-wrapper">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="print-button"
                  aria-label="View resume"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                </a>
                <div className="resume-tooltip">Click here to view the resume</div>
              </div>
            </header>

            <div className="contact-info">
              <div className="contact-group">
                <address className="contact-address">
                  {resumeData.contactInfo.address.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </div>

              <div className="contact-group">
                <a
                  href={`mailto:${resumeData.contactInfo.email}`}
                  className="contact-link"
                >
                  {resumeData.contactInfo.email}
                </a>
              </div>

              <div className="contact-group">
                <a
                  href={`https://${resumeData.contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {resumeData.contactInfo.website}
                </a>
              </div>
            </div>

            <div className={`skills-tags ${isVisible ? "fade-in-up" : ""}`}>
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Column - Scrollable */}
        <main className="resume-main">
          {/* Education */}
          <section className="resume-content-section">
            <h2 className={`section-header ${isVisible ? "fade-in-up" : ""}`}>
              EDUCATION
            </h2>

            <div className="experience-list">
              {resumeData.education.map((entry, index) => (
                <article
                  key={index}
                  className={`experience-entry ${
                    isVisible ? "fade-in-up" : ""
                  }`}
                >
                  <div className="entry-header">
                    <h3 className="entry-name">{entry.degree}</h3>
                    <span className="entry-year">{entry.year}</span>
                  </div>
                  <h4 className="entry-role">{entry.institution}</h4>
                  {entry.details && (
                    <p className="entry-description">{entry.details}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
          {/* Work Experience */}
          <section className="resume-content-section">
            <h2 className={`section-header ${isVisible ? "fade-in-up" : ""}`}>
              WORK EXPERIENCE
              <span className="section-divider"></span>
            </h2>

            <div className="experience-list">
              {resumeData.workExperience.map((entry, index) => (
                <article
                  key={index}
                  className={`experience-entry ${
                    isVisible ? "fade-in-up" : ""
                  }`}
                >
                  <div className="entry-header">
                    <h3 className="entry-name">{entry.name}</h3>
                    <span className="entry-year">{entry.year}</span>
                  </div>
                  <h4 className="entry-role">{entry.role}</h4>
                  <div className="entry-description">
                    {entry.description.split("\n\n").map((bullet, i) => (
                      <p key={i}>{bullet}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="resume-content-section">
            <h2 className={`section-header ${isVisible ? "fade-in-up" : ""}`}>
              PROJECTS
              <span className="section-divider"></span>
            </h2>

            <div className="experience-list">
              {resumeData.projects.map((entry, index) => (
                <article
                  key={index}
                  className={`experience-entry ${
                    isVisible ? "fade-in-up" : ""
                  }`}
                >
                  <div className="entry-header">
                    <h3 className="entry-name">{entry.name}</h3>
                    {entry.year && (
                      <span className="entry-year">{entry.year}</span>
                    )}
                  </div>
                  <h4 className="entry-role">{entry.technologies}</h4>
                  <p className="entry-description">{entry.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="resume-content-section">
            <h2 className={`section-header ${isVisible ? "fade-in-up" : ""}`}>
              AWARDS
              <span className="section-divider"></span>
            </h2>

            <div className="experience-list">
              {resumeData.awards.map((entry, index) => (
                <article
                  key={index}
                  className={`experience-entry ${
                    isVisible ? "fade-in-up" : ""
                  }`}
                >
                  <div className="entry-header">
                    <h3 className="entry-name">{entry.title}</h3>
                    <span className="entry-year">{entry.year}</span>
                  </div>
                  {entry.organization && (
                    <h4 className="entry-role">{entry.organization}</h4>
                  )}
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};
