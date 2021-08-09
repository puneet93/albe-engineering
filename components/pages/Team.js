<<<<<<< HEAD
import { Container, Row, Col} from 'react-bootstrap';
import TeamMember from '../TeamMember';

function Team() {  
    return (
      <div className="py-100 pb-0"  id="our-team">
          <Container>
                <div className="section-title text-center text-blue">
                    <h2 className="h1">Our Team</h2>
                </div>

                <Row>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                </Row>
          </Container>
      </div>
    );
  }
  
=======
import { Container, Row, Col} from 'react-bootstrap';
import TeamMember from '../TeamMember';

function Team() {  
    return (
      <div className="py-100">
          <Container>
                <div className="section-title text-center text-blue">
                    <h2 className="h1">Our Team</h2>
                </div>

                <Row>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                    <Col md="3" sm="4" xs="6" className="mb-4">
                        <TeamMember />
                    </Col>
                </Row>
          </Container>
      </div>
    );
  }
  
>>>>>>> 542e649c145194fc95be9192c9575c66ff9c7f04
  export default Team;