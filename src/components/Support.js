import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, CardContainer, HeaderName } from "../style/ComponentStyles";
import logo from "../assets/exchangesA1.png";
const images = [
  require("../assets/exchangesA1.png"),
  require("../assets/exchangesB1.png"),
  require("../assets/exchangesC1.png"),
  require("../assets/exchangesD1.png"),
  require("../assets/exchangesE1.png"),
  require("../assets/exchangesF1.png"),
];

const Support = () => {
  return (
    <div>
      <HeaderName TextAlign="center" FontWeight="600" FontSize="38px">
        Supported Exchanges
      </HeaderName>
      <HeaderName TextAlign="center" FontWeight="500" FontSize="16px">
        We integrate with the most popular exchange including
      </HeaderName>
      <CardContainer Padding="60px 0px 150px">
        <Row
          xs={1}
          sm={2}
          md={3}
          className="gy-3 gx-5"
          style={{ maxWidth: "850px" }}
        >
          {images.map((data, index) => (
            <Col key={index}>
              <Card Padding="20px 10px" Shadow="none">
                <img
                  src={data}
                  alt="logo"
                  height="100%"
                  width="100%"
                  className="support"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </CardContainer>
    </div>
  );
};

export default Support;
