import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import challenge21 from "../images/challenge21.png";
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";

const Challenge2 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 2</h2>
                        <p className="lead">Homepage Banner</p>
                        <p className="lead">Add a huge homepage banner to show off what your website is all about</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="Code example, adapt it to your project code as you see fit"
                    image={challenge21}
                >

                </SingleImage>
               <Snippet>{`
               import * as React from "react";
               import {
                 Card, 
                 CardImg, 
                 CardImgOverlay, 
                 CardTitle,
                 CardText
               } from 'reactstrap';
               import sou from "./images/sou.webp";
               
               export default function Home() {
                 return (
                   <div className="body">
                     <Card inverse>
                       <CardImg
                         alt="Card image cap"
                         src={sou}
                         width="100%"
                       />
                       <CardImgOverlay>
                         <CardTitle tag="h5">
                           Welcome to Academia Latina
                         </CardTitle>
                         <CardText>
                           This is a big homepage banner than can showcase some of the
                           most important things in your website.
                         </CardText>
                         <CardText>
                           <small>
                             It is supposed to catch everyones attention!
                           </small>
                         </CardText>
                       </CardImgOverlay>
                     </Card>
                   </div>
                 );
               }
               `}</Snippet>
            </Container>
        </div>
    );
};

export default Challenge2;