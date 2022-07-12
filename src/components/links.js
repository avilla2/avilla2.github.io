import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const About = () => {
    return (
        <div id="linksTitle">
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Links</h2>
                        <p className="lead">Add Me On: </p>
                        <Button className="links" href="https://www.linkedin.com/in/alexandro-villa-7984a31b7/" outline color="primary" size="lg">LinkedIn</Button>
                        <Button className="links" href="https://github.com/avilla2" outline color="success" size="lg">Github</Button>
                        <Button className="links" href="https://app.joinhandshake.com/users/22260839" outline color="danger" size="lg">Handshake</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;