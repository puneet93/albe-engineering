import React, {useState} from 'react';
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap';

function PLCEngineering() {
    const [Show, setShow] = useState(false);
  
    return (
      <>
        <div className="service-card" onClick={() => setShow(true)}>
            <Image src="/PLC.png" srcSet="/PLC@2x.png" className="img-fluid" width="554" height="1028" alt="Picture" />
            <div className="service-card-overlay d-flex flex-column">
                <h5>PLC Engineering</h5>
                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
                <span className="btn-link mt-auto"><Image src="/arrow-right.png" className="img-fluid" width="18" height="16" alt="arrow" /> Read more</span>
            </div>


        </div>

        <div className={`service-popup ${Show ? 'd-block' : 'd-none'}`}>
          <Button className="bg-transparent text-dark btn-service" onClick={() => setShow(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
            </svg>
          </Button>
          <Row className="m-0 h-100">
            <Col md="4" className="service-popup-image h-100 p-0" style={{backgroundImage: 'url(/PLC.png)'}}></Col>
            <Col md="8" className="h-100 p-0">
                <div className="service-popup-content">
                    <h3 className="text-blue text-normal">PLC Engineering</h3>
                    <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
                    <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it`}</p>
                </div>
            </Col>
          </Row>
        </div>
        
      </>
    );
  }

  export default PLCEngineering;