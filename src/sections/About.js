import React from 'react';


import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default function AboutSection(){
    return(
        <div className="container">
            <div id="about-section" className="section">
                <div className="main-container">
                    <h1>About</h1>
                    <BiChevronDownCircle className="openButton"/>
                </div>
            </div>
            <div id="about-dropdown" className="section-dropdown">
            <BiChevronUpCircle className="closeButton"/>
            </div>
        </div>
    )
};