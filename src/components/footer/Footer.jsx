import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../assets/img/logo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
              <a href="https://www.linkedin.com/in/medha-mishra-b17166250/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Medhamishraa" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://leetcode.com/u/medhamishra/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode />
              </a>
            </div>
            <p>&copy; 2025. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
