import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, 
    Container, Row, Col, List
  } from 'reactstrap';
  import { Link } from "react-router-dom";

const Experience = () => {
    return (
        <div id="experienceTitle">
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Experience</h2>
                        <p className="lead">Jobs/Internships</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='jobcard' xs="12" md="6">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Harry & David, Medford, OR (July 2020 - January 2021)</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Intern E-Commerce Web Developer</CardSubtitle>
                                <CardText>
                                    <List>
                                        <li>Updated webpages through the ContentStack CMS</li>
                                        <li>Built out specialized pages for form processing using javascript</li>
                                        <li>Used python for data processing and web scraping</li>
                                        <li>Edited Components in React for the Progressive Web App and merged with git</li>
                                    </List>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='jobcard' xs="12" md="6">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">University of Oregon, Remote (October 2020 - December 2020)</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Intro to Computer Science I Learning Assistant</CardSubtitle>
                                <CardText>
                                    <List>
                                        <li>Held office hours and planned lab sessions to teach a section of ~25 students</li>
                                        <li>Taught python concepts such as variables, functions, data types, and scoping</li>
                                    </List>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className='jobcard' xs="12" md="6">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Nike Inc, Remote (June 2021 - August 2021)</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Global Technology Intern</CardSubtitle>
                                    <CardText>
                                        <List>
                                            <li>Worked with digital employee experience team to develop internal Nike web apps</li>
                                            <li>Improved communications productivity with React/Nodejs video uploading app</li>
                                            <li>Built backend frameworks with AWS Lambda and Terraform for automation</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                    </Col>
                </Row>
                <Row className="projects">
                    <Col>
                        <p className="lead">Projects</p>
                    </Col>
                </Row>
                <Row className="projects-container">
                    <Col xs="12">
                        <a className="cap" href="https://www.juanselcaporal.com/">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Juan's El Caporal Website </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Official Website for a Local Restaurant in Eagle Point, OR</CardSubtitle>
                                    <CardText>
                                        <List type="unstyled">
                                            <li>Website I designed and programmed using React and Django Frameworks</li>
                                            <li>Used Django for Object Relational Mapping to keep a menu PostgreSQL database, which can be updated without changing code </li>
                                            <li>Made as a react Web App to take advantage of ability to save web app on smartphones similir to a native app</li>
                                            <li>Interactive menu organized by sections</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col xs="12" className='jobcard'>
                        <a className="cap" href="https://www.betuo.com/">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Beta Theta Pi Oregon Website </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Official Website the Beta Rho Chapter of Beta Theta Pi at the University of Oregon</CardSubtitle>
                                    <CardText>
                                        <List type="unstyled">
                                            <li>Website built using React frontend and MaterialUI component library</li>
                                            <li>Backend built with Strapi content management system and Graphql query language for Strapi API queries</li>
                                            <li>Website managers can update website content through the simple Strapi, and form responses get sent straight to their email</li>
                                            <li>Includes web app portion of site with a login for every user to see announcements and chapter resources</li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col xs="12" className='jobcard'>
                        <a className="cap" href="/nba-mlops/">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">NBA Playoff Predictor</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Predict the Chances of a team to make the NBA playoffs using machine learning</CardSubtitle>
                                    <CardText>
                                        <List type="unstyled">
                                            <li>Machine Learning operations performed on team data for all 30 NBA teams since 1940's</li>
                                            <li>Data processed through managed wrangling with a processing pipeline</li>
                                            <li>Managed Model tuning performed on the data with 4 different models(XGBoost, KNN, Logistic Regression, and ANN)</li>
                                            <li>Users can input data, and/or leave blanks for the predictive model to fill in. Ensemble prediction shows the averaged probability of all predictive models</li>
                                            <li>Team data derived from <a href="https://www.basketball-reference.com">basketball-reference.com</a></li>
                                        </List>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col xs="12" className='jobcard'>
                        <Link className="cap" to="/startitup">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Start it Up! Programming for Entreprenuers</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Weeklong React programming course for Academia Latina students</CardSubtitle>
                                    <CardText>
                                        <List type="unstyled">
                                            <li>Description Coming Soon</li>
                                            <li>Description Coming Soon</li>
                                            <li>Description Coming Soon</li>
                                            <li>Description Coming Soon</li>
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

export default Experience;