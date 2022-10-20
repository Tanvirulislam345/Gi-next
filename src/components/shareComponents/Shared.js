import { HeaderName, } from "../../style/ComponentStyles";

export const Header = ({
  title,
  JustifyContent,
  AlignItems,
  FlexDirection,
  Width,
  Margin,
  children,
}) => {


  console.log(JustifyContent)

  return (
    <div style={{
      display: "flex",
      justifyContent: JustifyContent || "start",
      alignItems: AlignItems || "start",
      flexDirection: FlexDirection || "column",
      width: Width,
      margin: Margin,
    }}>
      <HeaderName>{title}</HeaderName>
      {children}
    </div>
  );
};
