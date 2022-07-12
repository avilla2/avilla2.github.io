import React from 'react';
import {
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Container, 
    Row, 
    Col, 
    List
  } from 'reactstrap';
  import { Link } from "react-router-dom";

const ClassLinks = () => {
    return (
        <div id="experienceTitle">
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Start It Up!</h2>
                        <p className="lead">Programming for Entreprenuers - Academia Latina 2022</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='jobcard' xs="12" md="6">
                        <Link className="cap" to="/startitup/day1">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Day 1</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Getting Started</CardSubtitle>
                                    <CardText>
                                        <List>
                                            <li>Introduction</li>
                                            <li>What is web programming and what is React</li>
                                            <li>Get started with Github and Codesandbox</li>
                                            <li>Understanding the structure of React</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Col className='jobcard' xs="12" md="6">
                        <Link className="cap" to="/startitup/day2">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Day 2</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Writing Your First Code</CardSubtitle>
                                    <CardText>
                                        <List>
                                            <li>Understanding HTML and JSX components</li>
                                            <li>Discovering UI libraries: Material UI</li>
                                            <li>Creating a step-by-step sample project</li>
                                            <li>Styling your project with CSS</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='jobcard' xs="12" md="6">
                        <Link className="cap" to="/startitup/day3">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Day 3</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Starting Your First Project</CardSubtitle>
                                    <CardText>
                                        <List>
                                            <li>Brainstorm project ideas</li>
                                            <li>Come up with a project plan: Figma and hand drawing</li>
                                            <li>Adding photos to your website with img tags</li>
                                            <li>Commiting project to Github</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                    <Col className='jobcard' xs="12" md="6">
                        <Link className="cap" to="/startitup/day4">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Day 4</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Continuing Your Project</CardSubtitle>
                                    <CardText>
                                        <List>
                                            <li>Workshop day: Continuing Website</li>
                                            <li>For those who want to add more: 
                                                <ul>
                                                    <li>Add more pages: Routing with React Router</li>
                                                    <li>Make it dynamic: Controlling components with hooks</li>
                                                </ul>
                                            </li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className='jobcard' xs="12" md="6">
                        <Link className="cap" to="/startitup/day5">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Day 5</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Finishing Your Project</CardSubtitle>
                                    <CardText>
                                        <List>
                                            <li>Workshop day: Finishing up project</li>
                                            <li>Get a build ready for deployment</li>
                                            <li>Host finished website on Github pages</li>
                                            <li>Admire all your hard work</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClassLinks;