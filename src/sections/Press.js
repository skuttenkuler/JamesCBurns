import React from 'react';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default function PressSection(){
    return(
        <div>
        <div id="press-section" className="section">
            <div className="main-container">
                <h1>Press</h1>
                <BiChevronDownCircle className="openButton"/>
            </div>
        </div>
        <div id="about-dropdown" className="section-dropdown">
            <BiChevronUpCircle className="closeButton"/>
        </div>
    </div>
    )
};