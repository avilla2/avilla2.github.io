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
import { useNavigate } from "react-router-dom";
import challenge47 from "../images/challenge47.png";
import challenge58 from "../images/challenge58.png";
import challenge60 from "../images/challenge60.png";
import Snippet from '../components/snippet';

const Day4 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Day 4</h2>
                        <p className="lead">Continuing Your Project</p>
                        <p className="lead">Below is a reference of some of the HTML/React elements that we have learned so far. 
                            Complete some of the challenges at the bottom of the page to keep adding on to your project
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='align-center'>
                    <Col xs={12} md={6}><h1>Main Page Header</h1></Col>
                    <Col xs={12} md={6}><Snippet>{`<h1>Main Page Header</h1>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><h2>Secondary Header</h2></Col>
                    <Col xs={12} md={6}><Snippet>{`<h2>Secondary Header</h2>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><h3>Third Header</h3></Col>
                    <Col xs={12} md={6}><Snippet>{`<h3>Third Header</h3>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><h4>Fourth Header</h4></Col>
                    <Col xs={12} md={6}><Snippet>{`<h4>Fourth Header</h4>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><h5>Fifth Header</h5></Col>
                    <Col xs={12} md={6}><Snippet>{`<h5>Fourth Header</h5>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><h6>Sixth Header</h6></Col>
                    <Col xs={12} md={6}><Snippet>{`<h6>Fourth Header</h6>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><p>Paragraph</p></Col>
                    <Col xs={12} md={6}><Snippet>{`<p>Paragraph</p>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><div>Divider</div></Col>
                    <Col xs={12} md={6}><Snippet>{`<div>Divider</div>`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><div>Image</div></Col>
                    <Col xs={12} md={6}><Snippet>{`<img src="link" alt="" width={200} />`}</Snippet></Col>
                </Row>
                <Row className='align-center'>
                    <Col xs={12} md={6}><div>Youtube Video</div></Col>
                    <Col xs={12} md={6}><Snippet>{`
    <iframe 
        width="420" 
        height="315"
        src="https://www.youtube.com/embed/YRbhZYmEbUM">
    </iframe>
                    `}</Snippet></Col>
                </Row>
                <CardGroup>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge47}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 4
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Styling your code
                        </CardSubtitle>
                        <CardText>
                            Use CSS (Cascading Style Sheets) to style React and HTML components
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day4/challenge4")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge58}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 5
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Add New Page
                        </CardSubtitle>
                        <CardText>
                            Add additional pages to your site with React Routing
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day4/challenge5")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge60}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 6
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Image Carousel
                        </CardSubtitle>
                        <CardText>
                            Add multiple pictures to a carousel with captions and titles
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day4/challenge6")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Day4;