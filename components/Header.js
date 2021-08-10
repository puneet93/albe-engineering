import React, {useState} from 'react';
import Image from 'next/image'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar className="header w-100" expanded={expanded} expand="md">
            <Container>
                <Navbar.Brand href="#home"><Image src="/logo-dark.svg" className="img-fluid" width="249" height="48" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={expanded ? 'show' : ''} id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => setExpanded(false)} href="#home">Home</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#services">Services</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#about-us">About Us</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#our-team">Team</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(false)} href="#contact-us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;