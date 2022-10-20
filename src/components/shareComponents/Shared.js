import { HeaderName, Position } from "../../style/ComponentStyles";

export const Header = ({
  title,
  JustifyContent = "start",
  AlignItems = "center",
  FlexDirection = "column",
  children,
}) => {
  const updatedStyled = {
    display: "flex",
    justifyContent: JustifyContent,
    alignItems: AlignItems,
    flexDirection: FlexDirection,
  };
  console.log(updatedStyled);
  return (
    <div style={updatedStyled}>
      <HeaderName>{title}</HeaderName>
      {children}
    </div>
  );
};
