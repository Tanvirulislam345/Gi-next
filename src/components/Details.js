import React from "react";
import { Container } from "react-bootstrap";
import { Button, Card, HeaderName } from "../style/ComponentStyles";
import blogImage from "../assets/blogImage.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useNavigate } from "react-router-dom";
import blog from "../assets/blog.png";
import { Header } from "./shareComponents/Shared";

const Details = ({ id }) => {
  return (
    <Container>
      <HeaderName
        FontSize="16px"
        FontWeight="500"
        TextAlign="center"
        MarginTop="110px"
      >
        Posted On: 04 September, 2022
      </HeaderName>
      <HeaderName
        FontSize="56px"
        TextAlign="center"
        Color="#439F69"
        MarginTop="30px"
        style={{
          width: "100%",
          maxWidth: "960px",
          margin: "auto",
        }}
      >
        10 Best Crypto Trading Bot Strategies 2022
      </HeaderName>
      <img
        src={blogImage}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1270px",
          maxHeight: "600px",
          margin: "20px auto",
        }}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          margin: "auto",
        }}
      >
        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="start"
          MarginTop="20px"
          LineHeight="27px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
          potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
          platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
          urna. Vel nibh cursus interdum nibh bibendum. We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
        </HeaderName>
        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="start"
          LineHeight="27px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
          potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
          platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
          urna. Vel nibh cursus interdum nibh bibendum. We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.
        </HeaderName>
        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="start"
          LineHeight="27px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
          potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
          platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
          urna. Vel nibh cursus interdum nibh bibendum. We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.
        </HeaderName>
        <HeaderName FontSize="16px" FontWeight="600" TextAlign="start">
          We know that crypto currency becomes
        </HeaderName>
        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="start"
          LineHeight="27px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
          potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
          platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
          urna. Vel nibh cursus interdum nibh bibendum. We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.
        </HeaderName>
        <HeaderName FontSize="16px" FontWeight="600" TextAlign="start">
          We know that crypto currency becomes
        </HeaderName>
        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="start"
          LineHeight="27px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
          potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
          platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
          urna. Vel nibh cursus interdum nibh bibendum. We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.We are an intelligent
          platform and we have a robot able to make thousands of daily
          operations with Bitcoin, Ethereum and alt coin of crypto market. We
          are eager to innovate, generate and share positive financial results
          in the arbitrage business of cryptocurrency and be recognized as the
          most responsible, trustworthy company around.
        </HeaderName>
        <img
          src={blogImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "960px",
            maxHeight: "440px",
            margin: "20px auto",
          }}
        />

        <HeaderName
          FontSize="14px"
          FontWeight="400"
          TextAlign="start"
          LineHeight="27px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
          potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
          platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
          urna. Vel nibh cursus interdum nibh bibendum. We are an intelligent
          platform and we have a robot able to make thousands of daily
        </HeaderName>
        <Header title="Related Blogs" Margin="40px 0px 10px" />
        <SliderFunction />
      </div>
    </Container>
  );
};

export default Details;

function SliderFunction() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={140}
      totalSlides={8}
      visibleSlides={4}
      // step={5}
    >
      <Slider>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
          <Slide key={index}>
            <SliderItem />
          </Slide>
        ))}
      </Slider>
      {/* 
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext> */}
    </CarouselProvider>
  );
}

function SliderItem() {
  const navigate = useNavigate();
  const handleRoute = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <Card
      Shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
      Padding="0px"
      Margin="0px 5px"
      onClick={() => handleRoute(1)}
    >
      <img src={blog} alt="" width="100%" height="170px" />
      <div style={{ padding: "20px" }}>
        <HeaderName FontSize="14px">
          Crypto Signal Ultimate Guide 2022
        </HeaderName>
        <HeaderName FontSize="14px" Color="gray">
          Sep 04, 2022
        </HeaderName>
        <Button
          Background="rgba(67, 160, 106, 0.2)"
          Shadow="0px 0px 2px rgba(0, 0, 0, 0.25)"
          Color="#43A06A"
          Padding="4px 20px"
          Margin="10px 0px 0px"
          onClick={() => handleRoute(1)}
        >
          Read full article
        </Button>
      </div>
    </Card>
  );
}
