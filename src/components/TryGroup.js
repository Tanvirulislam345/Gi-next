import React from "react";
import {
  CardContainer,
  DivContainer,
  HeaderName,
  UpDownAnimation,
} from "../style/ComponentStyles";
import background from "../assets/letTryBack.png";
import left from "../assets/left.png";
import middle from "../assets/middle.png";
import right from "../assets/rightgroup.png";
import playstor from "../assets/playstore.png";
const TryGroup = () => {
  return (
    <DivContainer BgImage={`url(${background})`}>
      <HeaderName FontSize="56px" TextAlign="center" Padding="60px 0px 0px">
        Let’s Try It
      </HeaderName>
      <HeaderName FontSize="14px" TextAlign="center">
        One-click to start the quantitative trading
      </HeaderName>

      <CardContainer>
        <UpDownAnimation Animation="mover3" Width="750px" Height="600px">
          <img src={left} alt="image" height="100%" width="100%" />
        </UpDownAnimation>
        <UpDownAnimation
          Animation="mover1"
          Width="500px"
          Height="520px"
          Index="1"
          className="phone"
        >
          <img src={middle} alt="image" height="100%" width="100%" />
        </UpDownAnimation>
        <UpDownAnimation Animation="mover4" Width="750px" Height="600px">
          <img src={right} alt="image" height="100%" width="100%" />
        </UpDownAnimation>
      </CardContainer>
      <CardContainer>
        <img src={playstor} alt="app" width="300px" height="60px" />
      </CardContainer>
    </DivContainer>
  );
};
export default TryGroup;
