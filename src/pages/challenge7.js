import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import challenge71 from "../images/challenge71.png";
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";

const Challenge7 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 7</h2>
                        <p className="lead">Buttons, Links, Images</p>
                        <p className="lead">Adding Buttons, Links and Text Inputs to provide user interaction</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="Code example, adapt it to your project code as you see fit"
                    image={challenge71}
                >
                </SingleImage>
               <Snippet>{`
import * as React from "react";
import {
  Button,
  Input
} from 'reactstrap';

export default function Home() {
  return (
    <div className="body">
      <h1>Welcome to Academia Latina</h1>
      <p>Here are some basic buttons</p>
      <div>
        <Button color="primary">
          Click Me
        </Button>
        <Button color="secondary">
          Click Me
        </Button>
        <Button color="warning">
          Click Me
        </Button>
        <Button color="success">
          Click Me
        </Button>
        <Button color="light">
          Click Me
        </Button>
        <Button color="dark">
          Click Me
        </Button>
        <Button color="info">
          Click Me
        </Button>
        <Button color="danger">
          Click Me
        </Button>
      </div>
      <div>
        <p className="mt-4">Here are some link examples</p>
        <div>
          <a href="/page1">Link to Page 1</a>
        </div>
        <div>
          <a href="/page2" target="_blank">Link that opens in a new tab</a>
        </div>
      </div>
      <div>
        <p>Here is a text bar example</p>
        <Input
          name="search"
          bsSize="lg"
          placeholder="Search My Website"
        />
      </div>
    </div>
  );
}
               `}</Snippet>
            </Container>
        </div>
    );
};

export default Challenge7;