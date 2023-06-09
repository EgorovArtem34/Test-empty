import React, { useState } from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { LuPersonStanding } from 'react-icons/lu';
import './header.scss';

const Header = () => {
  return (
    <header>
      <Navbar key={1} bg="light" expand={false} className="mb-3">
        <Container>
          <Navbar.Brand href="/">MitraSoft</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-menu" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-menu"
            aria-labelledby="offcanvasNavbarLabel-menu"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-menu">
                MitraSoft
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Посты</Nav.Link>
                <Nav.Link href="/about-me">Обо мне</Nav.Link>
                <LuPersonStanding className="avatar" />
                <span>Артем Егоров</span>
                <span>
                  <b>email</b>: artegtor@gmail.com
                </span>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
};

export default Header;

