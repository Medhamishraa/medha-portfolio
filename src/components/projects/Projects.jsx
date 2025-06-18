import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { GrProjects } from "react-icons/gr";
import { ProjectCard } from "../projectcard/ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/project-img4.png";
import projImg5 from "../../assets/img/project-img5.png";
import projImg6 from "../../assets/img/project-img6.png";
import projImg7 from "../../assets/img/project-img7.png";
import projImg8 from "../../assets/img/project-img8.png";
import projImg9 from "../../assets/img/project-img9.png";
import projImg10 from "../../assets/img/project-img10.png";
import projImg11 from "../../assets/img/project-img11.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import './Projects.css';
import projectData from "../../data/projectData.json";
import imageMap from "../../data/imageMap"; // You’ll create this next

export const Projects = () => {
  const projects = projectData.map(project => ({
    ...project,
    imgUrl: imageMap[project.imgUrl] // Convert string to image import
  }));
  

  const renderCards = (category) => (
    <Row>
      {projects
        .filter((project) => project.categories.includes(category))
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </Row>
  );

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>
                    <GrProjects className="project-icon"/>
                    Projects
                  </h2>
                  <p>
                    Explore a curated selection of my work across different domains and showcases.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Technical Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hackathons</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Non-Tech Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        {renderCards("technical")}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {renderCards("hackathon")}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {renderCards("non-tech")}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Decorative" />
    </section>
  );
};
