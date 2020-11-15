import React, { useState } from 'react';
import Resume from '../PDF/PDFbtn';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Menu = (props) => {
  //state for collapse
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavItem>
            <NavLink href="#"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/cameo-logo.png" alt="cameo"/></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/insta-logo.png" alt="insta"/></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/youtube-logo.png" alt="youtube"/></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/twitter-logo.png" alt="twitter"/></NavLink>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown>
                <DropdownToggle className="nav-menu-item"id="nav-item" nav caret>
                    ACTING
                </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                      <DropdownItem id="nav-item" href="#">Character Index</DropdownItem>
                      <DropdownItem id="nav-item" href="#">Call of Duty</DropdownItem>
                      <DropdownItem id="nav-item" href="#">Commercials</DropdownItem>
                      <DropdownItem id="nav-item" href="#">Master Demo</DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown>
                <DropdownToggle className="nav-menu-item" id="nav-item" nav caret>
                  ABOUT
                </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                      <DropdownItem id="nav-item" href="#">James C. Burns</DropdownItem>
                      <DropdownItem id="nav-item" href="#">Gallery</DropdownItem>
                      <DropdownItem id="nav-item" href="#">Contact</DropdownItem>
                      <DropdownItem id="nav-item" href="#"><Resume/></DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="nav-menu-item">
                <NavLink id="nav-item" href="#">FOLLOW ME</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#"><img id="ice-logo"src="https://jimmyburns.s3-us-west-1.amazonaws.com/icewaterlogoIce1.png" alt="icewater"/></NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
