import styled from "styled-components";
import { keyframes } from "styled-components";
export const CardContainer = styled.div`
  border-radius: ${(props) => props.BorderRadius || "10px"};
  margin: ${(props) => props.Margin || "20px 0px 0px 0px"};
  background: white;
  padding: ${(props) => props.Padding || "20px"};
  width: ${(props) => props.Width || "100%"};
  box-shadow: ${(props) => props.Shadow || "0px 4px 8px rgba(0, 0, 0, 0.16)"};
`;

export const UpDownAnimation = styled.img`
  animation: ${(props) => `${props.mover || "mover2"} 2s infinite alternate`};
  margin-top: 80px;
  margin-left: ${(props) => props.MarginLeft};
  z-index: ${(props) => props.Index};
  height: 500px;
  //   &:hover {
  //     border: 1px solid gray;
  //   }
`;

export const HeaderName = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "38px"};
  color: #000000;
`;


export const HrRule = styled.hr`
  border-radius: 5px;
  border: 2px solid red;
  margin: ${(props) => props.Margin || "0px"};
  width: ${(props) => props.Width || "100%"};

`



export const PoligonCard = styled.div`
  width: 20vh;
  height: 20vh;
  background: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  margin: "10px"
  clip-path: polygon(0% 50%, 25% 95%, 75% 95%, 100% 50%, 75% 5%, 25% 5%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
`
