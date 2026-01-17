import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavigationaBar() {
    return (
        <Navbar expand="lg" className="bg-primary w-100 fixed-top z-1" data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="fs-4" href="#home">Dipen <span className="text-light">A. Chhatrola</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 d-flex justify-content-end">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#skill">Experience and Skill</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationaBar;

