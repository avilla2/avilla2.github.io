import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <div className="footerContainer">
        <Container fluid>
            <Row>
                <Col>
                    <div className="footer">
                        <p className="lead"> © 2022 Alexandro Villa</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;
