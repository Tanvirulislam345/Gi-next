import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/navlogo.png";
// import { Link } from "react-scroll";

function AppBar2() {
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
            <NavLink to="/home" style={navStyle}>
              Home
            </NavLink>
            <Link to="#" style={navStyle}>
              blogs
            </Link>
            {/*  <Link
              activeClass="active"
              to="blogs"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              style={navStyle}
            >
              Blogs
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar2;
