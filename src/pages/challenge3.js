import React from 'react';
import {
    Container, 
    Row, 
    Col, 
  } from 'reactstrap';
import challenge31 from "../images/challenge31.png";
import Snippet from '../components/snippet';
import SingleImage from "../components/singleImage";

const Challenge3 = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-4">Challenge 3</h2>
                        <p className="lead">Navigation Cards</p>
                        <p className="lead">Add rows of navigation cards that can lead your user to a new page</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <SingleImage
                    title="Code example, adapt it to your project code as you see fit"
                    image={challenge31}
                >

                </SingleImage>
               <Snippet>{`
import * as React from "react";
import {
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  CardGroup,
  CardImg,
  Button,
} from 'reactstrap';
import ceviche from "./images/ceviche.webp";
import tacos from "./images/tacos.jpeg";
import torta from "./images/torta.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <h1>Welcome to Academia Latina Kitchen</h1>
      <CardGroup>
        <Card>
            <CardImg
            alt="Card image cap"
            src={ceviche}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Ceviche
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Estilo Sinaloa
            </CardSubtitle>
            <CardText>
                Delicioso ceviche de cinco ingredientes
            </CardText>
            <Button onClick={() => navigate("/ceviche")}>
                Leer Más
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={tacos}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Tacos de Birria
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Makes enough to feed 3
            </CardSubtitle>
            <CardText>
                Homemade Birria tacos with consome dip
            </CardText>
            <Button onClick={() => navigate("/birria")}>
                Read More
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src={torta}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Torta Ahogada
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Torta de carnitas en salsa
            </CardSubtitle>
            <CardText>
                Rica torta ahogada estilo jalisco que se prepara en 30 minutos
            </CardText>
            <Button onClick={() => navigate("/torta")}>
                Leer Más
            </Button>
            </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

               `}</Snippet>
            </Container>
        </div>
    );
};

export default Challenge3;