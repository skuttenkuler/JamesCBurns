import React from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Resume from '../PDF/PDFbtn';


export default class NavBar extends React.Component{
    constructor(props){
        super(props);

        //set the toggle for dropdowns and default to false
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseExit = this.onMouseExit.bind(this);
        this.state = {
            dropdownOpen:false
        };
    }
    //functions for toggle, open, exit
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    onMouseEnter(){
        this.setState({
            dropdownOpen:true
        })};
    onMouseExit(){
        this.setState({
            dropdownOpen:false
        })};
    render(){
        return(
            <div className="navbar">
                <Nav>

                
                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        ACTING
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">Character Index</DropdownItem>
                        <DropdownItem href="#">Call of Duty</DropdownItem>
                        <DropdownItem href="#">Commercials</DropdownItem>
                        <DropdownItem href="#">Master Demo</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        ABOUT
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">James C. Burns</DropdownItem>
                        <DropdownItem href="#">Gallery</DropdownItem>
                        <DropdownItem href="#">Contact</DropdownItem>
                        <DropdownItem href="#"><Resume/></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavItem>
                    <NavLink href="#">FOLLOW ME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><img src="" alt="icewater"/></NavLink>
                </NavItem>
                </Nav>
            </div>
            
        
        )
    }
}
