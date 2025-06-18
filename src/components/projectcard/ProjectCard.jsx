import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";
import { SiReact, SiMongodb, SiTensorflow, SiHtml5, SiCss3, SiPython } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./ProjectCard.css";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tech = [],
  linkType,
  link = "#"
}) => {
  const techIcons = {
    React: <SiReact title="React" />,
    MongoDB: <SiMongodb title="MongoDB" />,
    TensorFlow: <SiTensorflow title="TensorFlow" />,
    HTML: <SiHtml5 title="HTML5" />,
    CSS: <SiCss3 title="CSS3" />,
    Python: <SiPython title="Python" />,
    API: <TbApi title="API" />
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div className="project-card">
        <div className="card-img-wrapper">
          <img src={imgUrl} alt={title} />
          <div className="overlay">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="tech-icons">
            {tech.map((techName, index) => (
              <span key={index}>{techIcons[techName]}</span>
            ))}
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
              {linkType === "github" ? (
                <FaGithub className="github-icon"/>
              ) : (
                <SiGoogledrive className="drive-icon"/>
              )}
          </a>
        </div>
      </div>
    </Col>
  );
};
