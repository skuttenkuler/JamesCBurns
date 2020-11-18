import React from 'react';
import Fade from 'react-reveal/Fade';
    
export default function SocialSection(){
        return(
            <div id="social-section" >
                    <h2 id="social-header">Follow Me</h2>
                            <div className="social-container">
                                <Fade left big>
                                    <div className="social-1">
                                            <ul>
                                                <div className="social-icon-box">
                                                    <a href="https://www.cameo.com/5ef287a799be7b00268724a4">
                                                        <img id="social-image" alt="cameo" src="https://jimmyburns.s3-us-west-1.amazonaws.com/cameo-logo.png"/>
                                                        <p>Cameo</p>
                                                    </a>
                                                </div>
                                                <div className="social-icon-box">
                                                    <a href="https://www.youtube.com/playlist?list=PLb6xA2mR3X-gSrPI4qqoKY7Mr62WIZErr">
                                                        <img id="social-image"src="https://jimmyburns.s3-us-west-1.amazonaws.com/youtube-logo.png" alt="youtube"/>
                                                        <p>Livestream</p>
                                                    </a>
                                                </div>
                                                <div className="social-icon-box">
                                                <a href="https://www.youtube.com/user/Sgtfrankwoods">
                                                    <img id="social-image"src="https://jimmyburns.s3-us-west-1.amazonaws.com/youtube-logo.png" alt="youtube"/>
                                                    <p>Sarge's Corner</p>
                                                </a>
                                                </div>
                                            </ul>
                                    </div>
                                </Fade>
                                <Fade right big>
                                    <div className="social-2">
                                            <ul>
                                                <div className="social-icon-box">
                                                <a href="https://www.instagram.com/jamesc.burns">
                                                   <img id="social-image"src="https://jimmyburns.s3-us-west-1.amazonaws.com/insta-logo.png" alt="insta"/>
                                                   <p>James C. Burns</p>
                                                </a>
                                                </div>
                                                <div className="social-icon-box">
                                                <a href="https://twitter.com/sgt_frank_woods?lang=en">
                                                <img id="social-image"src="https://jimmyburns.s3-us-west-1.amazonaws.com/twitter-logo.png" alt="twitter"/>
                                                    <p>Sgt. Frank Woods</p>
                                                </a>
                                                </div>
                                                <div className="social-icon-box">
                                                <a href="https://twitter.com/jamescburns?lang=en">
                                                    <img id="social-image"src="https://jimmyburns.s3-us-west-1.amazonaws.com/twitter-logo.png" alt="twitter"/>
                                                    <p>James C. Burns</p>
                                                </a>
                                                </div>
                                            </ul>
                                    </div>
                                </Fade> 
                                </div>
                        </div>

        )
    
};