//Navbar component from Reactstrap (https://reactstrap.github.io) 
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class FootNav extends React.Component {
  render() {
    return (
      <div>
        <Nav className="footer">
          <NavItem>
            <NavLink href="https://github.com/irichard03">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/ian-richard-75485b9/">LinkedIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://reactjs.org/">Powerd by React</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://unsplash.com/">Images from Unsplash</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}