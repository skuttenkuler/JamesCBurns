import React from 'react';

import vid from '../media/JimmyHome.mp4';
import DrawerButton from '../components/SideDrawer/DrawerButton';

export default function HomeSection(props){
    
    return(
        <div id="home-section" className="section">
            <DrawerButton click={props.drawerClickHandler}/>
            <video autoPlay loop muted>
                <source src={vid} type="video/mp4"/>
            </video>
            <h1>James C. Burns</h1>
            <p>ACTOR - WRITER - DIRECTOR</p>
            
        </div>
    )
};
