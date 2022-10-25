import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  CardContainer,
  HeaderName,
  HrRule,
  PoligonCard,
} from "../style/ComponentStyles";
import { Header } from "./shareComponents/Shared";
import poligonIcon from "../assets/poligonIcon.png";
const RoboticsFeatures = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Header
        title="Our Robotics Features"
        JustifyContent="center"
        AlignItems="center"
        Width="440px"
        Margin="auto"
      >
        <HrRule Width="222px" />
      </Header>

      <Row xs={1} md={2} lg={3} className="g-3 mt-3">
        {[1, 2, 4, 3, 54, 6].map((data) => (
          <Col key={data}>
            <PoligonCard>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="logoImageContainer">
                  {" "}
                  <img src={poligonIcon} alt="" className="logoImage" />
                </div>

                <HeaderName
                  FontSize="18px"
                  TextAlign="center"
                  Color="#419F69"
                  MarginTop="30px"
                >
                  Infinity Grid Robot
                </HeaderName>
                <HeaderName
                  FontSize="12px"
                  FontWeight="500"
                  TextAlign="center"
                  Color="black"
                  Width="250px"
                >
                  Infinity Grid Bot helps to “buy low and sell high” 24/7 and it
                  makes sure the total amount of the assets remain the same
                  while the price keeps rising.
                </HeaderName>
              </div>
            </PoligonCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RoboticsFeatures;
