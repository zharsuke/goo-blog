import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponents() {
    return (
        <Navbar expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="#home">Goo-Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="auth/register" className="nav-link">Register</Link>
              <Link to="auth/login" className="nav-link">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};