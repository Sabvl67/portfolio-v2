/**
 * Skills Section Component
 * Displays technical and soft skills with visual indicators
 */

import React, { useRef } from 'react';
import { skills } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>Skills & Expertise</h2>

        <div className="skills-grid">
          {/* Technical Skills */}
          <div className={`skills-category ${isVisible ? 'fade-in-up' : ''}`}>
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${(skill.level || 0) * 20}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`skills-category ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{ animationDelay: `${(index + technicalSkills.length) * 0.1}s` }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${(skill.level || 0) * 20}%` : '0%',
                        transitionDelay: `${(index + technicalSkills.length) * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
