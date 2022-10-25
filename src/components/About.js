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

const About = () => {
  return (
    <Container>
      <CardContainer>
        <Row className="g-3" xs={1} lg={2}>
          <Col>
            <ContainerSelf
              JustifyContent="start"
              AlignItems="start"
              // Margin="150px 0px"
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
              <Button MarginTop="40px">Get Started</Button>
            </ContainerSelf>
          </Col>
          <Col>
            <ContainerSelf Direction="row">
              <UpDownAnimation
                src={about1}
                alt="image"
                Animation="mover2"
                Height="200px"
                Width="200px"
                Index="1"
                className="p-xs-2 p-md-0"
              />
              <UpDownAnimation
                src={about2}
                alt="image"
                // MarginRight="-250px"
                // MarginLeft="-120px"
                className="back1"
              />
              <UpDownAnimation
                src={phone3}
                alt="image"
                Animation="mover1"
                Index="1"
                className="phone"
              />
            </ContainerSelf>
          </Col>
        </Row>
      </CardContainer>
    </Container>
  );
};

export default About;
