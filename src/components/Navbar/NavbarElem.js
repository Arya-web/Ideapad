import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarElem.css";
const NavbarElem = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="nav-elem"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              ideaPad
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" justify-content-around"
          >
            <Nav className="d-none d-md-flex invisible">
              <Nav.Link href="#pricing">Ideas Catalogue</Nav.Link>
              <NavDropdown title="Mr. ASD" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex pt-4 pt-md-0">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="search-btn">Search</Button>
            </Form>
            <Nav>
              <Link
                to="/ideas"
                style={{ textDecoration: "none", color: "white" }}
                className="d-flex align-items-center"
              >
                Ideas Catalogue
              </Link>
              <NavDropdown title="Mr. ASD" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarElem;
