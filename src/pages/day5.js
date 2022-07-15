import React from 'react';
import {
    Container, 
    Row, 
    Col, 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    CardGroup,
    CardImg,
    Button,
} from 'reactstrap';

import challenge70 from "../images/challenge70.png";
import challenge80 from "../images/challenge80.png";
import { useNavigate } from "react-router-dom";

const Day5 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Day 5</h2>
                        <p className="lead">Finishing Your Project</p>
                        <p className="lead">Final day of class! Challenge 7 will show you how to put buttons and text inputs on your page.
                         Challenge 8 will show you how to host your page on Github Pages</p>
                    </Col>
                </Row>
            </Container>
            <Container>
            <CardGroup>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge70}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 7
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Buttons and Text Input
                        </CardSubtitle>
                        <CardText>
                            Adding Buttons, Links and Text Inputs to provide user interaction
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day5/challenge7")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge80}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 8
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Hosting your website
                        </CardSubtitle>
                        <CardText>
                            Use Github Pages to host your website on the internet
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day5/challenge8")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Day5;