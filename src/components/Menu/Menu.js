import React from 'react';
import {bool} from 'prop-types';
import { MenuStyle } from './Menu.styled';
import Resume from '../PDF/PDFbtn';


const Menu = ({open, ...props}) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    return(
        <MenuStyle open={open} aria-hidden={!isHidden} {...props}>
            <div className="navitems">
                <a href="#demos-section" tabIndex={tabIndex}>
                    Acting Demos
                </a>
                <a href="#cod" tabIndex={tabIndex}>
                    Call of Duty
                </a>
                <a href="#social-section" tabIndex={tabIndex}>
                    Social
                </a>
                <a href="#gallery-section" tabIndex={tabIndex}>
                    Gallery
                </a>
                <a href="#press-section" tabIndex={tabIndex}>
                    Press & Awards
                </a>
                <a href="#about-section" tabIndex={tabIndex}>
                    About
                </a>
                <Resume/>
                <a href="https://icewaterproductions.com/" tabIndex={tabIndex}>
                    <button className="ice-logo">ICEWATER PRODUCTIONS</button>
                </a>
                
            </div>
        </MenuStyle>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;