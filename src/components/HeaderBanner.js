import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  CardContainer,
  ContainerSelf,
  DivContainer,
  HeaderName,
  UpDownAnimation,
} from "../style/ComponentStyles";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import icon1 from "../assets/icon1.png";
import background from "../assets/Backgroun1.png";

const HeaderBanner = () => {
  return (
    <DivContainer BgImage={`url(${background})`} MinHeight="85vh">
      <Container>
        <Row xs={1} lg={2} className="g-3">
          <Col>
            <ContainerSelf
              JustifyContent="start"
              AlignItems="start"
              className="content"
            >
              <HeaderName FontWeight="700" FontSize="56px" Color="#ffffff">
                The world’s fastest growing Crypto App
              </HeaderName>
              <HeaderName
                FontWeight="600"
                FontSize="20px"
                Color="#ffffff"
                MarginTop="20px"
              >
                Track your performance to get your best crypto profit
              </HeaderName>
              <Button MarginTop="30px">Get Started</Button>
            </ContainerSelf>
          </Col>
          <Col>
            <ContainerSelf Direction="row">
              <UpDownAnimation
                Animation="mover1"
                Index="1"
                Height="500px"
                Width="220px"
              >
                <img src={phone1} alt="image" height="100%" width="100%" />
              </UpDownAnimation>
              <UpDownAnimation
                Animation="mover2"
                MarginLeft="-80px"
                MarginRight="-70px"
                Height="450px"
                Width="260px"
              >
                <img src={phone2} alt="image" height="100%" width="100%" />
              </UpDownAnimation>
              <UpDownAnimation
                Animation="mover1"
                Index="1"
                Height="60px"
                Width="60px"
              >
                <img src={icon1} alt="image" height="100%" width="100%" />
              </UpDownAnimation>
            </ContainerSelf>
          </Col>
        </Row>
      </Container>
    </DivContainer>
  );
};

export default HeaderBanner;
