import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';

// assets
import Services from "../components/pages/Services";
import About from "../components/pages/About";
import Team from "../components/pages/Team";
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <div className="home-banner text-white bg--gradient" id="home">
        <div className="home-banner-overlay">
          <Image src="/banner-overlay.png" layout="fill" alt="overlay" />
        </div>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="5" md="6" className="pt-md-4 pb-md-5">
              <h4>We Manage</h4>
              <h1>End-to-end <span>Robotic Engineering</span></h1>
              <Link href="#contact-us"><a className="btn rounded-0 btn-cta">Get in Touch</a></Link>
            </Col>
            <Col lg="6" md="6" className="text-center">
              <Image src="/banner-image.png" className="home-banner-image" width="486" height="492" alt="Picture" />
            </Col>
          </Row>
        </Container>
      </div>

      <Services />

      <About />

      <Team />

      <div className="py-100" id="contact-us">

        <Container>
          <div className="section-title pb-4 text-center text-blue">
            <h2 className="h1">Any Question?</h2>
          </div>

          <Row className="justify-content-between">
            <Col xs="12" md="6" className="mb-md-0 mb-5">
              <h3 className="text-normal mb-4 text-blue">Contact us</h3>
              
              <ContactForm/>
            </Col>
            <Col xs="12" md="5">
              <h3 className="text-normal mb-4 text-blue">Contact details</h3>

              <ul className="list-unstyled mb-0 address-list">
                <li className="d-flex mb-4 align-items-center">
                  <div className="address-list-icon me-3">
                    <Image src="/cell-icon.png" alt="icon" width="53" height="53" />
                  </div>
                  <h6 className="mb-0 text-normal text-black font-weight-normal">61 411234567</h6>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="address-list-icon me-3">
                    <Image src="/email-icon.png" alt="icon" width="53" height="53" />
                  </div>
                  <h6 className="mb-0 text-normal text-black font-weight-normal">info@albeengineering.com.au</h6>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <div className="address-list-icon me-3">
                    <Image src="/map-icon.png" alt="icon" width="53" height="53" />
                  </div>
                  <h6 className="mb-0 text-normal text-black font-weight-normal">Sydney 2000 NSW</h6>
                </li>
                <li className="d-flex align-items-center">
                  <div className="address-list-icon me-3">
                    <Image src="/clock-icon.png" alt="icon" width="53" height="53" />
                  </div>
                  <h6 className="mb-0 text-normal text-black font-weight-normal">Mon-Sat 9am-9pm</h6>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.379571769554!2d151.20123719359452!3d-33.867888023613176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sin!4v1628519032787!5m2!1sen!2sin" className="gmap" allowFullScreen="" loading="lazy"></iframe>
      

    </>
  )
}
