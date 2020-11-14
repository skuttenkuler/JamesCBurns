import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaYoutube, FaInstagram, FaTwitterSquare } from "react-icons/fa";

export default function SocialSection(){
        return(
            <div id="social-section" >
                    <h2 id="social-header">Follow Me</h2>
                            <div className="social-container">
                                <Fade left big>
                                    <div className="social-1">
                                            <ul>
                                                <a href="https://www.cameo.com/5ef287a799be7b00268724a4">
                                                    <img id="cameo" alt="cameo" src="https://jimmyburns.s3-us-west-1.amazonaws.com/cmaeo.png"/>
                                                    <p>Cameo</p>
                                                    </a>
                                                <a href="https://www.youtube.com/playlist?list=PLb6xA2mR3X-gSrPI4qqoKY7Mr62WIZErr">
                                                    <FaYoutube id="social-icon"/>
                                                    <p>Livestream</p>
                                                </a>
                                                <a href="https://www.youtube.com/user/Sgtfrankwoods">
                                                    <FaYoutube id="social-icon"/>
                                                    <p>Sarge's Corner</p>
                                                </a>
                                            </ul>
                                    </div>
                                </Fade>
                                <Fade right big>
                                    <div className="social-2">
                                            <ul>
                                                <a href="https://www.instagram.com/jamesc.burns">
                                                   <FaInstagram id="social-icon"/>
                                                   <p>James C. Burns</p>
                                                </a>
                                                <a href="https://twitter.com/sgt_frank_woods?lang=en">
                                                    <FaTwitterSquare id="social-icon"/>
                                                    <p>Srgt Frank Woods</p>
                                                </a>
                                                <a href="https://twitter.com/jamescburns?lang=en">
                                                    <FaTwitterSquare id="social-icon"/>
                                                    <p>James C. Burns</p>
                                                </a>
                                            </ul>
                                    </div>
                                </Fade> 
                                </div>
                        </div>

        )
    
};