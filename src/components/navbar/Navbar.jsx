import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import './Navbar.css';

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BootstrapNavbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
