import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                <Nav.Link as={Link} to="/educationalqualifications">Educational Qualifications</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Menu;