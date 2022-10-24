import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  Card,
  CardContainer,
  HeaderName,
  HrRule,
} from "../style/ComponentStyles";
import blog from "../assets/blog.png";

const Blogs = () => {
  return (
    <Container>
      <Nav />
      <Row xd={1} sm={2} md={3} lg={4} className="g-3 mt-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => (
          <Col>
            <Card
              Shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
              Padding="0px"
              Margin="0px 5px"
            >
              <img src={blog} alt="" width="100%" height="170px" />
              <div style={{ padding: "20px" }}>
                <HeaderName FontSize="14px">
                  Crypto Signal Ultimate Guide 2022
                </HeaderName>
                <HeaderName FontSize="14px" Color="gray">
                  Sep 04, 2022
                </HeaderName>
                <HeaderName FontSize="12px" FontWeight="400" Color="black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  nec potenti commodo, nunc tincidunt. Nisi quisque nibh
                  volutpat nunc, platea.
                </HeaderName>
                <Button
                  Background="rgba(67, 160, 106, 0.2)"
                  Shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
                  Color="red"
                  Padding="4px 20px"
                >
                  Read full article
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;

function Nav() {
  const [clicked, setClicked] = useState("All");
  const values = ["All", "Tranding", "Popular", "Cripto"];
  return (
    <>
      <CardContainer JustifyContent="start" Margin="50px 0px 10px">
        {values.map((data, index) => (
          <HeaderName
            FontSize="18px"
            FontWeight="500"
            Padding="0px 10px"
            Color={clicked === data ? "#43A06A" : "black"}
            onClick={() => setClicked(data)}
          >
            {data}
          </HeaderName>
        ))}
      </CardContainer>
      <HrRule />
    </>
  );
}
