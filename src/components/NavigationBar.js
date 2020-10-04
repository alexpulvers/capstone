import Calendar from "./Calendar";
import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light, .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }

  .navbar-brand {
    font-size: 1.1em;
    color: #9FFFCB;
    &:hover { color: white; }
  }

  .form-center {
    position: absolute !important;
    left:25%
    right:25%
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="./Homepage">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./Signin">Sign In</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./SiteControl">SiteControl</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./Calendar">Calendar</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)


 export default NavigationBar;