import React from 'react';
import './Experience.css';
import colorSharp from '../../assets/img/color-sharp.png';
import { MdOutlineWork } from "react-icons/md";
import experiences from '../../data/experience.json';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">
        <MdOutlineWork className="me-2 mb-1" />Work Experience
      </h2>
      <p className="section-subtitle">Here's my professional journey so far.</p>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3>{exp.role}</h3>
            </div>
            <span className="date">{exp.period}</span>
            <div className="organization">
              <p>{exp.org}</p>
              {exp.place && <small>{exp.place}</small>}
            </div>
            <div className="divider" />
            <div className="experience-description">
              <strong>Description:</strong>
              <div className="description-tags">
                <p className="description-tag">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Background Image Decoration */}
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" />
    </section>
  );
};

export default Experience;
