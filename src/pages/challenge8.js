import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import challenge81 from "../images/challenge81.png";
import challenge82 from "../images/challenge82.png";
import challenge83 from "../images/challenge83.png";
import challenge84 from "../images/challenge84.png";
import challenge84b from "../images/challenge84b.png";
import challenge85 from "../images/challenge85.png";
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";

const Challenge8 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 8</h2>
                        <p className="lead">Hosting your Website</p>
                        <p className="lead">Use Github Pages to host your website on the internet</p>
                    </Col>
                </Row>
            </Container>
            <Container>
            <SingleImage
                    title="1. Start with your FINAL project code"
                    image={challenge81}
                >
                </SingleImage>
                <SingleImage
                    title="2. In the toolbar, go to the file that says 'package.json'"
                    image={challenge82}
                >
                </SingleImage>
                <SingleImage
                    title="3. Add a new line on line 3 and add in code for a homepage"
                    image={challenge83}
                >
                  <p>The code will follow the pattern of (github username).github.io/(repository name)</p>
                  <p>With the github username being your own username, or the class username, villasou</p>
                  <p>And the repository name can be anything you want, but no spaces in between words!</p>
                  <Snippet>{`"homepage": "https://villasou.github.io/academia-alexv",`}</Snippet>
                </SingleImage>
                <SingleImage
                    title="4. Make 2 new lines on lines 21 and 22 and add in the code below"
                    image={challenge84}
                >
                </SingleImage>
                <Snippet>{`"predeploy": "npm run build",
"deploy": "gh-pages -d build",`}</Snippet>
                <SingleImage
                    title="5. Go back to App.js and change the home path to the (repository name) that you gave your homepage in the package.json file"
                    image={challenge84b}
                >
                </SingleImage>
                <SingleImage
                    title="6. Making the Github Repository"
                    image={challenge85}
                >
                  <p>Go back to the <code>package.json</code> file</p>
                  <p>Now click on the Github cat icon, and sign in if it asks you to sign in</p>
                  <p>Save all your files if you havent already</p>
                  <p>Then give your repository the same name that you gave it in the <code>package.json</code> file</p>
                  <p>The names have to match exactly!</p>
                  <p>Finally, create the repository by pressing 'Create new repository on Github'</p>
                </SingleImage>
                <SingleImage
                    title="7. Let Alex know that you are done so he can push your site live"
                >
                </SingleImage>
            </Container>
        </div>
    );
};

export default Challenge8;