import React, {useState} from 'react';

import { bool, func } from 'prop-types';
import { BiChevronDownCircle } from 'react-icons/bi';
import { BiChevronUpCircle } from 'react-icons/bi';

export default function AboutSection(){
    const [open, setOpen] = useState(false);
    return(
        <div>
            <div className="parallax-container">
                <div id="about-section" className="section">
                    <div className="main-container">
                        <h1>About</h1>
                        <BiChevronDownCircle className="openButton" open={open} onClick={() => setOpen(!open)}/>
                    </div>
                </div>
            </div>
            <div id="about-dropdown" className="section-dropdown" >
            <BiChevronUpCircle className="closeButton"/>
            {/* <div className="container">
                <div className="row">
                    <div col-6>Introduction</div>
                    <div col-3>Filmography</div>
                    <div col-3>Television</div>
                </div> */}
                {/* <div className="row">
                    <div col-3>
                        <p>l;kasdf;lkjasd;lkjasd;lkjas;dlkjas;dlkja;sldkjfa;slkdjf;lakjsdf;lkjasdf;lkjasd;flkjas;dlkjas;dlkjfas;ldkjf;alkjdsf;lksjdflkjsdlkjsdlfkjsdlfkjsldfkjsmnx,cmvn,xmncvlkjsdflkjsflkjsdlfkjslfkjsdlfkjwoeriuwoiuworiuworiuwlkdjflskjdflkjsdf</p>
                        <p>l;kasdf;lkjasd;lkjasd;lkjas;dlkjas;dlkja;sldkjfa;slkdjf;lakjsdf;lkjasdf;lkjasd;flkjas;dlkjas;dlkjfas;ldkjf;alkjdsf;lksjdflkjsdlkjsdlfkjsdlfkjsldfkjsmnx,cmvn,xmncvlkjsdflkjsflkjsdlfkjslfkjsdlfkjwoeriuwoiuworiuworiuwlkdjflskjdflkjsdf</p>
                    </div>
                    <div col-3>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div col-3> 
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div> */}
            {/* </div> */}
            </div>
        </div>
    )
}
AboutSection.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
// style={{open ? transform:translateY(0) : transform: + 'translateY(-100%)'}}