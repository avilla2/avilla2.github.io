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
import SingleImage from "../components/singleImage";
import { useNavigate } from "react-router-dom";
import  day3_1 from "../images/1day3.png";
import challenge10 from "../images/challenge10.png";
import challenge20 from "../images/challenge20.png";
import challenge30 from "../images/challenge30.png";

const Day3 = () => {
    const navigate = useNavigate();
    return (
        <div className='class-content'>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Day 3</h2>
                        <p className="lead">Starting Your First Project</p>
                        <p className="lead">
                            First we have to brainstorm ideas, we will be creating paper prototypes to come up with a design for your website project.
                            Once your design is ready, See the code pieces below to put together in a Codesandbox file to make your design into a website.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
               <SingleImage
                title="1. Get started with the Codesandbox starter code"
                image={day3_1}
               >    
                <p>
                    Get started by going to this
                   <a rel="noopener noreferrer" href='https://codesandbox.io/s/academia2022-day2-9tb08e?file=/src/Home.js' target="_blank"> Code Sandbox Starter Code </a>
                    which has <code>React Router</code>, <code>Bootstrap</code>, and <code>Reactstrap</code> preinstalled, as well as a Navigation Bar built in. You will be editing the 
                    <code> Home.js </code> file.
                </p>
               </SingleImage>
               <SingleImage
                title="2. Choose from the list of challenges below to add elements to your project"
               >    
                <p>
                    Through these challenges you will be able to add different design elements to your project to make it a proper blog, informational website or business site.
                </p>
               </SingleImage>
               <CardGroup>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge10}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 1
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Adding Rows and Columns
                        </CardSubtitle>
                        <CardText>
                            Using Rows and columns to display text and images
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day3/challenge1")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge20}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 2
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Banner
                        </CardSubtitle>
                        <CardText>
                            Display a banner on your homepage to add emphasis to your site.
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day3/challenge2")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={challenge30}
                        top
                        width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Challenge 3
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Navigation cards
                        </CardSubtitle>
                        <CardText>
                            Add informational cards that lead your user to a new page
                        </CardText>
                        <Button onClick={() => navigate("/startitup/day3/challenge3")}>
                            Start
                        </Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Day3;