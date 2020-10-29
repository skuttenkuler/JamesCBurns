import React from 'react';
import {bool} from 'prop-types';
import { MenuStyle } from './Menu.styled';

const Menu = ({open}) => {
    return(
        <MenuStyle open={open}>
            <a href="/">
                Home
            </a>
            <a href="#about-section">
                About
            </a>
            <a href="#gallery-section">
                Gallery
            </a>
            <a href="#press-section">
                Press
            </a>
            <a href="/">
                Icewater Productions
            </a>
        </MenuStyle>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;