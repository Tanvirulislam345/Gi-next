import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/navlogo.png";
import { Button } from "../style/ComponentStyles";

function AppBar() {
  const navStyle = {
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    textDecoration: "none",
    selfAlign: "center",
    margin: "12px",
  };
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: "#4EA470" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" height="40px" width="120px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/home" style={navStyle}>
              Home
            </NavLink>
            <NavLink to="#" style={navStyle}>
              About
            </NavLink>
            <NavLink to="/blog" style={navStyle}>
              Blog
            </NavLink>
            <NavLink href="#deets" style={navStyle}>
              Features
            </NavLink>
            <NavLink href="#deets" style={navStyle}>
              Download
            </NavLink>
            <Button
              Padding="0px 20px"
              Background="linear-gradient(180deg, #3FA36A 0%, #429F5C 100%)"
            >
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
