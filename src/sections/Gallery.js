import React from 'react';

import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default function GallerySection(){
    return(
        <div className="container">
        <div id="gallery-section" className="section">
            <div className="main-container">
                <h1>Gallery</h1>
                <BiChevronDownCircle className="openButton"/>
            </div>
        </div>
        <div id="gallery-dropdown" className="section-dropdown">
            <BiChevronUpCircle className="closeButton"/>
        </div>
    </div>
    )
};