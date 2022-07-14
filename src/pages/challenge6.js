import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import challenge61 from "../images/challenge61.png";
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";

const Challenge6 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 6</h2>
                        <p className="lead">Image Carousel</p>
                        <p className="lead">Add multiple pictures to a carousel with captions and titles</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="Code example, adapt it to your project code as you see fit"
                    image={challenge61}
                >

                </SingleImage>
               <Snippet>{`
import * as React from "react";
import {UncontrolledCarousel} from 'reactstrap';

export default function Home() {
  return (
    <div className="body">
      <h1>Welcome to Academia Latina</h1>
      <p>Below is a Moving Picture Carousel</p>
      <UncontrolledCarousel
        items={[
          {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: 'https://picsum.photos/id/123/1200/600'
          },
          {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src: 'https://picsum.photos/id/456/1200/600'
          },
          {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src: 'https://picsum.photos/id/678/1200/600'
          }
        ]}
      />
    </div>
  );
}

               `}</Snippet>
            </Container>
        </div>
    );
};

export default Challenge6;