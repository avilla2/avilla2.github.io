import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import challenge40 from "../images/challenge40.png";
import challenge40b from "../images/challenge40b.png";
import challenge41 from "../images/challenge41.png";
import challenge42 from "../images/challenge42.png";
import challenge43 from "../images/challenge43.png";
import challenge44 from "../images/challenge44.png";
import challenge45 from "../images/challenge45.png";
import challenge46 from "../images/challenge46.png";
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";

const Challenge4 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 4</h2>
                        <p className="lead">Style your code</p>
                        <p className="lead">Use CSS (Cascading Style Sheets) to style React and HTML components </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="1. Here is a small example that we will start with"
                    image={challenge40}
                >
                </SingleImage>
                <SingleImage
                    title="2. Add a 'className' attribute to any tag"
                    image={challenge40b}
                >
                    <p>In this case we added it to the <code>h1</code> tag and gave the tag a class name of "title"</p>
                </SingleImage>
                <SingleImage
                    title="3. Go to the 'style.css' file and make a CSS rule for your class name"
                    image={challenge41}
                >
                    <p>All class name rules in a css file must start with a period (.) and use curly brackets to contain the code</p>
                    <Snippet>{`
                    .title {

                    }
                    `}</Snippet>
                </SingleImage>
                <SingleImage
                    title="4. Add your first style"
                    image={challenge42}
                >
                    <p>We will use the 'color' keyword to change the text color of the header to orange</p>
                </SingleImage>
                <SingleImage
                    title="5. Add more styles"
                    image={challenge43}
                >
                    <p>In this case we changed the font size and font style of the header</p>
                </SingleImage>
                <SingleImage
                    title="6. Adding additional class names"
                    image={challenge44}
                >
                    <p>Go back to <code>Home.js</code> and try adding a <code>className</code> to an <code>img</code> tag</p>
                </SingleImage>
                <SingleImage
                    title="7. Styling an Image"
                    image={challenge45}
                >
                    <p>You are also able to change the width of an image using CSS. In this case we used percents to make the image 50% of its original size</p>
                </SingleImage>
                <SingleImage
                    title="8. More image Styles"
                    image={challenge46}
                >
                    <p>Here we changed the <code>border-radius</code> of the picture to give it rounded borders</p>
                </SingleImage>
                <SingleImage
                    title="9. Add classnames + styles to your site using the keywords below"
                >
                </SingleImage>
                <Snippet>{`
                /* change the color of text */
                color: red;
                /* change the color of backgrounds */
                background-color: blue;
                `}</Snippet>
                <a href="https://www.w3schools.com/cssref/css_colors.asp"> See Full List of Colors</a>
                <Snippet>{`
                /* change the size of text */
                font-size: 30px;
                /* change the style of text */
                font-style: italic;
                font-style: oblique;
                /* change the thickness of text */
                font-weight: bold;
                /* decorate text */
                text-decoration: overline;
                text-decoration: line-through;
                text-decoration: underline;
                text-decoration: underline overline;
                /* align text */
                text-align: center;
                text-align: right;
                text-align: right;
                /* Make elements see through */
                opacity: .5;
                /* Set margins aka spacing between elements */
                margin-left: 20px;
                margin-right: 22px;
                margin-top: 50px;
                margin-bottom: 5px;
                /* Set padding aka spacing within elements */
                margin-left: 20px;
                margin-right: 22px;
                margin-top: 50px;
                margin-bottom: 5px;
                /* set width and height of elements */
                width: 50%;
                height: 500px;
                /* Add shadow to an element */
                box-shadow: 5px 10px 10px #888888;
                /* Round corners of an element */
                border-radius: 30px;
                /* Add a border to an element */
                border-style: solid;
                `}</Snippet>
                <a href="https://www.w3schools.com/cssref/"> See Full List of CSS styles</a>
            </Container>
        </div>
    );
};

export default Challenge4;