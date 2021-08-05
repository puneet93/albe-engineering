import Link from 'next/link'
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-center">
            <Container>
                <ul className="d-flex flex-wrap justify-content-center list-unstyled">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/"><a>Services</a></Link></li>
                    <li><Link href="/"><a>About Us</a></Link></li>
                    <li><Link href="/"><a>Team</a></Link></li>
                    <li><Link href="/"><a>Contact</a></Link></li>
                </ul>

                <div className="py-md-4 py-3 mb-3">
                    <img src="/logo-dark.svg" className="img-fluid" alt="logo" />
                </div>

                <p className="mb-0 copyright">Copyright © 2021 Albe Engineering - All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;