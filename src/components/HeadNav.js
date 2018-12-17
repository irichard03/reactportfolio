//Navbar component from Reactstrap (https://reactstrap.github.io)
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class HeadNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">Portfolio | Ian Richard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="/components/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="/components/">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret  className="dropdown">
                 Explore
                </DropdownToggle>
                <DropdownMenu className="dropdownmenu" right>
                  <DropdownItem>
                  About
                  </DropdownItem>
                  <DropdownItem>
                  Portfolio
                  </DropdownItem>
                  <DropdownItem>
                  Contact
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}