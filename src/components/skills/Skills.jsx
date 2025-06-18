import React from "react";
import { FaTools, FaLaptopCode, FaChartLine, FaCogs, FaPeopleCarry } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import "./skills.css";
import skillsData from "../../data/skills.json";

const iconMap = {
  FaLaptopCode: <FaLaptopCode className="skills-icon" />,
  FaChartLine: <FaChartLine className="skills-icon" />,
  FaCogs: <FaCogs className="skills-icon" />,
  FaPeopleCarry: <FaPeopleCarry className="skills-icon" />
};

export const Skills = () => {
  const SkillCard = ({ iconKey, title, skills }) => (
    <div className="skill-card">
      <div className="icon-wrapper">{iconMap[iconKey]}</div>
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, idx) => (
          <li key={idx}>
            <BsCheckCircleFill className="tick-icon" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">
          <FaTools className="me-2 mb-1" />Skills Overview
        </h2>
        <p className="skills-description">
          I have hands-on experience in multiple technical areas, from development and data science to platforms and interpersonal skills.
        </p>

        <div className="skills-grid">
          {skillsData.map((data, idx) => (
            <SkillCard key={idx} iconKey={data.icon} title={data.title} skills={data.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};
