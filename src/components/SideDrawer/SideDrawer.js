import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }
    return(
    <nav className={drawerClasses}>
                        <ul>
                            <li><a href="#" style={{ textDecoration: 'none' }}><h3>HOME</h3></a></li>
                            <li><a href="#" style={{ textDecoration: 'none' }}><h3>ABOUT</h3></a></li>
                            <li><a href="#" style={{ textDecoration: 'none' }}><h3>GALLERY</h3></a></li>
                            <li><a href="#" style={{ textDecoration: 'none' }}><h3>PRESS</h3></a></li>
                        </ul>

    </nav>
    )};

export default sideDrawer;