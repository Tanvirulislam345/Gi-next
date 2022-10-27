import React from "react";
import {
  Button,
  CardContainer,
  DivContainer,
  HeaderName,
  Input,
} from "../style/ComponentStyles";
import footerImage from "../assets/footerImage.png";
import { Col, Container, Row } from "react-bootstrap";
import appImage from "../assets/app.png";
import playstor from "../assets/playstore.png";

const Footer = () => {
  return (
    <DivContainer BgImage={`url(${footerImage})`} MinHeight="90vh">
      <Container>
        <Row xs={1} md={2} className="g-3" style={{ padding: "300px 0px 0px" }}>
          <Col>
            <CardContainer>
              <img src={appImage} alt="app" width="300px" height="60px" />
            </CardContainer>
          </Col>
          <Col>
            <CardContainer>
              <a
                href="https://play.google.com/store/apps/details?id=com.wiztecbd.e_next_trading&hl=en&gl=GB"
                target="blank"
                title="this is link"
              >
                <img src={playstor} alt="app" width="300px" height="60px" />
              </a>
            </CardContainer>
          </Col>
        </Row>
        <Subscribtion />

        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="center"
          MarginTop="70px"
          Color="#ffffff"
        >
          Privacy Policy | Terms & Conditions
        </HeaderName>
        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="center"
          Color="#ffffff"
        >
          © 2022 Ginexttradingcorp.
        </HeaderName>
      </Container>
    </DivContainer>
  );
};

export default Footer;

function Subscribtion() {
  return (
    <>
      <HeaderName
        TextAlign="center"
        MarginTop="70px"
        FontSize="18px"
        FontWeight="500"
        Color="#ffffff"
      >
        Subscribe to get our Newsletter
      </HeaderName>
      <CardContainer Gap="20px">
        <Input Width="250px" placeholder="Your Email" />
        <Button FontSize="10px" Padding="10px 25px">
          Get Started
        </Button>
      </CardContainer>
    </>
  );
}
