import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  ContainerSelf,
  DivContainer,
  HeaderName,
  UpDownAnimation,
} from "../style/ComponentStyles";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import icon1 from "../assets/icon1.png";
import background from "../assets/Backgroun1.png";
import { Link } from "react-scroll";

const HeaderBanner = () => {
  return (
    <DivContainer BgImage={`url(${background})`} MinHeight="85vh" id="home">
      <Container>
        <Row xs={1} lg={2} className="g-3">
          <Col>
            <ContainerSelf
              JustifyContent="start"
              AlignItems="start"
              className="content"
            >
              <HeaderName FontWeight="700" FontSize="40px" Color="#ffffff">
                The World's most advanced automated crypto trading for Everyone
              </HeaderName>
              <HeaderName
                FontWeight="500"
                FontSize="20px"
                Color="#ffffff"
                MarginTop="20px"
              >
                You don’t need to control trade anymore.
              </HeaderName>
              <Link
                to="download"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <Button MarginTop="30px">Download now</Button>
              </Link>
            </ContainerSelf>
          </Col>
          <Col>
            <ContainerSelf Direction="row">
              <UpDownAnimation
                Animation="mover1"
                Index="1"
                Height="500px"
                Width="250px"
              >
                <img src={phone1} alt="image" height="100%" width="100%" />
              </UpDownAnimation>
              <UpDownAnimation
                Animation="mover2"
                MarginLeft="-80px"
                MarginRight="-70px"
                Height="450px"
                Width="290px"
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
