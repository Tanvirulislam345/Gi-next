import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/navlogo.png";
import { Link } from "react-scroll";

function AppBar() {
  const navStyle = {
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
    textDecoration: "none",
    selfAlign: "center",
    margin: "12px",
    cursor: "pointer",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        background: "#4EA470",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 2,
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" height="40px" width="120px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navStyle}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navStyle}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              style={navStyle}
            >
              Features
            </Link>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={navStyle}
            >
              Blogs
            </Link>
            <Link
              activeClass="active"
              to="download"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              style={navStyle}
            >
              Download
            </Link>

            {/* <Button
              Padding="0px 20px"
              Background="linear-gradient(180deg, #3FA36A 0%, #429F5C 100%)"
            >
              Get Started
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
