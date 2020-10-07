import Calendar from "./Calendar";
import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import styled from 'styled-components';
import ".././App.css";

const Styles = styled.div`
  .navbar 
  a, .navbar-nav, .navbar-light, .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  
 

  
`;

export const NavigationBar = () => (
    <div class="bg-img">
        <h1>Brewspace</h1>
  <Styles>
    <Navbar expand="rg">
      <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Text>
    </Navbar.Text>
        <Nav className="ml-auto" style={{textAlign: 'right'}}>
          <Nav.Item><Nav.Link href="./Homepage">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./SiteControl">Equipment List</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./Calendar">Calendar</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./Signin">Sign In</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="./Forum">Forum</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  </Styles>
      </div>
)


 export default NavigationBar;