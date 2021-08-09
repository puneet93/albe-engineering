import Image from 'next/image'
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    return (
        <Navbar className="header w-100" expand="md">
            <Container>
                <Navbar.Brand href="/"><Image src="/logo-dark.svg" className="img-fluid" width="249" height="48" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#our-team">Team</Nav.Link>
                        <Nav.Link href="#contact-us">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;