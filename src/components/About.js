import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerSelf,
  HeaderName,
  HrRule,
  UpDownAnimation,
} from "../style/ComponentStyles";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import phone3 from "../assets/phone3.png";
import { Header } from "./shareComponents/Shared";
import { Link } from "react-scroll";

const About = () => {
  return (
    <Container id="about">
      <CardContainer>
        <Row className="g-3" xs={1} lg={2} style={{ minHeight: "80vh" }}>
          <Col>
            <ContainerSelf
              JustifyContent="start"
              AlignItems="start"
              className="content"
            >
              <Header title="About GiNext">
                <HrRule Width="180px" />
              </Header>
              <HeaderName
                FontWeight="400"
                FontSize="14px"
                Color="black"
                MarginTop="40px"
                Width="640px"
              >
                We are an intelligent platform and we have a robot able to make
                thousands of daily operations with Bitcoin, Ethereum and alt
                coin of crypto market. We are eager to innovate, generate and
                share positive financial results in the arbitrage business of
                cryptocurrency and be recognized as the most responsible,
                trustworthy company around.
              </HeaderName>
              <Link
                to="download"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Button MarginTop="40px">Start Free</Button>
              </Link>
            </ContainerSelf>
          </Col>
          <Col>
            <ContainerSelf Direction="row">
              <UpDownAnimation
                Animation="mover1"
                Index="1"
                Height="250px"
                Width="250px"
              >
                <img src={about1} alt="image" height="100%" width="100%" />
              </UpDownAnimation>
              <UpDownAnimation
                Height="300px"
                Width="300px"
                MarginLeft="-150px"
                MarginRight="-150px"
              >
                <img src={about2} alt="image" height="100%" width="100%" />
              </UpDownAnimation>

              <UpDownAnimation
                Animation="mover1"
                Index="1"
                Height="450px"
                Width="250px"
              >
                <img src={phone3} alt="image" height="100%" width="100%" />
              </UpDownAnimation>
            </ContainerSelf>
          </Col>
        </Row>
      </CardContainer>
    </Container>
  );
};

export default About;
