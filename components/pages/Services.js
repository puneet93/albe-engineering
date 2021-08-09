import { Container, Row, Col} from 'react-bootstrap';

import ProjectManagement from '../services/ProjectManagement';
import SoftwareEngineering from '../services/SoftwareEngineering';
import PLCEngineering from '../services/PLCEngineering';
import ElectricalAssembly from '../services/ElectricalAssembly';

function Services() {
  
    return (
      <div className="py-100" id="services">
          <Container>
              <div className="section-title text-center text-blue">
                  <h2 className="h1">Our Services</h2>
              </div>

              <div className="service-cards h-100 position-relative">
                <Row className="m-0 h-100 flex-nowrap">
                    <Col md="3" xs="9" sm="5" className="h-100 p-0">
                      <ProjectManagement />
                    </Col>
                    <Col md="3" xs="9" sm="5" className="h-100 p-0">
                      <SoftwareEngineering />
                    </Col>
                    <Col md="3" xs="9" sm="5" className="h-100 p-0">
                      <PLCEngineering />
                    </Col>
                    <Col md="3" xs="9" sm="5" className="h-100 p-0">
                      <ElectricalAssembly />
                    </Col>
                </Row>
              </div>
          </Container>
      </div>
    );
  }
  
  export default Services;