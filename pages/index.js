import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';

// assets
import Services from "../components/pages/Services";
import About from "../components/pages/About";
import Team from "../components/pages/Team";
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <div className="home-banner text-white bg--gradient" id="home">
        <img src="/banner-overlay.png" className="home-banner-overlay" alt="overlay" />
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col lg="5" md="6" className="pt-md-4 pb-md-5">
              <h4>We Manage</h4>
              <h1>End-to-end <span>Robotic Engineering</span></h1>
              <Link href="#contact-us"><a className="btn rounded-0 btn-cta">Get in Touch</a></Link>
            </Col>
            <Col lg="6" md="6" className="text-center">
=======
      <div className="home-banner text-white bg--gradient">
        <img src="/banner-overlay.png" className="home-banner-overlay" alt="overlay" />
        <Container>
          <Row className="justify-content-between">
            <Col lg="5" md="6" className="pt-md-4">
              <h4>We Manage</h4>
              <h1>End-to-end <span>Robotic Engineering</span></h1>
              <Link href="/"><a className="btn rounded-0 btn-cta">Get in Touch</a></Link>
            </Col>
            <Col lg="5" md="6" className="text-center">
>>>>>>> 542e649c145194fc95be9192c9575c66ff9c7f04
              <img src="/banner-image.png" className="home-banner-image" alt="image" />
            </Col>
          </Row>
        </Container>
      </div>

      <Services />

      <About />

      <Team />


<<<<<<< HEAD
      <div className="py-100" id="contact-us">
=======
      <div className="py-100 pt-0">
>>>>>>> 542e649c145194fc95be9192c9575c66ff9c7f04
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
                  <img src="/cell-icon.png" className="img-fluid" alt="icon" className="me-3" />
                  <h6 className="mb-0 text-normal text-black font-weight-normal">61 411234567</h6>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <img src="/email-icon.png" className="img-fluid" alt="icon" className="me-3" />
                  <h6 className="mb-0 text-normal text-black font-weight-normal">info@albeengineering.com.au</h6>
                </li>
                <li className="d-flex mb-4 align-items-center">
                  <img src="/map-icon.png" className="img-fluid" alt="icon" className="me-3" />
                  <h6 className="mb-0 text-normal text-black font-weight-normal">Adelaide 5000 SA</h6>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/clock-icon.png" className="img-fluid" alt="icon" className="me-3" />
                  <h6 className="mb-0 text-normal text-black font-weight-normal">Mon-Sat 9am-9pm</h6>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.388965903072!2d138.5950827249984!3d-34.922029425164226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c93b70926705%3A0x1c033657a35104f0!2sAdelaide%20SA%205000%2C%20Australia!5e0!3m2!1sen!2sin!4v1628012700751!5m2!1sen!2sin" className="gmap" allowFullScreen="" loading="lazy"></iframe>
      

    </>
  )
}
