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
    <DivContainer BgImage={`url(${background})`}>
      <Container>
        <Row xs={1} md={2} className="g-3">
          <Col>
            <ContainerSelf
              JustifyContent="start"
              AlignItems="start"
              Margin="200px auto"
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
                src={phone1}
                alt="image"
                Animation="mover1"
                Index="1"
                Width="280px"
                Height="570px"
              />
              <UpDownAnimation
                src={phone2}
                alt="image"
                Animation="mover2"
                MarginLeft="-80px"
                MarginRight="-70px"
                Width="300px"
                Height="474px"
              />
              <UpDownAnimation
                src={icon1}
                alt="image"
                Animation="mover1"
                Index="1"
                Width="60px"
                Height="60px"
              />
            </ContainerSelf>
          </Col>
        </Row>
      </Container>
    </DivContainer>
  );
};

export default HeaderBanner;
