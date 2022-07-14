import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";
import challenge50 from "../images/challenge50.png";
import challenge51 from "../images/challenge51.png";
import challenge52 from "../images/challenge52.png";
import challenge53 from "../images/challenge53.png";
import challenge54 from "../images/challenge54.png";
import challenge55 from "../images/challenge55.png";
import challenge56 from "../images/challenge56.png";
import challenge57 from "../images/challenge57.png";

const Challenge5 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 5</h2>
                        <p className="lead">Adding More Pages</p>
                        <p className="lead">Use React Routing to add links to new pages</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="1. Start with your code, here is the example we are starting with"
                    image={challenge50}
                >
                </SingleImage>
                <SingleImage
                    title="2. Next to the source folder, click the button that says new file"
                    image={challenge51}
                >
                </SingleImage>
                <SingleImage
                    title="3. Name your file, in this example we are calling it 'Page1.js' "
                    image={challenge52}
                >
                </SingleImage>
                <SingleImage
                    title="4. Click on Page1.js and add some code like the one below"
                    image={challenge53}
                >
                </SingleImage>
                <Snippet>{`import * as React from "react";

export default function Page1() {
  return (
    <div className="body">
      <h1>This is Page 1</h1>
    </div>
  );
}`}</Snippet>
                <SingleImage
                    title="5. Now go to App.js and make a new line on line 15"
                    image={challenge54}
                >
                </SingleImage>
                <SingleImage
                    title="6. Add in this line of code using a Routing components, and import the Page1 that you just made"
                    image={challenge55}
                >
                <Snippet>{`import Page1 from "./Page1";`}</Snippet>
                <Snippet>{`<Route path="/page1" element={<Page1 />} />";`}</Snippet>
                </SingleImage>
                <SingleImage
                    title="7. The whole App.js file should look something like this now"
                >
                    <Snippet>{`import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import CustomNavbar from "./Navbar";
import Home from "./Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Page1";

export default function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
`}</Snippet>
                </SingleImage>
                <SingleImage
                    title="8. Now go to Navbar.js and check to see that your href attribute for the page1 link matches the route path from App.js"
                    image={challenge56}
                >
                </SingleImage>
                <SingleImage
                    title="9. Visit your new page"
                    image={challenge57}
                >
                </SingleImage>
            </Container>
        </div>
    );
};

export default Challenge5;