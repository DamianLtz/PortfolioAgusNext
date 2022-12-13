import React from "react";
import Link from "next/link";
import Image from "next/image";

// utils & img's

import { scrollToContact } from "../utils/ScrollUtils";
import ContactMeLogo from "../img/navbar/contactMeLogo.svg";

// Bootstrap Components

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="portfolio"
        expand="lg"
        className="navbar-portfolio navbar-dark fixed-top">
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-name">
            <p className="text-light">Agustin Ietta</p>
            <p className="text-light">
              <span className="fw-bold">- </span>Product Designer
            </p>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="shadow-none border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="vh-100-mobile">
              <Nav className="me-auto mb-2 mb-lg-0 justify-content-evenly align-items-center h-100">
                <Link
                  href="/aboutMe"
                  className="text-light aboutme me-lg-2 me-0 nav-link"
                  scroll={false}>
                  About me
                </Link>
                <Link
                  href="/"
                  className="d-flex align-items-center nav-link text-light contact-me py-2 px-4"
                  onClick={(e) => scrollToContact(e)}>
                  Contact me
                  <span className="ms-2">
                    <Image src={ContactMeLogo} alt="" priority={true} />
                  </span>
                </Link>
                <Link
                  href="/unknownComponent"
                  className="text-light aboutme me-lg-2 me-0 nav-link"
                  scroll={false}>
                  More
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
