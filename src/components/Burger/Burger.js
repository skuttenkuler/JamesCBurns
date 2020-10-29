import React from 'react';
import { bool, func } from 'prop-types';
import {BurgerStyled} from './Burger.styled';

const Burger = ({open, setOpen}) => {
    return(
        <BurgerStyled open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </BurgerStyled>
    )
}
Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;