import styled from "styled-components";

export const DivContainer = styled.div`
  background-image:${(props) => props.BgImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: fill;
  width: ${(props) => props.Width || "100%"};
  min-height:  ${(props) => props.MinHeight || "100vh"};
`;


export const UpDownAnimation = styled.img`
  animation: ${(props) => `${props.Animation} 2s infinite alternate`};
  margin-left: ${(props) => props.MarginLeft};
  margin-right: ${(props) => props.MarginRight};
  z-index: ${(props) => props.Index};
  height: ${(props) => props.Height || "500px"};
  width: ${(props) => props.Width};
  //   &:hover {
  //     border: 1px solid gray;
  //   }
`;

export const HeaderName = styled.h1`
  font-style: normal;
  font-family: ${(props) => props.FontFamily || "Poppins"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "38px"};
  color: ${(props) => props.Color || "#000000"};
  text-align: ${(props) => props.TextAlign};
  margin-top: ${(props) => props.MarginTop};
  padding: ${(props) => props.Padding};
`;

export const Button = styled.button`
  font-style: normal;
  font-family: ${(props) => props.FontFamily || "Poppins"};
  font-weight: ${(props) => props.FontWeight || "600"};
  font-size: ${(props) => props.FontSize || "14px"};
  color: ${(props) => props.Color || "#ffffff"};
  margin-top: ${(props) => props.MarginTop};
  box-shadow:${(props) => props.Shadow || "0px 4px 8px rgba(0, 0, 0, 0.15)"};
  background: ${(props) => props.Background || "linear-gradient(180deg, #3EA36B 0%, #439D57 100%)"} ;
  border-radius: 28px;
  border: none;
  Padding: ${(props) => props.Padding || "14px 25px"} ;
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
  margin: "10px";
  clip-path: polygon(0% 50%, 25% 95%, 75% 95%, 100% 50%, 75% 5%, 25% 5%);
  clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
`



export const ContainerSelf = styled.div`
  display: flex;
  flex-direction: ${(props) => props.Direction || "column"};
  justify-content: ${(props) => props.JustifyContent || "center"}; 
  align-items:  ${(props) => props.AlignItems || "center"};  
  height: ${(props) => props.Height || "100%"};
  width: ${(props) => props.Width || "100%"};
  margin: ${(props) => props.Margin}; 
  padding: ${(props) => props.Padding};
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.JustifyContent || "center"}; 
  align-items:  ${(props) => props.AlignItems || "center"}; 
  padding: ${(props) => props.Padding};

`
export const Card = styled.div`
background: #FFFFFF;
box-shadow: ${(props) => props.Shadow || "0px 0px 12px rgba(0, 0, 0, 0.08)"};
border-radius: ${(props) => props.BorderRadius || "20px"};
padding:  ${(props) => props.Padding || "40px"};
display: flex;
flex-direction: column;
justify-content: ${(props) => props.JustifyContent || "center"};
align-items:  ${(props) => props.AlignItems || "center"};
`


