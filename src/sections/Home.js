import React from 'react';

export default function HomeSection(){
    
    return(
        <div id="home-section" className="section" >
            <video autoPlay loop muted>
                <source src="https://jimmyburns.s3-us-west-1.amazonaws.com/JimmyHome.mp4" type="video/mp4"/>
            </video>
            <div className="home-text">
            <h1 class="header-text">James C. Burns</h1>
            <p>ACTOR - WRITER - DIRECTOR</p>
            </div>
           
            
        </div>
    )
};
