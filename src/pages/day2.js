import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import SingleImage from "../components/singleImage";
import Snippet from "../components/snippet";
import day2_1 from "../images/1day2.png";
import day2_2 from "../images/2day2.png";
import day2_3 from "../images/3day2.png";
import day2_4 from "../images/4day2.png";
import day2_5 from "../images/5day2.png";
import academialogo from "../images/academialogo.jpeg";
import academiacover from "../images/academiacover.jpeg";
import day2_6 from "../images/6day2.png";
import day2_7 from "../images/7day2.png";
import day2_8 from "../images/8day2.png";
import day2_9 from "../images/9day2.png";
import day2_10 from "../images/10day2.png";
import day2_11 from "../images/11day2.png";
import day2_12 from "../images/12day2.png";
import day2_13 from "../images/13day2.png";
import day2_14 from "../images/14day2.png";

const Day1 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Day 2</h2>
                        <p className="lead">Writing Your First Website</p>
                        <p className="lead">Upgrading the Academia Latina Website</p>
                    </Col>
                </Row>
            </Container>
            <Container>
            <SingleImage 
                    title="1. Create New Codesandbox with Packages"
                    image={day2_2}
                >
                    <p>
                        Log into your Codesandbox and create a new file with the "React" template.
                        We will be using the React MaterialUI library <a href="https://mui.com/">https://mui.com/</a> to style our website. 
                        Scroll on the toolbar to the "Dependancies" section and type in:
                    </p>
                    <p><code>reactstrap</code></p>
                    <p><code>bootstrap</code></p>
                    <p>
                        To install MaterialUI into your sandbox.
                        Delete all the tags between the <code>div</code> tags
                        Then add these imports to the top of your code:
                    </p>
                    <Snippet>
                        {`import 'bootstrap/dist/css/bootstrap.min.css'; 
 import * as React from 'react';`}</Snippet>
                </SingleImage>
                <SingleImage 
                    title="2. Link to Github"
                    image={day2_1}
                >
                    <p>
                        Log into your Codesandbox and create a new file with the "React" template.
                        Click on the Github cat on the left toolbar and connect your github account to Codesandbox.
                        When it says repository name, give your project a name.
                    </p>
                </SingleImage>
                <SingleImage 
                    title="3. Compare Old Website"
                    image={day2_3}
                >
                    <p>
                        Here is our inspiration for the website we are gonna make today. Lets see how we can imporve this.
                    </p>
                </SingleImage>
                <SingleImage 
                    title="4. Start with a Navbar"
                    image={day2_4}
                >
                    <p>
                        Import the following "Components", which are premade code pieces that you can use for your website
                    </p>
                    <Snippet>
                        {`import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from 'reactstrap';`}
                    </Snippet>
                </SingleImage>
                <SingleImage 
                    title="5. Creating the Navbar"
                    image={day2_5}
                >
                    <p>
                        The following code will put a navbar with all our menu options on it. 
                        When the screen is small, the options get replaced with a hamburger menu.
                        Later on we will animate the menu to be able to open and close.
                    </p>
                    <Snippet>
                        {`<Navbar fixed="top" dark color="danger" expand="md">
    <NavbarBrand href="/">Academia Latina</NavbarBrand>
    <NavbarToggler />
    <Collapse navbar>
        <Nav navbar>
            <NavItem>
                <NavLink href="https://inside.sou.edu/youth/latino/leadership.html">Academia Leadership</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://inside.sou.edu/youth/latino/junior-counselor.html">Junior Counselors</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://inside.sou.edu/youth/latino/senior-counselor.html">Senior Counselors</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://inside.sou.edu/youth/latino/head-resident-information.html">Head Residents</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>`}
                    </Snippet>
                </SingleImage>
                <SingleImage 
                    title="6. Making an image folder"
                    image={day2_6}
                >
                    <p>
                        <a href={academialogo} download>Click here to Download the Academia Latina logo</a> and the <a href={academiacover} download>Academia cover photo </a>  
                        and rename the files to "logo.jpeg" and "cover.jpeg". Create a new folder with the new directory button next to the "src" folder in your toolbar.
                        Name the new folder "images" and drag the two jpeg files into the folder.
                    </p>
                </SingleImage>
                <SingleImage 
                    title="7. Importing the Pictures"
                    image={day2_7}
                >
                    <p>
                        Import your two images into your file using the code below:
                    </p>
                    <Snippet>{`import logo from './images/logo.jpeg';
import cover from './images/cover.jpeg';`}</Snippet>
                    <p>
                        <code>img</code> stands for image, 
                        while <code>width</code> sets the width of the picture, 
                        <code> alt</code> is the alternate name of the picture, 
                        and <code>src</code> is the link to the original picture
                    </p>
                </SingleImage>
                <SingleImage 
                    title="8. Coding the Pictures"
                    image={day2_8}
                >
                    <p>
                        Add the code below to get the images to appear on screen. 
                        The <code>className</code> attribute you see there is will be used to style the images next.
                    </p>
                    <Snippet>{`<div>
    <img src={logo} className="logo" alt="Academia Logo" />
    <img src={cover} className="cover" alt="Academia Cover" />
</div>`}</Snippet>
                </SingleImage>
                <SingleImage 
                    title="9. CSS Styling"
                    image={day2_9}
                >
                    <p>
                        On your toolbar, go to the file "styles.css". 
                        Put the code below and see what happens to the logo image
                    </p>
                    <Snippet>{`.logo {
  margin-top: 70px;
  width: 90%;
  max-width: 400px;
}`}</Snippet>
                <p>The label, logo, corresponds to the <code>className</code> that we gave the <code>img</code> tag in our code</p>
                </SingleImage>
                <SingleImage 
                    title="10. CSS Styling Pt. 2"
                    image={day2_10}
                >
                    <p>
                        Now add the following code to style the cover photo.
                    </p>
                    <Snippet>{`.cover {
  width: 90%;
  margin-bottom: 70px;
}`}</Snippet>
                </SingleImage>
                <SingleImage 
                    title="11. Animating"
                    image={day2_11}
                >
                    <p>
                        Now go back to the file "App.js" and add the following function code:
                        This is a React hook, which holds information about how the component is behaving.
                    </p>
                    <Snippet>{`const [isOpen, setIsOpen] = React.useState(false);
const toggle = () => setIsOpen(!isOpen);`}</Snippet>
                </SingleImage>
                <SingleImage 
                    title="12. Wrapping Up"
                    image={day2_12}
                >
                    <p>
                        Redo the two lines below to connect them to the new function that we just added
                    </p>
                    <Snippet>{`<NavbarToggler onClick={toggle} />
<Collapse isOpen={isOpen} navbar>`}</Snippet>
                </SingleImage>
                <SingleImage 
                    title="13. Saving"
                    image={day2_13}
                >
                    <p>
                        Save your completed Project by going to the "File" menu and clicking "Save"
                    </p>
                </SingleImage>
                <SingleImage 
                    title="14. Commit to Github"
                    image={day2_14}
                >
                    <p>
                        Push the changes on to Github by pressing the cat icon in the toolbar and entering a commit name, then pressing
                        "commit changes"
                    </p>
                </SingleImage>
            </Container>
        </div>
    );
};

export default Day1;