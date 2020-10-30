import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../components/hook'; 
import { Burger, Menu } from '../components';
import vid from '../media/JimmyHome.mp4';

export default function HomeSection(){
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return(
        <div id="home-section" className="section">
            <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            </div>
            <video autoPlay loop muted>
                <source src={vid} type="video/mp4"/>
            </video>
            <h1>James C. Burns</h1>
            <p>ACTOR - WRITER - DIRECTOR</p>
            
        </div>
    )
};
