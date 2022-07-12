import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import SingleImage from "../components/singleImage";
import Snippet from "../components/snippet";
import github1 from "../images/github1.png";
import codesandbox1 from "../images/codesandbox1.png";
import codesandbox2 from "../images/codesandbox2.png";
import codesandbox3 from "../images/codesandbox3.png";
import codesandbox4 from "../images/codesandbox4.png";
import codesandbox5 from "../images/codesandbox5.png";
import codesandbox6 from "../images/codesandbox6.png";

const Day1 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Day 1</h2>
                        <p className="lead">Getting Started</p>
                        <p className="lead">The first steps are to get started with a Github and Codesandbox account</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage 
                    title="1. Create a Github Account"
                    image={github1}
                >
                    <p>
                        Visit <a href="https://github.com/signup">https://github.com/signup</a> to register for a Github account. 
                        Sign up with a personal email account so you can see your work later.  
                        You will be asked to come up with a username and password for your account, and if you want to opt in to select emails, which you can enter "n" to skip. 
                        Solve the security puzzle and get to the verification code. 
                        The instructor will give you the code so you can verify your account
                    </p>
                </SingleImage>
                <SingleImage 
                    title="2. Create a Codesandbox Account"
                    image={codesandbox1}
                >
                    <p>
                        Visit <a href="https://codesandbox.io/signin">https://codesandbox.io/signin</a> to register for a Codesandbox account. 
                        Click "Sign in with Github" and follow the steps on screen to sign up. 
                    </p>
                </SingleImage>
                <SingleImage 
                    title="3. Create a new Sandbox"
                    image={codesandbox2}
                >
                    <p>
                        Once your logged in click the "Create Sandbox" button in the top right corner
                    </p>
                </SingleImage>
                <SingleImage 
                    title="4. Choose React Templace"
                    image={codesandbox3}
                >
                    <p>
                        Select the "React" template from the official templates list
                    </p>
                </SingleImage>
                <SingleImage 
                    title="5. Entering your sandbox"
                    image={codesandbox4}
                >
                    <p>
                        In the center you have your code editor and on the right you have your output. 
                        You can see the result of your code in the output.
                        The far left side is your toolbar where you can see all your files and options. 
                    </p>
                </SingleImage>
                <SingleImage 
                    title="6. Writing your first code"
                    image={codesandbox5}
                >
                    <p>
                        Underneath the <code>h1</code> tag type the following code to insert a paragraph into your page.
                    </p>
                    <Snippet>{"<p>Writing my first paragraph tag</p>"}</Snippet>
                </SingleImage>
                <SingleImage 
                    title="7. Adding Pictures"
                    image={codesandbox6}
                >
                    <p>
                        Underneath the <code>h2</code> tag type the following code to insert a image into your page.
                    </p>
                    <Snippet>{`<img width={300} alt="academia logo" src="https://inside.sou.edu/assets/youth/AL_New_Logo_2021_FINAL.jpg" />`}</Snippet>
                    <p>
                        <code>img</code> stands for image, 
                        while <code>width</code> sets the width of the picture, 
                        <code> alt</code> is the alternate name of the picture, 
                        and <code>src</code> is the link to the original picture
                    </p>
                </SingleImage>
            </Container>
        </div>
    );
};

export default Day1;