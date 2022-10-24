import React from "react";
import { Container } from "react-bootstrap";
import {
  Button,
  Card,
  DivContainer,
  HeaderName,
  HrRule,
} from "../style/ComponentStyles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Header } from "./shareComponents/Shared";
import blog from "../assets/blog.png";
import AskedQuestion from "./AskedQuestion";
import { useNavigate } from "react-router-dom";
const LatestBlog = () => {
  return (
    <DivContainer Backgroung="#F5F5F5">
      <Container>
        <Header title="Our Latest Blogs" Margin="100px 0px 20px">
          <HrRule Width="200px" />
        </Header>
        <HeaderName FontSize="16px" FontWeight="500" Width="660px">
          We constantly review our tools and popular trading strategies. Follow
          out blog to keep up-to-date with the latest news
        </HeaderName>
        <SliderFunction />
        <AskedQuestion />
      </Container>
    </DivContainer>
  );
};

export default LatestBlog;

function SliderFunction() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={140}
      totalSlides={8}
      visibleSlides={5}
      // step={5}
      style={{ marginTop: "30px" }}
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
