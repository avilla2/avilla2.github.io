import React from 'react';
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import portrait2 from "../portrait.jpeg";
const Intro = () => {
    return (
        <div className="intro">
            <Jumbotron>
                <Container fluid className="intro-container">
                    <Row>
                        <Col xs="12" md="4">
                            <img className="portrait" src={portrait2} alt="portrait" />
                        </Col>
                        <Col xs="12" md="8">
                            <div className="introText">
                                <h1 className="display-4">Alexandro Villa</h1>
                                <hr className="my-2" />
                                <p className="lead">Student at the University of Oregon </p>
                                <p className="lead"> B.S. Computer Science and Minor in Entreprenuership </p>
                                <p className="lead"> Class of 2022.</p>
                                <p className="lead">Inquiries: <a href="mailto:a.villa12@outlook.com">a.villa12@outlook.com</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
             </Jumbotron>
        </div>
    );
};

export default Intro;