import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  DivContainer,
  HeaderName,
  CardContainer,
} from "../style/ComponentStyles";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import popularbg from "../assets/popularbg.png";

const Popular = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    axios
      .get("https://ginexttradingcorp.com/api/top-currency")
      .then((res) => setBlogs(res.data.data));
  }, []);

  if (!blogs) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="grow" />
      </div>
    );
  }
  return (
    <DivContainer BgImage={`url(${popularbg})`}>
      <Container>
        <HeaderName TextAlign="center" Padding="140px 0px 20px">
          Popular Supported Cryptocurrencies
        </HeaderName>
        <HeaderName TextAlign="center" FontSize="14px" FontWight="500">
          We integrate with 10+ of the most popular exchange including
        </HeaderName>

        <CardContainer Padding="60px 0px 150px">
          <Row
            xs={1}
            sm={2}
            md={4}
            className="g-3"
            style={{ maxWidth: "800px" }}
          >
            {blogs?.map((data, index) => (
              <SimpleCard key={index} data={data} />
            ))}
          </Row>
        </CardContainer>
      </Container>
    </DivContainer>
  );
};

export default Popular;

function SimpleCard({ data }) {
  return (
    <Col>
      <Card Padding="20px 10px">
        <div className="logoImageContainer">
          <img
            src={require(`../assets/${data?.exchange_key}.png`)}
            alt="logo"
            className="logoImage"
          />
        </div>
        <HeaderName
          FontSize="20px"
          FontWight="600"
          MarginTop="10px"
          TextAlign="center"
        >
          {data?.exchange_key}
        </HeaderName>

        <CardContainer JustifyContent="space-between" FlexDirection="row">
          <CardContainer FlexDirection="column">
            <HeaderName
              FontSize="10px"
              FontWight="500"
              TextAlign="center"
              Color="#46A16B"
            >
              Previous Price
            </HeaderName>
            <HeaderName
              FontSize="12px"
              FontWight="600"
              TextAlign="center"
              Color="#000000"
            >
              {data?.buy_amount}
            </HeaderName>
          </CardContainer>
          <CardContainer FlexDirection="column">
            <HeaderName
              FontSize="10px"
              FontWight="500"
              TextAlign="center"
              Color="#46A16B"
            >
              Last Price
            </HeaderName>
            <HeaderName
              FontSize="12px"
              FontWight="600"
              TextAlign="center"
              Color="#000000"
            >
              {data?.sell_amount}
            </HeaderName>
          </CardContainer>
        </CardContainer>
      </Card>
    </Col>
  );
}
