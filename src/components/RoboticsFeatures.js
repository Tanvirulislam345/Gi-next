import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderName, HrRule, PoligonCard } from "../style/ComponentStyles";
import { Header } from "./shareComponents/Shared";

const datas = [
  {
    image: require("../assets/feature1.png"),
    title: "Trustworthy",
    message: "No access to your funds",
  },
  {
    image: require("../assets/feature2.png"),
    title: "Robot Service 24/7",
    message:
      "It never sleeps, operates in extreamly high speed and makes no emotional error.",
  },
  {
    image: require("../assets/feature3.png"),
    title: "Novice Rest Assured",
    message: "Just copy strategy from other experienced traders.",
  },
  {
    image: require("../assets/feature4.png"),
    title: "Win - Win",
    message: "Pay only when you make profit.",
  },
  {
    image: require("../assets/feature5.png"),
    title: "Build Your Community",
    message: "Extra bonuses via our referral program.",
  },
  {
    image: require("../assets/feature6.png"),
    title: "Competitive $",
    message: "Lowest annual fee ever!",
  },
];
const RoboticsFeatures = () => {
  return (
    <Container style={{ minHeight: "100vh" }} id="features">
      <Header
        title="Why Choose Us"
        JustifyContent="center"
        AlignItems="center"
        Width="440px"
        Margin="auto"
        Padding="140px 0px 20px"
      >
        <HrRule Width="222px" />
      </Header>

      <Row xs={1} md={2} lg={3} className="g-3 mt-3">
        {datas?.map((data, index) => (
          <Col key={index}>
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
                  <img src={data?.image} alt="" className="logoImage" />
                </div>

                <HeaderName
                  FontSize="18px"
                  TextAlign="center"
                  Color="#419F69"
                  MarginTop="30px"
                >
                  {data?.title}
                </HeaderName>
                <HeaderName
                  FontSize="12px"
                  FontWeight="500"
                  TextAlign="center"
                  Color="black"
                  Width="250px"
                >
                  {data?.message}
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
