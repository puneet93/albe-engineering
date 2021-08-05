import { Container, Row, Col} from 'react-bootstrap';


function About() {
  
    return (
      <div className="bg--gradient text-white py-100">
          <Container>
              <Row className="justify-content-between align-items-center">
                  <Col lg="5">
                      <div className="about-image">
                          <img src="/about-image.png" className="img-fluid" srcSet="/about-image@2x.png" alt="about" />
                      </div>
                  </Col>
                  <Col lg="6" className="mt-xl-5 mt-md-0 mt-3">
                    <div className="section-title">
                        <h2 className="h1">aBOUT US</h2>
                    </div>
                    <p>We are a team of specialized engineers supporting customers with complex Robotic project in the field of Industrial automation. We have expirience in deploying LGV, AGV robots and industrial lines. We operate Australia and New Zealand wide</p>

                    <Row className="flex-wrap mt-md-5 mt-4" xs="auto">
                        <Col className="d-flex me-sm-4 py-2 align-items-center">
                            <span className="h1 text-normal me-3 mb-0 text-yellow">68</span>
                            <h6 className="mb-0 text-normal">pROJECTS <br />COMPLETED</h6>
                        </Col>
                        <Col className="d-flex py-2 align-items-center">
                            <span className="h1 text-normal me-3 mb-0 text-yellow">10</span>
                            <h6 className="mb-0 text-normal">yEARS IN ROBOTIC <br />INDUSTRY</h6>
                        </Col>
                    </Row>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default About;