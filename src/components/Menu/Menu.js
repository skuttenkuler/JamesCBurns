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
            <NavLink href="https://www.cameo.com/5ef287a799be7b00268724a4"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/cameo-logo.png" alt="cameo"/></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://www.instagram.com/jamesc.burns"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/insta-logo.png" alt="insta"/></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://www.youtube.com/user/Sgtfrankwoods"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/youtube-logo.png" alt="youtube"/></NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://twitter.com/jamescburns?lang=en"><img className="social-nav-links" src="https://jimmyburns.s3-us-west-1.amazonaws.com/twitter-logo.png" alt="twitter"/></NavLink>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown>
                <DropdownToggle className="nav-menu-item"id="nav-item" nav caret>
                    ACTING
                </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                      <DropdownItem id="nav-item" href="#demos-section">Character Index</DropdownItem>
                      <DropdownItem id="nav-item" href="#cod">Call of Duty</DropdownItem>
                      <DropdownItem id="nav-item" href="#commerial-video">Commercials</DropdownItem>
                      <DropdownItem id="nav-item" href="#master-demo">Master Demo</DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown>
                <DropdownToggle className="nav-menu-item" id="nav-item" nav caret>
                  ABOUT
                </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                      <DropdownItem id="nav-item" href="#about-section">James C. Burns</DropdownItem>
                      <DropdownItem id="nav-item" href="#photo-gallery">Gallery</DropdownItem>
                      <DropdownItem id="nav-item" href="#getintouch">Contact</DropdownItem>
                      <DropdownItem id="nav-item" href="#"><Resume/></DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="nav-menu-item">
                <NavLink id="nav-item" href="#social-section">FOLLOW ME</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="https://icewaterproductions.com/"><img id="ice-logo"src="https://jimmyburns.s3-us-west-1.amazonaws.com/icewaterlogoIce1.png" alt="icewater"/></NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
