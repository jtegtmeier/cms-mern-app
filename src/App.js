import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">MERN CMS App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Site Name</NavItem>
          </Nav>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Profile</NavItem>
              <NavItem eventKey={2} href="#">Sign out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default App
