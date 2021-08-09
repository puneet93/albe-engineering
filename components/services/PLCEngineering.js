import React, {useState} from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

function PLCEngineering() {
    const [Show, setShow] = useState(false);
  
    return (
      <>
        <div className="service-card" onClick={() => setShow(true)}>
            <img src="/PLC.png" srcSet="/PLC@2x.png" className="img-fluid" alt="project" />
            <div className="service-card-overlay d-flex flex-column">
                <h5>PLC Engineering</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <span className="btn-link mt-auto"><img src="/arrow-right.png" alt="arrow" /> Read more</span>
            </div>


        </div>

        <Modal
          centered
          size="lg"
          show={Show}
          className="service-modal"
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="p-0">
              <Row className="m-0">
                  <Col md="4" className="service-popup-image p-0" style={{backgroundImage: 'url(/PLC.png)'}}></Col>
                  <Col md="8" className="p-0">
                      <div className="service-popup-content">
                          <h3 className="text-blue text-normal">PLC Engineering</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it</p>
                      </div>
                  </Col>
              </Row>
          </Modal.Body>
        </Modal>
        
      </>
    );
  }
  
  export default PLCEngineering;