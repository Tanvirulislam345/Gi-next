import React from "react";
import { Col, Row } from "react-bootstrap";
import { HrRule, PoligonCard } from "../style/ComponentStyles";
import { Header } from "./shareComponents/Shared";

const RoboticsFeatures = () => {
  return (
    <div>
      <Header title="Our Robotics Features"
        JustifyContent="center"
        AlignItems="center"
        Width="440px"
        Margin="auto"
      >
        <HrRule Width="222px" />
      </Header>

      <Row xs={1} sm={2} md={3}>
        {
          [1, 2, 3, 4].map(data => <Col key={data} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",

          }}>
            <PoligonCard />
          </Col>)
        }
      </Row>
    </div>
  );
};

export default RoboticsFeatures;
