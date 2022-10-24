import React from "react";
import { Container } from "react-bootstrap";
import {
  CardContainer,
  DivContainer,
  HeaderName,
} from "../style/ComponentStyles";
import background from "../assets/Backgroun2.png";

const BlogHeader = () => {
  return (
    <DivContainer BgImage={`url(${background})`} MinHeight="60vh">
      <Container>
        <CardContainer FlexDirection="column" Height="50vh">
          <HeaderName
            FontWeight="700"
            FontSize="56px"
            Color="#ffffff"
            TextAlign="center"
            Padding="0px 0px 10px"
          >
            Know about our popular blogs
          </HeaderName>
          <HeaderName
            FontWeight="500"
            FontSize="14px"
            Color="#ffffff"
            TextAlign="center"
            Width="1020px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nec
            potenti commodo, nunc tincidunt. Nisi quisque nibh volutpat nunc,
            platea. Sit elementum laoreet amet pulvinar ante mauris facilisis in
            urna. Vel nibh cursus interdum nibh bibendum.
          </HeaderName>
        </CardContainer>
      </Container>
    </DivContainer>
  );
};

export default BlogHeader;
