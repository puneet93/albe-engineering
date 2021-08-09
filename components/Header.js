<<<<<<< HEAD
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    return (
        <Navbar className="header w-100" expand="md">
            <Container>
                <Navbar.Brand href="/"><img src="/logo-dark.svg" alt="logo" /></Navbar.Brand>
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

=======
import {Navbar, Container, Nav} from 'react-bootstrap'

function Header() {
    return (
        <Navbar className="header w-100" expand="md">
            <Container>
                <Navbar.Brand href="/"><img src="/logo-dark.svg" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Services</Nav.Link>
                        <Nav.Link href="/">About Us</Nav.Link>
                        <Nav.Link href="/">Team</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

>>>>>>> 542e649c145194fc95be9192c9575c66ff9c7f04
export default Header;