import React from 'react';
import DrawerButton from '../components/SideDrawer/DrawerButton';

const Navbar = props => {
    return(
       <div className="header_toggle-button">
            <DrawerButton click={props.drawerClickHandler}/>
        </div>
    )
}

export default Navbar;