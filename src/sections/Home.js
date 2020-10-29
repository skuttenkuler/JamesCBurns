import React from 'react';

import vid from '../media/JimmyHome.mp4'

export default function HomeSection(){
    
    return(
        <div id="home-section" className="section">
            <video autoPlay loop muted>
                <source src={vid} type="video/mp4"/>
            </video>
            <h1>James C. Burns</h1>
            <p>ACTOR - WRITER</p>
        </div>
    )
};
