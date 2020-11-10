import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../components/hook'; 
import { Burger, Menu } from '../components';


export default function HomeSection(){
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return(
        <div id="home-section" className="section" ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
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
