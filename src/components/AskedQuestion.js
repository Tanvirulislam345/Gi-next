import React from "react";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { HrRule } from "../style/ComponentStyles";
import { Header } from "./shareComponents/Shared";

const AskedQuestion = () => {
  return (
    <Row className="g-3" style={{ padding: "10px 0px 100px" }}>
      <Col xs={12} md={3}>
        <Header title="FAQ">
          <HrRule Width="150px" />
        </Header>
      </Col>
      <Col xs={12} md={9}>
        <Question />
      </Col>
    </Row>
  );
};

export default AskedQuestion;

function Question() {
  return (
    <Accordion defaultActiveKey="0">
      {[1, 2, 3, 4].map((data, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>
            Is a crypto trading bot profitable?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
