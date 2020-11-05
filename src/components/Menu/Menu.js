import React from 'react';
import {bool} from 'prop-types';
import { MenuStyle } from './Menu.styled';

const Menu = ({open, ...props}) => {
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    return(
        <MenuStyle open={open} aria-hidden={!isHidden} {...props}>
            <div className="navitems">
                <a href="#demos-section" tabIndex={tabIndex}>
                    Acting Demos
                </a>
                <a href="#cod-section" tabIndex={tabIndex}>
                    Call of Duty
                </a>
                <a href="#about-section" tabIndex={tabIndex}>
                    About
                </a>
                <a href="#gallery-section" tabIndex={tabIndex}>
                    Gallery
                </a>
                <a href="#press-section" tabIndex={tabIndex}>
                    Press
                </a>
                <a href="#social-section" tabIndex={tabIndex}>
                    Social
                </a>
                <a href="www.icewaterproductions.com" tabIndex={tabIndex}>
                    Icewater Productions
                </a>
            </div>
        </MenuStyle>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;