import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>OnboardingProject</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
                <Glyphicon glyph='education' /> Counter
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/fetchcustomer'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Fetch Customer
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/fetchproduct'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Fetch Product
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/fetchstore'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Fetch Store
              </NavItem>
                    </LinkContainer>
                    <LinkContainer to={'/fetchsalesdetail'}>
                        <NavItem>
                            <Glyphicon glyph='th-list' /> Fetch Sales
              </NavItem>
                    </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
