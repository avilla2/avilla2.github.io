import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";
import challenge11 from "../images/challenge11.png";

const Challenge1 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 1</h2>
                        <p className="lead">Adding Rows and Columns</p>
                        <p className="lead">Grided layout allow you to organize your page for different sections, and provides a responsive layout</p>
                        <p className="lead">Change any of the text below, or take any piece of the code below to fit the need of your project </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="Code example, adapt it to your project code as you see fit"
                    image={challenge11}
                >

                </SingleImage>
               <Snippet>{`
               import * as React from "react";
               import {
                 Container, 
                 Row, 
                 Col, 
               } from 'reactstrap';
               export default function Home() {
                 return (
                   <div className="body">
                     <h1>Welcome to Academia Latina</h1>
                     <Container>
                       <Row>
                         <Col>This is my first column</Col>
                         <Col>This is my second column</Col>
                         <Col>This is my third column</Col>
                       </Row>
                       <hr />
                       <Row>
                         <Col>Now I am in a second row</Col>
                         <Col>with only two columns</Col>
                       </Row>
                       <hr />
                       <Row>
                         <Col>This row only has a single center column</Col>
                       </Row>
                       <hr />
                       <Row>
                         <Col>This is my first column</Col>
                         <Col>This is my second column</Col>
                         <Col>This is my third column</Col>
                         <Col>Row with four columns</Col>
                       </Row>
                     </Container>
                   </div>
                 );
               }
               `}</Snippet>
            </Container>
        </div>
    );
};

export default Challenge1;